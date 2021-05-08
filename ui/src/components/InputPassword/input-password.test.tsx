import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import { themes } from '../../styles/theme'
import { InputPassword } from '.'

describe('InputPassword', () => {
  test('should render correctly', () => {
    const { getByRole } = render(
      <ThemeProvider theme={themes.light}>
        <InputPassword />
      </ThemeProvider>,
    )

    expect(getByRole('password-input')).toBeInTheDocument()
  })

  test('should able to type a new value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <InputPassword />
      </ThemeProvider>,
    )

    userEvent.type(getByTestId('password-input'), 'New Text')

    expect((getByTestId('password-input') as HTMLInputElement).value).toBe(
      'New Text',
    )
  })

  test('should have type password', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <InputPassword />
      </ThemeProvider>,
    )

    expect((getByTestId('password-input') as HTMLInputElement).type).toBe(
      'password',
    )
  })

  test('should able to toggle password visibility', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <InputPassword />
      </ThemeProvider>,
    )

    expect(getByTestId('show-password')).toBeInTheDocument()

    userEvent.click(getByTestId('show-password'))

    expect((getByTestId('password-input') as HTMLInputElement).type).toBe(
      'text',
    )
    expect(getByTestId('hide-password')).toBeInTheDocument()
    userEvent.click(getByTestId('hide-password'))

    expect((getByTestId('password-input') as HTMLInputElement).type).toBe(
      'password',
    )
  })
})
