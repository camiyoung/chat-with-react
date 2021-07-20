import React from 'react';
import './sideBar.css';
import Buttons from './Buttons';
import MyChatList from './MyChatList';

const SideBar = (props) => {
  return (
    <div className='sideBar'>
      <Buttons />
      <MyChatList />
    </div>
  );
};

export default SideBar;
