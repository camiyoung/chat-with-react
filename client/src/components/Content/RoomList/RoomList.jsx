import React from 'react';
import Room from './Room';

const RoomList = ({ roomList, onClickRoom, addMyChat, username }) => {
  return (
    <div>
      <ul className='rooms'>
        {roomList.map((room) => (
          <Room
            room={room.title}
            onClickRoom={onClickRoom}
            addMyChat={addMyChat}
            username={username}
          />
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
