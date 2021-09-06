import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

const Buttons = ({ onRoomListBtn, setActiveStatus }) => {
  return (
    <div className='buttons'>
      <div className='btn_roomlist' onClick={onRoomListBtn}>
        <FontAwesomeIcon icon={faListAlt} size='lg' />
      </div>
      <div className='btn_newchat' onClick={setActiveStatus}>
        <FontAwesomeIcon icon={faEdit} size='lg' />
      </div>
    </div>
  );
};

export default Buttons;
