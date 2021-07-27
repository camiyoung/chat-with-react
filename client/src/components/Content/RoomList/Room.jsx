import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ room, onClickRoom, addMyChat, username }) => {
  const onRoom = () => {
    onClickRoom(room);
    addMyChat(room);
  };
  return (
    <li className='room ' onClick={onRoom}>
      <Link to={`/chat?name=${username}&&room=${room}`}>
        <p>{room}</p>
      </Link>
    </li>
  );
};
export default Room;
