import { css, keyframes } from 'styled-components';

const mixins = {
  apart: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  center: css`
    display: flex;
    align-items: center;
  `,

  fCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  row: css`
    display: flex;
    flex-wrap: wrap;
  `,

  fontSize12: css`
    font-size: 12px;
    line-height: 12px;
  `,

  fontSize14: css`
    font-size: 14px;
    line-height: 136%;
  `,

  fontSize16: css`
    font-size: 16px;
    line-height: 20px;
  `,

  fontSize20: css`
    font-size: 20px;
    line-height: 120%;
  `,

  fontSize22: css`
    font-size: 22px;
    line-height: 20px;
  `,

  fontSize26: css`
    font-size: 26px;
    line-height: 150%;
  `,

  fontSize30: css`
    font-size: 30px;
    line-height: 36px;
  `,

  fadeIn: keyframes`
    0% {
        opacity: 0; 
        transform: translateY(-35%);
    }
    100% { 
        opacity: 1;
        transform: translateY(0%);
    }
  `,

  fadeOut: keyframes`
    0% { 
      opacity: 1;
      transform: translateY(0%);
    }
    100% { 
      opacity: 0;
      transform: translateY(-35%);  
    }
  `,

  fadeInY: keyframes`
    0% {
        opacity: 0; 
        transform: translateY(35%);
    }
    100% { 
        opacity: 1;
        transform: translateY(0%);
    }   
  `,

  fadeOutY: keyframes`
    0% { 
      opacity: 1;
      transform: translateY(0%);
    }
    100% { 
      opacity: 0;
      transform: translateY(-35%);  
    }   
  `,

  fadeInX: keyframes`
    0% {
      opacity: 0; 
      transform: translateX(100%);
    }
    100% { 
      opacity: 1;
      transform: translateX(0%);
    }
  `,

  fadeOutX: keyframes`
    0% { 
      opacity: 1;
      transform: translateX(0%);
    }
    100% { 
      opacity: 0;
      transform: translateX(-100%);  
    }
  `,

  button: css`
    background: ${({ theme }) => theme.colors.orange};
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 40px;
    ${({ theme }) => theme.mixins.fCenter};
    color: ${({ theme }) => theme.colors.white};
    transition: var(--transition);

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
      border-color: ${({ theme }) => theme.colors.black};
    }

    &:active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray};
      border-color: ${({ theme }) => theme.colors.gray};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.pinkWhite};
      border-color: ${({ theme }) => theme.colors.pinkWhite};
      color: ${({ theme }) => theme.colors.white5};
      cursor: not-allowed;
    }
  `,

  smallButtonEffects: css`
    transition: var(--transition);

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
      border-color: ${({ theme }) => theme.colors.black};
    }

    &:active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray};
      border-color: ${({ theme }) => theme.colors.gray};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray13};
      border-color: ${({ theme }) => theme.colors.gray13};
      color: ${({ theme }) => theme.colors.gray16};
      cursor: not-allowed;
    }
  `,

  input: css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray11};
    border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.gray11)};
    border-radius: 16px;
    padding: 4px 24px 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.gray};
    transition: var(--transition);

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray17};
      border-color: ${({ theme }) => theme.colors.gray17};

      & + label {
        top: 8%;
        font-weight: 400;
        ${({ theme }) => theme.mixins.fontSize12};
      }
    }

    &:is(:focus, :focus-within) {
      outline: 4px solid ${({ theme }) => theme.colors.orange3};
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.orange};

      & + label {
        top: 8%;
        font-weight: 400;
        ${({ theme }) => theme.mixins.fontSize12};
      }
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.gray13};

      & + label {
        top: 30%;
        font-weight: 700;
        ${({ theme }) => theme.mixins.fontSize16};
        color: ${({ theme }) => theme.colors.gray12};
      }
    }
  `,

  loader: keyframes`
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  `,

  container: css`
    margin: 0 auto;
    @media (${({ theme }) => theme.bp.desktopS}) {
      max-width: 928px;
    }

    @media (${({ theme }) => theme.bp.mobileS}) {
      max-width: 280px;
    }
  `,
};

export default mixins;
