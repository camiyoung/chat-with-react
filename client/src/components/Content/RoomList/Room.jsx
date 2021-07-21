import React from 'react';

const Room = ({ room, onClickRoom, addMyChat }) => {
  const onRoom = () => {
    onClickRoom(room);
    addMyChat(room);
  };
  return (
    <li className='room ' onClick={onRoom}>
      <p>{room}</p>
    </li>
  );
};
export default Room;
