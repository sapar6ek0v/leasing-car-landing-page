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
};

export default mixins;
