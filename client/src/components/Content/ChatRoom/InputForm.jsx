import React, { useRef } from 'react';

const InputForm = ({ messages, sendMessage }) => {
  const textRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
    sendMessage(textRef.current.value);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='inputform' onSubmit={onSubmit}>
      <input ref={textRef} className='textInput' type='text' />
    </form>
  );
};

export default InputForm;
