import React from 'react';
import './Loading.css';
const Loading = (props) => (
  <div className='load'>
    <div className='loader'>loading...</div>
    <label className='loading_message'>server loading...</label>
  </div>
);

export default Loading;
