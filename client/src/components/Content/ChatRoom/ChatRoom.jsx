import React from 'react';
import UserList from './UserList/UserList';
import Messages from './Messages/Messages';
import InputForm from './InputForm';
const ChatRoom = ({
  room,
  messages,
  user,
  users,
  sendMessage,
  setMessages,
}) => {
  return (
    <div className='chatRoom'>
      <div className='chatArea'>
        <Messages messages={messages} user={user} />
        <InputForm
          sendMessage={sendMessage}
          room={room}
          setMessages={setMessages}
        />
      </div>

      <UserList users={users} />
    </div>
  );
};
export default ChatRoom;
