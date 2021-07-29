import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Room = ({ room, onClickRoom, addMyChat, username }) => {
  const history = useHistory();
  const onRoom = () => {
    onClickRoom(room);
    addMyChat(room);
    history.push(`/chat/${room}`);
  };
  return (
    <li className='room ' onClick={onRoom}>
      <p>{room}</p>
    </li>
  );
};
export default Room;
