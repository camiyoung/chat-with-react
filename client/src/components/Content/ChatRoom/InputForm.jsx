import React, { useRef } from 'react';

const InputForm = ({ messages }) => {
  const textRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
    messages.push({ message: textRef.current.value });
  };
  return (
    <form className='inputform' onSubmit={onSubmit}>
      <input ref={textRef} className='textInput' type='text' />
    </form>
  );
};

export default InputForm;
