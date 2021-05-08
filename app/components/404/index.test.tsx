import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from 'ui'
import { NotFound } from '.'

describe('NotFound component', () => {
  test('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <NotFound />
      </ThemeProvider>,
    )

    expect(getByText('NOT FOUND')).toBeInTheDocument()
    expect(getByTestId('not-found-svg')).toBeInTheDocument()
    expect(getByTestId('logo')).toBeInTheDocument()
  })
})
