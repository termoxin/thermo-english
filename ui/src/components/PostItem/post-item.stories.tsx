import React from 'react'

import { PostItem } from './post-item'
import { Story } from '@storybook/react'
import { PostItemProps } from './post-item.types'

export default {
  title: 'PostItem',
  component: PostItem,
}

const Template: Story<PostItemProps> = (args): React.ReactElement => (
  <PostItem {...args} />
)

export const Default = Template.bind({})

Default.args = {}
