import React from 'react';

const Message = ({ user, message }) => {
  const sender = message.user === user ? 'me' : 'others';

  return (
    <li>
      <div className={`message ${sender}`}>
        <div className={`text ${sender}`}>{message.message}</div>

        {sender !== 'me' && <div className='sender'>{message.user}</div>}
      </div>
    </li>
  );
};

export default Message;
