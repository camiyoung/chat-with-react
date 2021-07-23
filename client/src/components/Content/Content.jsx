import React from 'react';
import './content.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Messages from './ChatRoom/Messages/Messages';
import Header from './Header';
import UserList from './ChatRoom/UserList/UserList';
import RoomList from './RoomList/RoomList';

const Content = ({ currentRoom, roomList, onClickRoom, addMyChat }) => {
  return (
    <div className='content'>
      <Header currentRoom={currentRoom} />
      <Switch>
        (
        <>
          <Route exact path='/list'>
            <RoomList
              roomList={roomList}
              onClickRoom={onClickRoom}
              addMyChat={addMyChat}
            />
          </Route>
          <Route exact path={`/room:id`}>
            <div className='chatRoom'>
              <Messages />
              <UserList />
            </div>
          </Route>
        </>
        )
      </Switch>
    </div>
  );
};

export default Content;
