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

    socket.on('join', async ({ room }) => {
      console.log(`@@ 채팅방 입장 (${username} )to( ${room} )`);
      currentRoom = room;
      socket.join(currentRoom);
      console.log(socket.rooms);
      io.to(room).emit('message', currentRoom, {
        user: 'admin',
        message: `${username}님이 입장하셨습니다.`,
      });

      roomRepository.addUserToRoom(username, currentRoom);
      const currentRoomData = await roomRepository.getRoom(currentRoom);
      const userList = currentRoomData.users;

      io.emit('user list', userList);
    });

    socket.on('current room', (room) => {
      console.log(`current room = ${room}`);
      currentRoom = room;
    });

    socket.on('sendMessage', (message, sentRoom, sender) => {
      const result = userRepository.addMessage(username, sentRoom, {
        sender,
        message,
      });
      console.log(result);
      socket.emit('message', currentRoom, { sender, message });
      // if (currentRoom === sentRoom) {
      //   io.to(sentRoom).emit('message', sentRoom, {
      //     user: username,
      //     message,
      //   });
      // } else {
      //   console.log(`${sentRoom}에서 메세지를 전송했슴당`);
      // }
    });
  });
});
