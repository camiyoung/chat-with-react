import React, { useCallback, useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import { useHistory, useLocation } from 'react-router';

let socket;
const Chat = ({ chatService, username }) => {
  const [currentRoom, setCurrentRoom] = useState('list');
  const [activedRooms, setActivedRooms] = useState([]);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState();
  const [myChatList, setMyChatList] = useState([]);

  const history = useHistory();
  const BASE_URL = 'http://localhost:8080/';

  useEffect(() => {
    socket = io(BASE_URL);

    socket.emit('signin', { username });
  }, [BASE_URL]);

  useEffect(() => {
    chatService
      .getRoomList()
      .then((data) => {
        console.log(data);
        setActivedRooms(data);
      })
      .catch((error) => console.log(error));
  }, [currentRoom]);

  useEffect(() => {
    chatService
      .getMyRooms(username)
      .then((data) => {
        console.log(data);

        setMyChatList(data.rooms);
      })
      .catch((err) => console.error(err));
  }, [currentRoom]);

  useEffect(() => {
    myChatList.forEach((room) => {
      if (room.title === currentRoom) {
        setMessages(room.messages);
        console.log(messages);
      }
    });
  }, [currentRoom]);

  useEffect(() => {
    chatService
      .getRoom(currentRoom)
      .then((data) => {
        console.log(data);

        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, [currentRoom]);
  useEffect(() => {
    socket.emit('current room', currentRoom);
  }, [currentRoom]);
  useEffect(() => {
    socket.on('user list', (userList) => {
      console.log('userlist ->' + userList);
      setUsers(userList);
    });
  }, []);
  const sendMessage = useCallback((message, sentRoom) => {
    if (message) {
      console.log(`전송메세지 ${message}`);
      socket.emit('sendMessage', message, sentRoom, username);
    }
  }, []);

  async function onClickRoom(title) {
    let alreadyIn = false;
    setCurrentRoom(title);

    myChatList.forEach((chatroom) => {
      if (chatroom.title === title) alreadyIn = true;
    });

    if (!alreadyIn) {
      addMyChat(title);
      socket.emit('join', { room: title });
    }

    history.push(`/chat/${title}`);
  }

  const onRoomListBtn = () => {
    setCurrentRoom('list');
    history.push('/chat');
  };

  const onNewChatBtn = (title) => {
    setActivedRooms((activedRooms) => {
      return [...activedRooms, { title }];
    });
  };

  useEffect(() => {
    socket.on('message', (room, message) => {
      console.log('현재 방:' + currentRoom + '메세지 발송한방: ' + room);
      console.log(currentRoom === room);

      setMessages((messages) => [...messages, message]);
    });
  }, []);
  const addMyChat = (title) => {
    chatService
      .joinRoom(username, title)
      .then((data) => setMyChatList(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className='app'>
      <SideBar
        roomList={myChatList}
        addMyChat={addMyChat}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        onRoomListBtn={onRoomListBtn}
        onNewChatBtn={onNewChatBtn}
        username={username}
        chatService={chatService}
      />
      <Content
        roomList={activedRooms}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        addMyChat={addMyChat}
        user={username}
        sendMessage={sendMessage}
        messages={messages}
        users={users}
      />
    </div>
  );
};
export default Chat;
