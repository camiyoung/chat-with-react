import express from 'express';
import * as roomRepository from './data/room.js';
import * as userRepository from './data/users.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/chat', async (req, res) => {
  const room = roomRepository.getRooms();

  res.status(200).json(room);
});

router.get('/user/:id', (req, res) => {
  const name = req.params.id;
  const joinedRooms = userRepository.roomsByUser(name);

  res.status(200).json(joinedRooms);
});

router.post('/chat/:roomtitle', async (req, res) => {
  const user = req.body.username;
  const roomtitle = req.params.roomtitle;
  const result = await userRepository.joinRoom(user, roomtitle);
  const room = await roomRepository.addUserToRoom(user, roomtitle);

  res.status(201).json(result);
});
router.get('/chat/:roomtitle', async (req, res) => {
  const roomtitle = req.params.roomtitle;

  const room = await roomRepository.getRoom(roomtitle);

  res.status(201).json(room);
});

router.post('/chat', async (req, res) => {
  const { title, username } = req.body;
  const created = await roomRepository.createRoom(title, username);
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
