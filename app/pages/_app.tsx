import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { AppContainer } from '../components/common-components/app-container'
import { LayoutAuthenticated } from '../components/common-components/user-layout-authenticated'
import { AdminLayoutAuthenticated } from '../components/common-components/admin-layout-authenticated'

import GlobalStyles from '../styles/GlobalStyles'
import '../styles/globals.css'

const guestRoutes = ['/404', '/']
const adminRoutes = ['/admin-panel']

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, switchTheme] = useState(themes.light)
  const router = useRouter()

  const toggleTheme = () =>
    switchTheme(theme.name === 'light' ? themes.dark : themes.light)

  const currentPageProps = { ...pageProps, toggleTheme }

  const Layout = adminRoutes.includes(router.route)
    ? AdminLayoutAuthenticated
    : LayoutAuthenticated

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {guestRoutes.includes(router.route) &&
        !adminRoutes.includes(router.route) ? (
          <Component {...currentPageProps} />
        ) : (
          <Layout toggleTheme={toggleTheme}>
            <Component {...currentPageProps} />
          </Layout>
        )}
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
