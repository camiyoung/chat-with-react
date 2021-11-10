import './join.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Join = ({ chatService, setUsername }) => {
  const [name, setName] = useState('');
  const [isServer, setIsServer] = useState(false);
  const history = useHistory();

  useEffect(() => {
    chatService
      .runServer()
      .then((data) => {
        console.log(data);
        if (data) setIsServer(true);
      })
      .catch((error) => console.error(error));
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(name);
    chatService.signup(name).catch((error) => console.error(error));
    history.push({ pathname: `/chat`, state: { username: name } });
  };

  return (
    <div className='join'>
      <div className='join_container'>
        <h1 className='heading'> Chat Service with React 💌 </h1>
        {isServer ? (
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
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Join;
