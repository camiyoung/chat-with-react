import React from 'react';

const UserList = (props) => {
  const users = [{ username: 'abc' }, { username: 'sdf' }, { username: '🐱' }];

  return (
    <ul className='usersList'>
      <li className='username'>참여자 목록</li>
      {users.map((user) => (
        <li>{user.username}</li>
      ))}
    </ul>
  );
};

export default UserList;
