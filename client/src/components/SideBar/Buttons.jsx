import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({ onRoomListBtn, setActiveStatus }) => {
  const onNewchatBtn = () => {};
  return (
    <div className='buttons'>
      <Link to='/list' className='btn_roomlist' onClick={onRoomListBtn}>
        채팅방목록
      </Link>
      <div className='btn_newchat' onClick={setActiveStatus}>
        새 채팅 만들기
      </div>
    </div>
  );
};

export default Buttons;
