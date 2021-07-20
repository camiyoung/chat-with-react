import React from 'react';

const RoomList = (props) => {
  const rooms = ['room1', 'room2', 'room3'];

  return (
    <div>
      <ul className='rooms'>
        {rooms.map((room) => (
          <li className='room '>
            <p>{room}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
