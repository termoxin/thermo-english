import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import { themes } from '../../styles/theme'
import { Input } from '.'

describe('Input', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Input aria-label="email" />
      </ThemeProvider>,
    )

    userEvent.type(screen.getByLabelText('email'), 'a@gmail.com')

    expect(screen.getByLabelText('email')).toBeInTheDocument()
  })
})
