import { ThemeProvider } from 'styled-components'

import { themes } from '../src/styles/themes'
import { GlobalStyles } from '../src/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <div>
      <ThemeProvider theme={themes.light}>
        <Story />
      </ThemeProvider>
      <GlobalStyles />
    </div>
  ),
]
