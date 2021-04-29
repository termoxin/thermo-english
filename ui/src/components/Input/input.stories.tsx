import React from 'react'

import { Input } from './input'

export default {
  title: 'Input',
  component: Input,
}

const Template = (args): React.ReactElement => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  value: '',
  placeholder: 'Email',
}
