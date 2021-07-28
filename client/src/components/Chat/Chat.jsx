import React, { useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import queryString from 'query-string';

import HttpClient from '../../service/http';
import ChatService from '../../service/chat';

const httpClient = new HttpClient('http://localhost:8080');
const chatService = new ChatService(httpClient);

const Chat = ({ location }) => {
  const [username, setUsername] = useState('');
  const [currentRoom, setCurrentRoom] = useState();
  const [activedRooms, setActivedRooms] = useState([
    { title: 'room1' },
    { title: 'room2' },
    { title: 'room3' },
  ]);
  console.log(chatService.hello());
  const [myChatList, setMyChatList] = useState([]);
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log(location);
    setUsername(name);
    setCurrentRoom(room);
  }, [location.search]);

  useEffect(() => {
    chatService
      .getRoomList()
      .then((data) => {
        setActivedRooms(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [location]);

  function onClickRoom(title) {
    setCurrentRoom(title);
  }

  const onRoomListBtn = () => {
    setCurrentRoom('list');
  };

  const onNewChatBtn = (title) => {
    setActivedRooms((activedRooms) => {
      return [...activedRooms, { title }];
    });
  };

  const addMyChat = (title) => {
    console.log(title);
    setMyChatList((myChatList) => {
      const updated = [...myChatList, { title }];
      console.log(updated);
      return updated;
    });
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
      />
    </div>
  );
};
export default Chat;
