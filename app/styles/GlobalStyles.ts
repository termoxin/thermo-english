import { createGlobalStyle } from 'styled-components'
import { ThemeType } from 'ui'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 10px;
  }

  body {
    background: ${({ theme }) => (theme as ThemeType).body.background}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
