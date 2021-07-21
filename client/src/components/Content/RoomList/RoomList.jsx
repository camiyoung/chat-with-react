import React from 'react';
import Room from './Room';

const RoomList = ({ roomList, onClickRoom, addMyChat }) => {
  return (
    <div>
      <ul className='rooms'>
        {roomList.map((room) => (
          <Room
            room={room.title}
            onClickRoom={onClickRoom}
            addMyChat={addMyChat}
          />
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
