import React, { useRef } from 'react';

const InputForm = ({ sendMessage, room, setMessages }) => {
  const textRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
    console.log(`${room}에서 메세지 발송 }`);
    sendMessage(textRef.current.value, room);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className='inputform' onSubmit={onSubmit}>
      <input ref={textRef} className='textInput' type='text' />
    </form>
  );
};

export default InputForm;
