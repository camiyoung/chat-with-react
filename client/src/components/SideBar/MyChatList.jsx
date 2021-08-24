import React from 'react';
import MyChat from './MyChat';

const MyChatList = ({ roomList, onClickRoom, addMyChat, username }) => {
  return (
    <ul className='myChatRoomList'>
      {roomList &&
        roomList.map((room) => (
          <MyChat
            title={room.title}
            onClickRoom={onClickRoom}
            addMyChat={addMyChat}
            username={username}
          />
        ))}
    </ul>
  );
};

export default MyChatList;
