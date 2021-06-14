import React from 'react'
import { Story } from '@storybook/react'

import { PostItem } from './post-item'
import { PostItemProps } from './post-item.types'
import previewSample from '../../__mocks__/videoPreview.jpeg'

export default {
  title: 'PostItem',
  component: PostItem,
}

const Template: Story<PostItemProps> = (args): React.ReactElement => (
  <PostItem {...args} />
)

export const Default = Template.bind({})

Default.args = {
  text: 'look',
  state: 'requested',
  previewUrl: previewSample,
  likes: 10,
}
