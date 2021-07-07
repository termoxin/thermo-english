import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from 'ui'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import firebase from 'firebase'

import { AppContainer } from '../components/common-components/app-container'
import { LayoutAuthenticated } from '../components/common-components/user-layout-authenticated'
import { AdminLayoutAuthenticated } from '../components/common-components/admin-layout-authenticated'

import GlobalStyles from '../styles/GlobalStyles'
import '../styles/globals.css'

const guestRoutes = ['/404', '/']
const adminRoutes = ['/admin-panel']

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env
    .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string,
}
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, switchTheme] = useState(themes.light)
  const router = useRouter()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      const user = firebase.auth().currentUser

      if (!user && adminRoutes.includes(router.route)) {
        router.push('/')
      }
        router.push('/posts')
    })
  }, [])

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
