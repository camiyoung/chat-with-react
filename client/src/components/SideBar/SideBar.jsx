import React, { useRef, useState } from 'react';
import './sideBar.css';
import Buttons from './Buttons';
import MyChatList from './MyChatList';

const SideBar = ({
  roomList,
  onClickRoom,
  onRoomListBtn,
  onNewChatBtn,
  addMyChat,
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setActiveForm(false);
    addMyChat(inputRef.current.value);
    onNewChatBtn(inputRef.current.value);
    onClickRoom(inputRef.current.value);
  };

  const setActiveStatus = () => {
    setActiveForm(!activeForm);
  };
  return (
    <div className='sideBar'>
      <Buttons
        onRoomListBtn={onRoomListBtn}
        setActiveStatus={setActiveStatus}
        onClickRoom={onClickRoom}
      />
      {activeForm && (
        <form>
          <input ref={inputRef} />
          <button onClick={onSubmit}> 생성</button>
        </form>
      )}
      <MyChatList
        roomList={roomList}
        onClickRoom={onClickRoom}
        addMyChat={addMyChat}
      />
    </div>
  );
};

export default SideBar;
