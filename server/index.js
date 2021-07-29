import express, { urlencoded } from 'express';
import cors from 'cors';
import * as roomRepository from './data/room.js';
import * as userRepository from './data/users.js';
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

router.get('/chat/:id', (req, res) => {
  const name = req.params.id;
  const joinedRooms = userRepository.roomsByUser(name);
  console.log(joinedRooms);
  res.status(200).json(joinedRooms);
});

router.get('/chat/:roomtitle', (req, res) => {
  const title = req.params.roomtitle;
  const room = roomRepository.getRoom(title);
  res.status(200).json(room);
});

router.post('/chat/:roomtitle', async (req, res) => {
  const user = req.body.username;
  const roomtitle = req.params.roomtitle;
  const result = await userRepository.joinRoom(user, roomtitle);

  res.status(201).json(result);
});

router.post('/chat', (req, res) => {
  const { title, username } = req.body;
  const created = roomRepository.createRoom(title, username);
  res.status(201).json(created);
  console.log(`채팅방 생성 ${title}`);
});

router.get('/users', (req, res) => {
  const users = userRepository.getUsers();
  console.log(users);
  res.status(200).json(users);
});

router.post('/signup', (req, res) => {
  const username = req.body.username;
  userRepository.signUp(username);
  res.status(201).json(username);
});

app.use(router);

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080, () => console.log(`서버시작`));
