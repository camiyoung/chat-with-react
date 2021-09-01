import React from 'react';
import Room from './Room';

const RoomList = ({ roomList, onClickRoom }) => {
  return (
    <div>
      <ul className='rooms'>
        {roomList.map((room) => (
          <Room room={room.title} onClickRoom={onClickRoom} />
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
