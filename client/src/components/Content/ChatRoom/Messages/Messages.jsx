import React from 'react';
import InputForm from '../InputForm';
import Message from './Message';

const Messages = ({ messages, sendMessage }) => {
  console.log(messages);
  return (
    <ul className='messages'>
      {messages &&
        messages.map((msg) => (
          <li className='message'>
            <Message message={msg.message} />
          </li>
        ))}
    </ul>
  );
};

export default Messages;
