import React from 'react';
import InputForm from '../InputForm';
import Message from './Message';

const Messages = (props) => {
  const messages = [
    { text: 'hello', usre: 'me' },
    { text: 'myname', usre: 'me' },
    { text: 'hahaha', usre: 'me' },
  ];

  return (
    <div className='chatArea'>
      <ul className='messages'>
        {messages.map((msg) => (
          <li className='message'>
            <Message message={msg.text} />
          </li>
        ))}
      </ul>
      <InputForm />
    </div>
  );
};

export default Messages;
