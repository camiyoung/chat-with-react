import React from 'react';
import './content.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import Header from './Header';
import RoomList from './RoomList/RoomList';
import ChatRoom from './ChatRoom/ChatRoom';

const Content = ({
  currentRoom,
  roomList,
  onClickRoom,
  addMyChat,
  user,
  sendMessage,
  messages,
  users,
}) => {
  // console.log(room);
  return (
    <div className='content'>
      <Header currentRoom={currentRoom} />
      {currentRoom === 'list' ? (
        <RoomList
          roomList={roomList}
          onClickRoom={onClickRoom}
          addMyChat={addMyChat}
          username={user}
        />
      ) : (
        <ChatRoom messages={messages} users={users} sendMessage={sendMessage} />
      )}
    </div>
  );
};

export default Content;
