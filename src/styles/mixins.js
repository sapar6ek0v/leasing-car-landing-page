import { css } from 'styled-components';

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
};

export default mixins;
