import './join.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Join = ({ chatService, setUsername }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(name);
    chatService.signup(name).catch((error) => console.error(error));
    history.push({ pathname: `/chat`, state: { username: name } });
  };

  return (
    <div className='join'>
      <div className='join_container'>
        <h1 className='heading'> Chat Service 💌 </h1>
        <div className='form'>
          <input
            placeholder='Enter Username...'
            className='joinInput'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
          <button className='join_button' type='submit' onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
