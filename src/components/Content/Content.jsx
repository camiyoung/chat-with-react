import React from 'react';
import './content.css';
import Messages from './ChatRoom/Messages/Messages';
import Header from './Header';
import UserList from './ChatRoom/UserList/UserList';
import RoomList from './RoomList/Room';

const Content = (props) => {
  return (
    <div className='content'>
      <Header />
      {/* <RoomList /> */}
      <div className='chatRoom'>
        <Messages />
        <UserList />
      </div>
    </div>
  );
};

export default Content;
