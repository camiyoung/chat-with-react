import express, { urlencoded } from 'express';
import cors from 'cors';
import * as roomRepository from './data/room.js';
import bodyParser from 'body-parser';

const router = express.Router();

const app = express();

app.use(cors({ origin: '*' }));

app.use(urlencoded({ extended: true }));
app.use(express.json());

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/chat', (req, res) => {
  const rooms = roomRepository.getRooms();
  rooms.map((room) => {
    console.log('채팅 목록 불러오기');
  });
  res.status(200).json(rooms);
});

router.post('/chat', (req, res) => {
  const { title, username } = req.body;
  const created = roomRepository.createRoom(title, username);
  res.status(201).json(created);
  console.log(`채팅방 생성 ${title}`);
});
app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080, () => console.log(`서버시작`));
