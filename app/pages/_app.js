import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'

import { AppContainer } from '../components/app-container'
import GlobalStyles from '../styles/GlobalStyles'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.light}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
