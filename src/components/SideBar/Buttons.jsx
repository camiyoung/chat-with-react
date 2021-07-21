import React from 'react';

const Buttons = ({ onRoomListBtn, setActiveStatus }) => {
  const onNewchatBtn = () => {};
  return (
    <div className='buttons'>
      <div className='btn_roomlist' onClick={onRoomListBtn}>
        채팅방목록
      </div>
      <div className='btn_newchat' onClick={setActiveStatus}>
        새 채팅 만들기
      </div>
    </div>
  );
};

export default Buttons;
