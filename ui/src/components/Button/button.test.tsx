import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../styles/themes'
import { Button } from './button'

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
