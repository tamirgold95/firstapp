import { useState } from "react";

const Input = ({ onInputChange, value }) => {
  const handlerInputChange = (event) => {
    const inputText = event.target.value;
    // setInputValue(inputText)
    onInputChange(inputText);
  };

  return <input type="text" value={value} onChange={handlerInputChange} />;
};

export default Input;
