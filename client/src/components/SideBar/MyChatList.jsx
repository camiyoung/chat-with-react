import React from 'react';
import MyChat from './MyChat';

const MyChatList = ({
  roomList,
  onClickRoom,
  addMyChat,
  username,
  message,
  currentRoom,
}) => {
  return (
    <ul className='myChatRoomList'>
      {roomList &&
        roomList.map((room) => (
          <MyChat
            title={room.title}
            onClickRoom={onClickRoom}
            addMyChat={addMyChat}
            username={username}
            hasNew={room.hasNew}
            key={room.title}
          />
        ))}
    </ul>
  );
};

export default MyChatList;
