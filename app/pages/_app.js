import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
