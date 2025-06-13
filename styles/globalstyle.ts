import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: Arial, sans-serif;
}

body {
background-color: #fff;
overflow: hidden;
}

`

export default GlobalStyle;