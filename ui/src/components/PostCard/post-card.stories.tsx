import React from 'react'

import videoSample from '../../__mocks__/videoSample.mp4'
import previewSample from '../../__mocks__/videoPreview.jpeg'

import { PostCard } from './post-card'
import { Story } from '@storybook/react'
import { PostCardProps } from './post-card.types'

export default {
  title: 'PostCard',
  component: PostCard,
}

const Template: Story<PostCardProps> = (args): React.ReactElement => (
  <PostCard {...args} videoUrl={videoSample} previewUrl={previewSample} />
)

export const Default = Template.bind({})

Default.args = {
  text: 'boring',
  meaning: 'not interesting; tedious.',
  transcription: 'ˈbɔːrɪŋ',
}
