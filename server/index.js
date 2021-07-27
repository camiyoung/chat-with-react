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
    console.log('get/chat');
  });
  res.status(200).json(rooms);
});

router.get('/room', async function (req, res) {
  const id = req.query.roomid;
  const room = await roomRepository.getRoomById(parseInt(id));
  console.log(room);
  res.sendStatus(200);
});

router.post('/chat', (req, res) => {
  console.log(req.body.title);
  const { title, username } = req.body;
  const created = roomRepository.createRoom(title, username);
  res.status(201).json(created);
});
app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080, () => console.log(`서버시작`));
