import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';
import router from './router.js';
import * as roomRepository from './data/room.js';
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

    socket.on('join', async ({ room }) => {
      console.log(`@@ 채팅방 입장 (${username} )to( ${room} )`);
      currentRoom = room;
      socket.join(currentRoom);
      console.log(socket.rooms);
      io.in(room).emit('message', {
        user: 'admin',
        message: `${username}님이 입장하셨습니다.`,
      });

      roomRepository.addUserToRoom(username, currentRoom);
      const currentRoomData = await roomRepository.getRoom(currentRoom);
      const userList = currentRoomData.users;

      console.log(userList);
      io.emit('user list', userList);
    });

    socket.on('sendMessage', (message) => {
      const result = roomRepository.setMessage(currentRoom, username, message);
      console.log(result);
      io.to(currentRoom).emit('message', { user: username, message });
    });
  });
});
