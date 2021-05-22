import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { AppContainer } from '../components/app-container'
import { LayoutAuthenticated } from '../components/layout-authenticated'

import GlobalStyles from '../styles/GlobalStyles'
import '../styles/globals.css'

const guestRoutes = ['/404', '/']

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, switchTheme] = useState(themes.light)
  const router = useRouter()

  const toggleTheme = () =>
    switchTheme(theme.name === 'light' ? themes.dark : themes.light)

  const currentPageProps = { ...pageProps, toggleTheme }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {guestRoutes.includes(router.route) ? (
          <Component {...currentPageProps} />
        ) : (
          <LayoutAuthenticated>
            <Component {...currentPageProps} />
          </LayoutAuthenticated>
        )}
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
