import React, { useCallback, useRef, useState } from 'react';
import './sideBar.css';
import Buttons from './Buttons';
import MyChatList from './MyChatList';
import { useHistory } from 'react-router';

const SideBar = ({
  roomList,
  onClickRoom,
  onRoomListBtn,
  onNewChatBtn,
  addMyChat,
  username,
  chatService,
}) => {
  const [activeForm, setActiveForm] = useState(false);
  const inputRef = useRef();
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    setActiveForm(false);
    addMyChat(inputRef.current.value);
    onNewChatBtn(inputRef.current.value);
    onClickRoom(inputRef.current.value);
    chatService.postRoom(username, inputRef.current.value);
    history.push(`chat?name=${username}&room=${inputRef.current.value}`);
  };

  const makeNweRoom = useCallback((title, username) => {
    fetch(`http://localhost:8080/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, title }),
    }).then((res) => {
      console.log('post');
    });
  }, []);

  const setActiveStatus = () => {
    setActiveForm(!activeForm);
  };
  return (
    <div className='sideBar'>
      <Buttons
        onRoomListBtn={onRoomListBtn}
        setActiveStatus={setActiveStatus}
        onClickRoom={onClickRoom}
        username={username}
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
        username={username}
      />
    </div>
  );
};

export default SideBar;
