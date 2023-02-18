import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0 24px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 0px;
    border: none;
  }

  &::-webkit-slider-thumb {
    box-shadow: none;
    border: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
`;

const RangeInput = ({ min, max, value, onChange }) => {
  return <Input value={value} onChange={onChange} type="range" min={min} max={max} />;
};

export default RangeInput;
