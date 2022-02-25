import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 5px;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  } 

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
  }

`;
