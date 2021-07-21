import React from 'react';

const Header = ({ currentRoom }) => {
  const title = currentRoom;
  return (
    <header className='header'>
      {title ? (
        <h1 className='headertext'>{title}</h1>
      ) : (
        <h1 className='headertext'>현재 목록</h1>
      )}
    </header>
  );
};
export default Header;
