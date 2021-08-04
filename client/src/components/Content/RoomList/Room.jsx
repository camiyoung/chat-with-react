import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Room = ({ room, onClickRoom, addMyChat, username }) => {
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
