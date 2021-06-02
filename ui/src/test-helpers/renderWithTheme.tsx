import React from 'react'
import { render as renderComponent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../styles/theme'

export const wrapIntoTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={themes.light}>{component}</ThemeProvider>
)

export const renderWithTheme = (component: React.ReactElement) =>
  renderComponent(wrapIntoTheme(component))
