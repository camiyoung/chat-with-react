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
        setActivedRooms(data);
      })
      .catch((error) => console.log(error));
  }, [currentRoom]);

  useEffect(() => {
    chatService
      .getMyRooms(username)
      .then((data) => {
        setMyChatList(data.rooms);
      })
      .catch((err) => console.error(err));
  }, [currentRoom]);

  useEffect(() => {
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          setMessages(room.messages);
        }
      });
    }
  }, [currentRoom]);

  useEffect(() => {
    chatService
      .getRoom(currentRoom)
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error(error));
  }, [currentRoom]);
  useEffect(() => {
    socket.emit('current room', currentRoom);
  }, [currentRoom]);
  useEffect(() => {
    socket.on('user list', (userList, room) => {
      console.log('userlist ->' + userList);
      console.log(room, currentRoom);
      if (currentRoom === room) {
        setUsers(userList);
      }
    });
  }, [currentRoom]);
  const sendMessage = useCallback((message, sentRoom) => {
    if (message) {
      socket.emit('sendMessage', message, sentRoom, username);
    }
  }, []);

  function onClickRoom(title) {
    console.log(title);

    let alreadyIn = false;
    setCurrentRoom(title);
    console.log(currentRoom);
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
      setMessages((messages) => [...messages, message]);
    });
  }, []);
  async function addMyChat(title) {
    chatService
      .joinRoom(username, title)
      .then((data) => setMyChatList(data))
      .catch((err) => console.error(err));
  }

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
