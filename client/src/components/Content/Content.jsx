import React from 'react';
import './content.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import Header from './Header';

import RoomList from './RoomList/RoomList';
import queryString from 'query-string';
import ChatRoom from './ChatRoom/ChatRoom';
const Content = ({ currentRoom, roomList, onClickRoom, addMyChat, user }) => {
  const room = roomList.find((room) => room.title === currentRoom);

  console.log(room);
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
        <ChatRoom room={room ? room : ''} />
      )}
    </div>
  );
};

export default Content;
