import express from 'express';
import * as roomRepository from './data/room.js';
import * as userRepository from './data/users.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.sendStatus(200);
});
router.get('/server', (req, res) => {
  res.status(200).json('Sever is running now!');
});

//GET 개설된 채팅방 리스트 불러오기
router.get('/chat', async (req, res) => {
  const room = roomRepository.getRooms();
  console.log(room);
  res.status(200).json(room);
});

//GET 사용자가 참여중인 방 목록 불러오기
router.get('/user/:id', async (req, res) => {
  const name = req.params.id;
  const user = await userRepository.getUser(name);

  res.status(200).json(user);
});

//GET 채팅방의 정보 불러오기
router.get('/chat/:roomtitle', async (req, res) => {
  const roomtitle = req.params.roomtitle;

  const room = await roomRepository.getRoom(roomtitle);

  res.status(201).json(room);
});

//GET 가입된 모든 유저 정보
router.get('/user', (req, res) => {
  const users = userRepository.getUsers();
  res.status(200).json(users);
});

//POST 새로운 채팅방 생성
router.post('/chat', async (req, res) => {
  const { title, username } = req.body;
  const created = await roomRepository.createRoom(title, username);
  res.status(201).json(created);
  console.log(`채팅방 생성 ${title}`);
});

//POST 사용자가 개설된 방에 참여
router.post('/user/:roomtitle', async (req, res) => {
  const user = req.body.username;
  const roomtitle = req.params.roomtitle;
  const result = await userRepository.joinRoom(user, roomtitle);
  const room = await roomRepository.addUserToRoom(user, roomtitle);

  res.status(201).json(room);
});

// POST 새로운 유저 가입
router.post('/signup', (req, res) => {
  const username = req.body.username;
  userRepository.signUp(username);
  res.status(201).json(username);
});

export default router;
