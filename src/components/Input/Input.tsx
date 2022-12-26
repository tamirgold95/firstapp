import { ChangeEvent } from "react";

const Input = ({
  onInputChange,
  value,
}: {
  onInputChange: (inputText: string) => void;
  value: string;
}) => {
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    // setInputValue(inputText)
    onInputChange(inputText);
  };

  return <input type="text" value={value} onChange={handlerInputChange} />;
};

export default Input;
