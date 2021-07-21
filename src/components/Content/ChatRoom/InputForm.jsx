import React from 'react';

const InputForm = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className='inputform' onSubmit={onSubmit}>
      <input className='textInput' type='text' />
    </form>
  );
};

export default InputForm;
