import { AppProps } from 'next/app'

export interface CustomAppProps extends AppProps {
  toggleTheme: () => void
}
