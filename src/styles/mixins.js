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

  fontSize16: css`
    font-size: 16px;
    line-height: 20px;
  `,

  fontSize20: css`
    font-size: 20px;
    line-height: 120%;
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
      background-color: ${({ theme }) => theme.colors.grey};
      border-color: ${({ theme }) => theme.colors.grey};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.pinkWhite};
      border-color: ${({ theme }) => theme.colors.pinkWhite};
      color: ${({ theme }) => theme.colors.white5};
      cursor: not-allowed;
    }
  `,
};

export default mixins;
