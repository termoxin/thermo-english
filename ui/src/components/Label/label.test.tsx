import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../styles/theme'
import { Label } from '.'

describe('Label', () => {
  test('should render published state correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={themes.light}>
        <Label state="published">Published</Label>
      </ThemeProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render draft state correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={themes.light}>
        <Label state="draft">Draft</Label>
      </ThemeProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should render requested state correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={themes.light}>
        <Label state="requested">Requested</Label>
      </ThemeProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
