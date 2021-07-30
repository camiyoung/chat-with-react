import React from 'react';
import UserList from './UserList/UserList';
import Messages from './Messages/Messages';
const ChatRoom = ({ room }) => {
  console.log(room);
  const users = room.users;
  const messages = room.messages;
  return (
    <div className='chatRoom'>
      <Messages messages={messages} />
      <UserList users={users} />
    </div>
  );
};
export default ChatRoom;
