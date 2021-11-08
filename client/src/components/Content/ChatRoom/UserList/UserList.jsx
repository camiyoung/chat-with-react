import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const UserList = ({ users }) => {
  return (
    <ul className='usersList'>
      <li className='users-icon'>
        <FontAwesomeIcon icon={faUsers} size='lg' />
      </li>
      {users &&
        users.map((user) => (
          <li className='user' key={user}>
            <div className='username'>{user}</div>
          </li>
        ))}
    </ul>
  );
};

export default UserList;
