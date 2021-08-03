import express from 'express';
import * as roomRepository from './data/room.js';
import * as userRepository from './data/users.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/chat', (req, res) => {
  const rooms = roomRepository.getRooms();
  rooms.map((room) => {});
  res.status(200).json(rooms);
});

router.get('/chat/:id', (req, res) => {
  const name = req.params.id;
  const joinedRooms = userRepository.roomsByUser(name);

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
  const room = await roomRepository.addUserToRoom(user, roomtitle);
  console.log(room);
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

  res.status(200).json(users);
});

router.post('/signup', (req, res) => {
  const username = req.body.username;
  userRepository.signUp(username);
  res.status(201).json(username);
});

export default router;
