import { Story } from '@storybook/react'
import React from 'react'

import { FileUploader } from './file-uploader'

export default {
  title: 'FileUploader',
  component: FileUploader,
}

const Template: Story = (args): React.ReactElement => (
  <FileUploader {...args} onSubmit={console.log} acceptFiles="video/mp4" />
)

export const Default = Template.bind({})

Default.args = {
  children: '',
}
