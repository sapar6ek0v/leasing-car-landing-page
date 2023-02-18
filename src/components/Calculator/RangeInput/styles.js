import styled from 'styled-components';

export const Input = styled.input`
  width: calc(100% - 48px);
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  border-radius: 0;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  margin: 0 auto;
  transition: var(--transition);

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
    transition: var(--transition);
  }

  &::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: none;
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 0px;
    border: none;
    transition: var(--transition);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -12px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
    cursor: pointer;
    transition: var(--transition);
  }

  &::-moz-range-thumb {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
    cursor: pointer;
    transition: var(--transition);
  }

  &:focus::-webkit-slider-thumb {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 0.125rem;
  }

  &:focus::-moz-range-thumb {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 0.125rem;
  }

  &:is(hover, :focus)::-webkit-slider-runnable-track {
    height: 1px;
  }

  &:is(hover, :focus)::-moz-range-track {
    height: 1px;
  }

  &:hover::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
  }

  &:hover::-moz-range-thumb {
    width: 24px;
    height: 24px;
  }

  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.pinkWhite};
  }

  &:disabled::-moz-range-thumb {
    cursor: not-allowed;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.pinkWhite};
  }

  &:disabled::-webkit-slider-runnable-track {
    cursor: not-allowed;
    height: 2px;
    background: ${({ theme }) => theme.colors.pinkWhite};
  }

  &:disabled::-moz-range-track {
    cursor: not-allowed;
    height: 2px;
    background: ${({ theme }) => theme.colors.pinkWhite};
  }
`;
