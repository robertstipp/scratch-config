import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Nexa Heavy';
  src: url('/fonts/Nexa-Heavy.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


  :root {
    --primary-font: 'Nexa Heavy';
  }
`;

export default GlobalStyles