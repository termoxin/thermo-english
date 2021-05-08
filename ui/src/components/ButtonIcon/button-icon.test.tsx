import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../styles/theme'
import { ReactComponent as Icon } from '../../__mocks__/svgrMock'
import { ButtonIcon } from '.'

describe('ButtonIcon', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <ButtonIcon icon={<Icon />}>ButtonIcon</ButtonIcon>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
