import React from 'react';
import InputForm from '../InputForm';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div className='chatArea'>
      <ul className='messages'>
        {messages.map((msg) => (
          <li className='message'>
            <Message message={msg.message} />
          </li>
        ))}
      </ul>
      <InputForm />
    </div>
  );
};

export default Messages;
