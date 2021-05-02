import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { themes } from '../../themes'
import { PostCard } from '.'

const props = {
  text: 'boring',
  meaning: 'not interesting; tedious.',
  transcription: 'ˈbɔːrɪŋ',
  previewUrl: '',
  videoUrl: '',
}

describe('PostCard', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={themes.light}>
        <PostCard {...props} />
      </ThemeProvider>,
    )

    expect(screen.getByText(props.text)).toBeInTheDocument()
    expect(screen.getByText(props.meaning)).toBeInTheDocument()
    expect(screen.getByText(props.transcription)).toBeInTheDocument()

    expect(screen.getByTestId('video-player-container')).toBeInTheDocument()
  })
})
