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

<details>
<summary>API 상세 내용 확인</summary>
<div markdown="1">

### GET /chat

개설된 채팅 방 목록

해당 방의 참여중인 유저 리스트를 확인 할 수 있습니다.

#### 요청 항목

없음.

#### 응답 데이터

타입 : 배열

| 항목명 | 설명  |
| --- | --- |
| id | 채팅 방 고유 ID |
| title | 채팅방 이름 |
| users | 채팅방에 참여중인 유저 목록  |

#### 예시

```jsx
[
    {
        "title": "room1",
        "users": [
            "jiyoung",
            "user1"
        ],
        "id": 1
    },
    {
        "title": "room3",
        "users": [
            "jiyoung",
            "user2"
        ],
        "id": 2
    }
]
```

### GET /user

참여중인 모든 유저의 정보를 리턴합니다.

#### 요청 항목

없음

#### 응답 항목

타입 : 배열

| 항목명  | 설명 |
| --- | --- |
| id | 유저 고유 ID |
| username | 유저 이름 |
| rooms | 유저가 참여중인 방 목록 |
| title | 채팅방 이름 |
| messages | 채팅방안의 메세지들 |
| sender | 메세지 작성자 |
| message | 메세지 내용 |

#### 예시



```
[
    {
        "id": 1,
        "username": "jiyoung",
        "rooms": [
            {
                "title": "room1",
                "messages": [
                    {
                        "sender": "user1",
                        "message": "hello"
                    }
                ]
            },
            {
                "title": "room3",
                "messages": [
                    {
                        "sender": "user1",
                        "message": "hello"
                    },
                    {
                        "sender": "user2",
                        "message": "yeah"
                    }
                ]
            }
        ]
    },
...
]
```

### GET /user/:username

username에 해당하는 정보만 리턴합니다.

#### 요청 항목

없음.

#### 응답 항목

타입 : Object

| 항목명  | 설명 |
| --- | --- |
| id | 유저 고유 ID |
| username | 유저 이름 |
| rooms | 유저가 참여중인 방 목록 |
| title | 채팅방 이름 |
| messages | 채팅방안의 메세지들 |
| sender | 메세지 작성자 |
| message | 메세지 내용 |

#### 예시

```
{
    {
        "id": 1,
        "username": "jiyoung",
        "rooms": [
            {
                "title": "room1",
                "messages": [
                    {
                        "sender": "user1",
                        "message": "hello"
                    }
                ]
            },
            {
                "title": "room3",
                "messages": [
                    {
                        "sender": "user1",
                        "message": "hello"
                    },
                    {
                        "sender": "user2",
                        "message": "yeah"
                    }
                ]
            }
        ]
    },
}
```


### POST /signup

채팅 시스템에 유저를 등록합니다.

#### 요청 항목

| 항목명 | 설명 |
| --- | --- |
| username  | 유저 이름 |

#### 응답 항목

String 

#### 예시

요청 body

```
{"username" : "mina"}
```

응답 데이터 

```
"mina"
```

### POST/chat

새로운 채팅방을 개설합니다.

#### 요청 항목

| 항목명 | 설명 |
| --- | --- |
| title | 채팅방 이름 |
| username | 방을 생성한 username |

#### 응답 항목

현재 개설되어있는 모든 채팅방의 리스트를 리턴합니다.

GET /chat 의 결과와 같음.

#### 예시

요청 body

```
{
  "title" : "new room",
  "username":"jiyoung"
}
```

### POST /user/:roomtitle

유저가 채팅방에 참여합니다.

#### 요청 항목

| 항목명 | 설명 |
| --- | --- |
| username | 유저 이름 |

#### 응답 항목

없음

#### 예시
요청 body

```
{"username":"mina"}
```

</div>
</details>

