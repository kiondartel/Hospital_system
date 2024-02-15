import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    body {
      font-family: open sans,Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 13px
    }
`;

export default GlobalStyle;
