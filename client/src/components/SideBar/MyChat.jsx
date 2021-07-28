import React from 'react';
import { Link } from 'react-router-dom';

const MyChat = ({ title, onClickRoom, username }) => {
  const onRoom = () => {
    onClickRoom(title);
  };
  return (
    <li onClick={onRoom} className='mychat'>
      <Link to={`/chat?name=${username}&room=${title}`}>
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default MyChat;
