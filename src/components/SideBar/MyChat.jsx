import React from 'react';

const MyChat = ({ title, onClickRoom }) => {
  const onRoom = () => {
    onClickRoom(title);
  };
  return (
    <li onClick={onRoom} className='mychat'>
      <div>{title}</div>
    </li>
  );
};

export default MyChat;
