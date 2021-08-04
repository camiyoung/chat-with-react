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
    history.push(`/chat/${inputRef.current.value}`);
  };

  const onClose = (e) => {
    e.preventDefault();
    setActiveForm(false);
  };
  const setActiveStatus = () => {
    setActiveForm(!activeForm);
  };
  return (
    <div className='sideBar'>
      {activeForm ? (
        <form className='form'>
          <input ref={inputRef} />
          <div className='form_buttons'>
            <div className='button make' onClick={onSubmit}>
              <h3>생성</h3>
            </div>
            <div className='button close' onClick={onClose}>
              <h3>닫기</h3>
            </div>
          </div>
        </form>
      ) : (
        <Buttons
          onRoomListBtn={onRoomListBtn}
          setActiveStatus={setActiveStatus}
          onClickRoom={onClickRoom}
          username={username}
        />
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
