import React from 'react';

import Message from './Message';

const Messages = ({ messages, user }) => {
  return (
    <ul className='messages'>
      {messages &&
        messages.map((msg) => <Message user={user} message={msg} key={msg} />)}
    </ul>
  );
};

export default Messages;
