import React from 'react';

const Header = ({ currentRoom, user }) => {
  const title = currentRoom;
  return (
    <header className='header'>
      {title ? (
        <h1 className='headertext'>{title}</h1>
      ) : (
        <h1 className='headertext'>현재 목록</h1>
      )}
      <h4 className='headerUser'> {user}</h4>
    </header>
  );
};
export default Header;
