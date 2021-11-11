# chat-with-react

demo: https://chat-app-with-react-0908.netlify.app/

리액트와 Socket.io, Express로 개발한 채팅 시스템입니다.

![main](https://user-images.githubusercontent.com/60002973/139394361-131601e5-dd74-4184-8b88-097c4318f329.png)

### Send and receive message

socket을 활용해 실시간으로 메세지를 주고 받을 수 있습니다.
![send-messages-resize](https://user-images.githubusercontent.com/60002973/139394414-2bba4d80-f231-4ab6-aa81-b2e63a734fcc.gif)

- React
- Express
- Socekt.io

## 설치 및 실행

### 환경 변수 설정

/client/.env파일에 다음과 같이 환경 변수를 지정합니다.

```
REACT_APP_BASE_URL=http://localhost:8080

```

### 서버 설치 및 실행

localhost 8080번 포트에서 실행됩니다.

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

## Data Schema

#### Room Schema

각각의 room 은 다음과 같은 구조의 object입니다.

```
  {
    id: string,
    title: string,
    users: string array, // 방에 참가중인 users 배열
  }
```

#### User Schema

```
  {
    id: string,
    username: string array,
    rooms: object array, //사용자가 참여중인 방들의 배열
    	[{title, messages:[{sender,message}]}]
  }
```

## API methods

| method | 이름             | 응답 타입    | 설명                             |
| ------ | ---------------- | ------------ | -------------------------------- |
| GET    | /chat            | Object Array | 개설된 모든 채팅방 목록          |
| GET    | /user            | Object Array | 접속중인 모든 유저 목록          |
| GET    | /user/:username  | Object       | 유저가 참여하고 있는 채팅방 목록 |
| POST   | /signup          | String       | 유저 등록                        |
| POST   | /chat            | Object Array | 새로운 방 개설                   |
| POST   | /user/:roomtitle | Object       | 개설된 채팅방에 참여             |

### API spec

#### GET Methods

`GET`/chat

response

```
[{room},{room},...]
```

`GET`/chat/:roomtitle
response

```
{room}
```

`GET`/user
response

```
[{user},{user},...]
```

`GET`/user/:username
response

```
{user}
```

#### POST Methods

`POST`/chat
request

```
{title:string,username:string}
```

response

```
[{room},{room},...]
```

`POST`/signup
request

```
{username:string}
```

response

```
 username
```

`POST`/user/:roomtitle
request

```
{username:string}
```

response

```
{room}
```
