# chat-with-react

demo: https://camiyoung.github.io/chat-with-react/

리액트와 Socket.io, Express로 개발한 채팅 시스템입니다.

![main](https://user-images.githubusercontent.com/60002973/139394361-131601e5-dd74-4184-8b88-097c4318f329.png)

### Send and receive message

socket을 활용해 실시간으로 메세지를 주고 받을 수 있습니다.
![send-messages-resize](https://user-images.githubusercontent.com/60002973/139394414-2bba4d80-f231-4ab6-aa81-b2e63a734fcc.gif)

- React
- Express
- Socekt.io

## 설치 및 실행

### 서버 설치 및 실행

localhost 5000번 포트에서 실행됩니다.

```
cd server
npm install
npm start
```

### 클라이언트 설치 및 실행

localhsot 3000번 포트에서 실행됩니다.

```
cd client
npm install
npm start
```

## API methods

| method | 이름             | 타입   | 설명                                    |
| ------ | ---------------- | ------ | --------------------------------------- |
| GET    | /chat            | Array  | 개설된 모든 채팅방 목록                 |
| GET    | /user/:id        | Array  | 유저가 참여하고 있는 채팅방 목록        |
| GET    | /chat/:roomtitle | Array  | 해당 채팅방에 참여하고 있는 유저들 목록 |
| POST   | /chat            | String | 새로운 채팅방 생성                      |
| POST   | /user/:roomtitle | String | 개설된 채팅방에 참여                    |
| POST   | /signup          | String | 새로운 유저 가입                        |
