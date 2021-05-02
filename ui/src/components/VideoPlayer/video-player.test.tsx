import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../themes'
import { VideoPlayer } from '.'
import userEvent from '@testing-library/user-event'

describe('VideoPlayer', () => {
  const props = {
    src: '',
    previewUrl: 'preview',
  }

  test('should render correctly', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <VideoPlayer {...props} />
      </ThemeProvider>,
    )

    expect(getByTestId('preview')).toBeInTheDocument()
    expect(queryByTestId('controls')).not.toBeInTheDocument()
    expect(queryByTestId('play-button')).not.toBeInTheDocument()
  })

  test('overlay and controls should shown', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={themes.light}>
        <VideoPlayer {...props} />
      </ThemeProvider>,
    )

    expect(queryByTestId('controls')).not.toBeInTheDocument()
    expect(queryByTestId('play-button')).not.toBeInTheDocument()
    expect(queryByTestId('overlay')).not.toBeInTheDocument()

    userEvent.hover(getByTestId('video-player-container'))

    expect(getByTestId('controls')).toBeInTheDocument()
    expect(getByTestId('play-button')).toBeInTheDocument()
    expect(queryByTestId('overlay')).toBeInTheDocument()

    userEvent.unhover(getByTestId('video-player-container'))

    expect(queryByTestId('controls')).not.toBeInTheDocument()
    expect(queryByTestId('play-button')).not.toBeInTheDocument()
    expect(queryByTestId('overlay')).not.toBeInTheDocument()
  })
})
