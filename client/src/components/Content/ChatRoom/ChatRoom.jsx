import React from 'react';
import UserList from './UserList/UserList';
import Messages from './Messages/Messages';
const ChatRoom = ({ room, messages, users, sendMessage }) => {
  return (
    <div className='chatRoom'>
      <Messages messages={messages} sendMessage={sendMessage} />
      <UserList users={users} />
    </div>
  );
};
export default ChatRoom;
