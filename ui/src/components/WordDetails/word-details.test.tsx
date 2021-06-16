import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../styles/theme'
import { wordDetailsProps } from './word-details.mock'

import { WordDetails } from '.'

describe('WordDetails', () => {
  test('should render correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={themes.light}>
        <WordDetails {...wordDetailsProps} />
      </ThemeProvider>,
    )

    expect(getByText(wordDetailsProps.meaning)).toBeInTheDocument()
    expect(getByText(wordDetailsProps.text)).toBeInTheDocument()
    expect(getByText(wordDetailsProps.transcription)).toBeInTheDocument()
  })
})
