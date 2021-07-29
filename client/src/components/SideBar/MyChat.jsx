import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const MyChat = ({ title, onClickRoom, username }) => {
  const history = useHistory();
  const onRoom = () => {
    onClickRoom(title);
    history.push(`/chat/${title}`);
  };
  return (
    <li onClick={onRoom} className='mychat'>
      <div>{title}</div>
    </li>
  );
};

export default MyChat;
