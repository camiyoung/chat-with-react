import React from 'react';

const Room = ({ room, onClickRoom }) => {
  const onRoom = () => {
    onClickRoom(room);
  };
  return (
    <li className='room ' onClick={onRoom}>
      <div className='title'>{room}</div>
    </li>
  );
};
export default Room;
