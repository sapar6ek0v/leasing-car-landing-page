import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  ${variables};

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #ffff;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0
  }

  ul {
    padding:0;
    margin: 0;
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyles;
