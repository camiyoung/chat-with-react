import React from 'react';
import { Link } from 'react-router-dom';

const MyChat = ({ title, onClickRoom }) => {
  const onRoom = () => {
    onClickRoom(title);
  };
  return (
    <li onClick={onRoom} className='mychat'>
      <Link to={`${title}`}>
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default MyChat;
