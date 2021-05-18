import { createGlobalStyle } from 'styled-components'
import { ThemeType } from 'ui'

const GlobalStyles = createGlobalStyle`
  *,
  *:after,*:before {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }

  html,body {
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
