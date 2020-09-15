import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --light-purple: #252A48;  
    --dark-purple: #1b1f38;
    --white: #fff;
    --black: #000;
  }

  button { cursor: pointer; }

`;