import { render } from '@testing-library/react'
import { Index } from '.'

describe('Index component', () => {
  test('should render correctly', () => {
    const { getByText, getByTestId } = render(<Index />)

    expect(getByText('WELCOME TO TERMO ENGLISH')).toBeInTheDocument()
    expect(getByTestId('input-password')).toBeInTheDocument()
    expect(getByTestId('input-email')).toBeInTheDocument()
    expect(getByText('Sign In with Google')).toBeInTheDocument()
    expect(getByText('Sign up')).toBeInTheDocument()
    expect(getByText('Sign in')).toBeInTheDocument()
    expect(getByTestId('logo')).toBeInTheDocument()

    expect(
      getByText('Terms and Conditions · Privacy Policy'),
    ).toBeInTheDocument()
  })
})
