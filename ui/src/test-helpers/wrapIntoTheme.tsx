import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../styles/theme'

export const wrapIntoTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={themes.light}>{component}</ThemeProvider>
)
