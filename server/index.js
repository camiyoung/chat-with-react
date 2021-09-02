import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';
import router from './router.js';
import * as roomRepository from './data/room.js';
import * as userRepository from './data/users.js';
const app = express();
const server = app.listen(8080, () => console.log(`서버시작`));
const io = new Server(server, { cors: { origin: 'http://localhost:3000' } });

app.use(cors({ origin: '*' }));

app.use(urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan('tiny'));

app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

io.on('connect', (socket) => {
  let currentRoom;
  socket.on('signin', ({ username }) => {
    console.log(`@@ 사용자 연결 : ${username} (${socket.id})`);

    socket.on('join', async (room) => {
      console.log(`@@ 채팅방 입장 (${username} )to( ${room} )`);
      currentRoom = room;
      socket.join(currentRoom);
      console.log(socket.rooms);
      const message = `${username}님이 입장하셨습니다.`;

      socket.to(currentRoom).emit('sendMessage', message, room, 'admin');
    });

    socket.on('user list', async (room) => {
      const findRoom = await roomRepository.getRoom(room.title);
      console.log(findRoom);
      socket.broadcast.emit('users', findRoom);
    });

    socket.on('sendMessage', async (message, sentRoom, sender) => {
      const result = await userRepository.addMessage(username, sentRoom, {
        sender,
        message,
      });
      console.log(result);
      const room = await roomRepository.getRoom(sentRoom);
      const usersInRoom = room.users;
      usersInRoom.forEach((user) => {
        if (user !== username) {
          userRepository.addMessage(user, sentRoom, { sender, message });
        }
      });

      socket.emit('message', { sender, message, sentRoom });
      socket.broadcast.emit('message', {
        sender,
        message,
        sentRoom,
      });
    });
  });
});
