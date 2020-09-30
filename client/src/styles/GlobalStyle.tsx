import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { $BLACK } from '../styles/color-variables';

const GlobalStyle = createGlobalStyle`
${reset}
* {
    margin: 0px;
    box-sizing: border-box;
  }
  html {
    /* max-width: 1000px; */
    /* margin: 0 auto; */
    overflow-y: scroll;
  }

  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  div, p {
  }
`;

export default GlobalStyle;
