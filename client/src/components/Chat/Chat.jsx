import React, { useEffect } from 'react';
import Content from '../Content/Content';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import queryString from 'query-string';

import { useHistory, useLocation } from 'react-router';

const Chat = ({ chatService, username }) => {
  const locationState = useLocation().state;
  const [currentRoom, setCurrentRoom] = useState('list');
  const [activedRooms, setActivedRooms] = useState([]);

  const [myChatList, setMyChatList] = useState([]);
  const history = useHistory();

  console.log(`사용자명 ${username}`);
  useEffect(() => {
    chatService
      .getRoomList()
      .then((data) => {
        setActivedRooms(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [currentRoom]);

  useEffect(() => {
    chatService
      .getMyRooms(username)
      .then((data) => {
        setMyChatList(data);
      })
      .catch((err) => console.error(err));
  }, [username]);

  function onClickRoom(title) {
    setCurrentRoom(title);
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

  const addMyChat = (title) => {
    console.log(title);
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
      />
    </div>
  );
};
export default Chat;
