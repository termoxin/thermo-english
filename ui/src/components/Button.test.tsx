import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../themes'
import { Button } from './Button'

describe('Button', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Button>Button</Button>
      </ThemeProvider>,
    )

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
