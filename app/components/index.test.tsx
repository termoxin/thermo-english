import { render } from '@testing-library/react'
import { Index } from '.'

describe('Index component', () => {
  test('should render correctly', () => {
    const { getByText } = render(<Index />)

    expect(getByText('WELCOME TO THERMO ENGLISH')).toBeInTheDocument()
  })
})
