import React, { memo, useEffect, useState } from 'react';
import './content.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import Header from './Header';
import RoomList from './RoomList/RoomList';
import ChatRoom from './ChatRoom/ChatRoom';

const Content = memo(
  ({
    currentRoom,
    roomList,
    onClickRoom,
    user,
    sendMessage,
    users,
    message,
    myChatList,
  }) => {
    return (
      <div className='content'>
        <Header currentRoom={currentRoom} user={user} />
        <div className='chatContainer'>
          {currentRoom === 'list' ? (
            <RoomList roomList={roomList} onClickRoom={onClickRoom} />
          ) : (
            <ChatRoom
              message={message}
              user={user}
              users={users}
              sendMessage={sendMessage}
              currentRoom={currentRoom}
              myChatList={myChatList}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Content;
