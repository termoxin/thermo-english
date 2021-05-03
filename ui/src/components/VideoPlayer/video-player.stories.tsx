import React from 'react'

import { VideoPlayer } from './video-player'

import videoSample from '../../__mocks__/videoSample.mp4'
import previewSample from '../../__mocks__/videoPreview.jpeg'

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
}

const Template = (): React.ReactElement => (
  <VideoPlayer src={videoSample} previewUrl={previewSample} />
)

export const Default = Template.bind({})
