import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'
import { AppProps } from 'next/app'

import { AppContainer } from '../components/app-container'
import GlobalStyles from '../styles/GlobalStyles'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, switchTheme] = useState(themes.light)

  const toggleTheme = () =>
    switchTheme(theme.name === 'light' ? themes.dark : themes.light)

  const currentPageProps = { ...pageProps, toggleTheme }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Component {...currentPageProps} />
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
