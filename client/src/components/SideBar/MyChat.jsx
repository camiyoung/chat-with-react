import React from 'react';
import { useHistory } from 'react-router-dom';

const MyChat = ({ title, onClickRoom, hasNew }) => {
  const history = useHistory();
  const onRoom = () => {
    onClickRoom(title);
    history.push(`/chat/${title}`);
  };

  return (
    <li onClick={onRoom} className='mychat'>
      <span className='chat_title'>{title}</span>
      <span className={`isNew ${hasNew}`}>!</span>
    </li>
  );
};

export default MyChat;
