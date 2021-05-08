import { AppProps } from 'next/app'

export interface CustomAppProps extends Partial<AppProps> {
  toggleTheme?: () => void
}
