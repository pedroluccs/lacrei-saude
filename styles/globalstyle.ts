import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Roboto', sans-serif;
}

body {
background-color: #fff;
overflow: hidden;
max-width: 100%;
}

`

export default GlobalStyle;