import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-size: 10px;
  }

  *, *:after, *:before {
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
`
