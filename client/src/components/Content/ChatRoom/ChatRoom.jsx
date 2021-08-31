import React, { memo, useEffect, useState } from 'react';
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
  getRoomUsers,
}) => {
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState();
  console.log(myChatList);
  useEffect(() => {
    if (myChatList) {
      myChatList.forEach((room) => {
        if (room.title === currentRoom) {
          console.log(room);
          setMessages(room.messages);
        }
      });
    }
  }, [currentRoom, myChatList]);

  useEffect(() => {
    console.log(message);
    if (message) {
      if (currentRoom === message.sentRoom) {
        setMessages((messages) => {
          const newmsg = { sender: message.sender, message: message.message };
          return [...messages, newmsg];
        });
      }
    }
  }, [message]);

  useEffect(() => {
    console.log(users);
    if (users) {
      if (currentRoom === users.title) {
        setUserList(users.users);
      }
    }
  }, [users]);
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
