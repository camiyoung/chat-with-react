import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
const Join = ({ chatService, setUsername }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(name);
    chatService
      .signup(name)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    history.push({ pathname: `/chat/${name}`, state: { username: name } });
  };

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            placeholder='Name'
            className='joinInput'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <button className={'button mt-20'} type='submit' onClick={onSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Join;
