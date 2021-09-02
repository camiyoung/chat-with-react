import React, { useEffect, useState } from 'react';
import UserList from './UserList/UserList';
import Messages from './Messages/Messages';
import InputForm from './InputForm';
const ChatRoom = ({
  currentRoom,
  message,
  user,
  users,
  sendMessage,
  myChatList,
}) => {
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState();
  useEffect(() => {
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          setMessages(room.messages);
        }
      });
    }
  }, [currentRoom, myChatList]);

  useEffect(() => {
    if (message) {
      if (currentRoom === message.sentRoom) {
        setMessages((messages) => {
          const newmsg = { sender: message.sender, message: message.message };
          return [...messages, newmsg];
        });
      }
    }
  }, [message, currentRoom]);

  useEffect(() => {
    if (users) {
      if (currentRoom === users.title) {
        setUserList(users.users);
      }
    }
  }, [users, currentRoom]);
  return (
    <div className='chatRoom'>
      <div className='chatArea'>
        <Messages messages={messages} user={user} />
        <InputForm
          sendMessage={sendMessage}
          currentRoom={currentRoom}
          setMessages={setMessages}
        />
      </div>

      <UserList users={userList} />
    </div>
  );
};
export default ChatRoom;
