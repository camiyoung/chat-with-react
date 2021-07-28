import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Join = (props) => {
  const [name, setName] = useState('');

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

        <Link
          onClick={(e) => (!name ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=list`}
        >
          <button className={'button mt-20'} type='submit'>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;