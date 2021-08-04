import express, { urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';
import router from './router.js';

const app = express();
const server = app.listen(8080, () => console.log(`서버시작`));
const io = new Server(server, { cors: { origin: 'http://localhost:3000' } });

app.use(cors({ origin: '*' }));

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

io.on('connect', (socket) => {
  let currentRoom;
  socket.on('signin', ({ username }) => {
    console.log(`username = ${username}연결`);

    socket.on('join', ({ room }) => {
      console.log(`${username} 입장 to room :${room}`);
      currentRoom = room;
      socket.join(room);
    });

    socket.on('sendMessage', (message) => {
      console.log(message);
      io.to(currentRoom).emit('message', { user: username, message });
    });
  });
});
