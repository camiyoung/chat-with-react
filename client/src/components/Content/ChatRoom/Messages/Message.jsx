import React from 'react';

const Message = ({ user, message }) => {
  let sender = message.sender === user ? 'me' : 'others';
  if (message.user === 'admin') sender = 'admin';

  return (
    <li>
      <div className={`message ${sender}`}>
        <div className={`text ${sender}`}>{message.message}</div>

        {sender !== 'me' && sender !== 'admin' && (
          <div className='sender'>{message.sender}</div>
        )}
      </div>
    </li>
  );
};

export default Message;
