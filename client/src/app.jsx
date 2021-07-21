import { useState } from 'react';
import './app.css';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [currentRoom, setCurrentRoom] = useState();
  const [activedRooms, setActivedRooms] = useState([
    { title: 'room1' },
    { title: 'room2' },
    { title: 'room3' },
  ]);
  const [myChatList, setMyChatList] = useState([]);

  function onClickRoom(title) {
    setCurrentRoom(title);
  }

  const onRoomListBtn = () => {
    setCurrentRoom(null);
  };

  const onNewChatBtn = (title) => {
    setActivedRooms((activedRooms) => {
      return [...activedRooms, { title }];
    });
  };

  const addMyChat = (title) => {
    console.log(title);
    setMyChatList((myChatList) => {
      const updated = [...myChatList, { title }];
      console.log(updated);
      return updated;
    });
  };

  return (
    <div className='app'>
      <SideBar
        roomList={myChatList}
        addMyChat={addMyChat}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        onRoomListBtn={onRoomListBtn}
        onNewChatBtn={onNewChatBtn}
      />
      <Content
        roomList={activedRooms}
        currentRoom={currentRoom}
        onClickRoom={onClickRoom}
        addMyChat={addMyChat}
      />
    </div>
  );
}

export default App;
