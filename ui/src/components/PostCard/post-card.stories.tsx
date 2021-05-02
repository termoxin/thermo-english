import React from 'react'

import videoSample from '../../__mocks__/videoSample.mp4'
import previewSample from '../../__mocks__/videoPreview.jpeg'

import { PostCard } from './post-card'

export default {
  title: 'PostCard',
  component: PostCard,
}

const Template = (args): React.ReactElement => (
  <PostCard {...args} videoUrl={videoSample} previewUrl={previewSample} />
)

export const Default = Template.bind({})

Default.args = {
  text: 'boring',
  meaning: 'not interesting; tedious.',
  transcription: 'ˈbɔːrɪŋ',
}
