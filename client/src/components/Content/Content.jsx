import React from 'react';
import './content.css';
import Messages from './ChatRoom/Messages/Messages';
import Header from './Header';
import UserList from './ChatRoom/UserList/UserList';
import RoomList from './RoomList/RoomList';

const Content = ({ currentRoom, roomList, onClickRoom, addMyChat }) => {
  return (
    <div className='content'>
      <Header currentRoom={currentRoom} />
      {currentRoom ? (
        <div className='chatRoom'>
          <Messages />
          <UserList />
        </div>
      ) : (
        <RoomList
          roomList={roomList}
          onClickRoom={onClickRoom}
          addMyChat={addMyChat}
        />
      )}
    </div>
  );
};

export default Content;
