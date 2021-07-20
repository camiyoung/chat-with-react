import React from 'react';
import MyChat from './MyChat';

const MyChatList = (props) => {
  const myChatList = [
    { title: 'room1', people: 3 },
    { title: 'room2', people: 2 },
    { title: 'room3', people: 1 },
  ];

  return (
    <ul className='myChatRoomList'>
      {myChatList.map((room) => (
        <li className='mychat'>
          <MyChat roomname={room.title} />
        </li>
      ))}
    </ul>
  );
};

export default MyChatList;
