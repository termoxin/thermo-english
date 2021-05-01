import React from 'react'

import { VideoPlayer } from './video-player'

import videoSample from '../../__mocks__/videoSample.mp4'

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
}

const Template = (args): React.ReactElement => <VideoPlayer {...args} />

export const Default = Template.bind({})

Default.args = {
  src: videoSample,
}
