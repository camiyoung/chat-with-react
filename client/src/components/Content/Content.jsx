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
      <Header currentRoom={currentRoom} user={user} />
      <div className='chatContainer'>
        {currentRoom === 'list' ? (
          <RoomList
            roomList={roomList}
            onClickRoom={onClickRoom}
            addMyChat={addMyChat}
            username={user}
          />
        ) : (
          <ChatRoom
            messages={messages}
            user={user}
            users={users}
            sendMessage={sendMessage}
            room={currentRoom}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
