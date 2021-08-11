import React from 'react';
import InputForm from '../InputForm';
import Message from './Message';

const Messages = ({ messages, user, sendMessage }) => {
  return (
    <ul className='messages'>
      {messages && messages.map((msg) => <Message user={user} message={msg} />)}
    </ul>
  );
};

export default Messages;
