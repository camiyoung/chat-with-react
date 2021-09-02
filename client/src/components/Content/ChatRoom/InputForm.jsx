import React, { useRef } from 'react';

const InputForm = ({ sendMessage, currentRoom }) => {
  const textRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(textRef.current.value, currentRoom);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='inputform' onSubmit={onSubmit}>
      <input ref={textRef} className='textInput' type='text' />
    </form>
  );
};

export default InputForm;
