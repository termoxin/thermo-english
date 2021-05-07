import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from 'ui'
import { Index } from '.'

describe('Index component', () => {
  test('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <Index />
      </ThemeProvider>,
    )

    expect(getByTestId('welcome-heading')).toHaveTextContent(
      'WELCOME TO TERMO ENGLISH',
    )
    expect(getByTestId('password-input')).toBeInTheDocument()
    expect(getByTestId('email-input')).toBeInTheDocument()
    expect(getByText('Sign In with Google')).toBeInTheDocument()
    expect(getByText('Sign Up')).toBeInTheDocument()
    expect(getByText('Sign In')).toBeInTheDocument()
    expect(getByTestId('logo')).toBeInTheDocument()

    expect(
      getByText('Terms and Conditions · Privacy Policy'),
    ).toBeInTheDocument()
  })
})
