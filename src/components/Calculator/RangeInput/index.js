import React from 'react';

import { Input } from './styles';

const RangeInput = ({ min, max, value, onChange, disabled = false }) => {
  return <Input value={value} onChange={onChange} type="range" min={min} max={max} disabled={disabled} />;
};

export default RangeInput;
