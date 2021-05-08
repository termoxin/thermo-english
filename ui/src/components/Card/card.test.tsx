import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../styles/theme'
import { Card } from '.'

describe('Card', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Card>Card</Card>
      </ThemeProvider>,
    )

    expect(screen.getByText('Card')).toBeInTheDocument()
  })
})
