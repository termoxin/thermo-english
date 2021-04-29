import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../themes'
import { Input } from '.'

describe('Input', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Input value="Email" aria-label="email" />
      </ThemeProvider>,
    )

    expect(screen.getByLabelText('email')).toBeInTheDocument()
  })
})
