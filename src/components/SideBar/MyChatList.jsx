import React from 'react';
import MyChat from './MyChat';

const MyChatList = ({ roomList, onClickRoom, addMyChat }) => {
  return (
    <ul className='myChatRoomList'>
      {roomList.map((room) => (
        <MyChat
          title={room.title}
          onClickRoom={onClickRoom}
          addMyChat={addMyChat}
        />
      ))}
    </ul>
  );
};

export default MyChatList;
