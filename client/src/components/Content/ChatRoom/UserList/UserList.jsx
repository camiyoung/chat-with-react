import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul className='usersList'>
      <li className='username'>참여자 목록</li>
      {users && users.map((user) => <li>{user}</li>)}
    </ul>
  );
};

export default UserList;
