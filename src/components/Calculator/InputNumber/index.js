import React from 'react';
import { Input } from './styles';

const InputNumber = ({ min, max, value, setValue }) => {
  const handleOnChange = (event) => {
    const newValue = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(newValue);
  };

  return <Input value={value} onChange={handleOnChange} type="number" />;
};

export default InputNumber;
