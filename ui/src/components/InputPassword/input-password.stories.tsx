import React from 'react'

import { InputPassword } from './input-password'

export default {
  title: 'InputPassword',
  component: InputPassword,
}

const Template = (args): React.ReactElement => <InputPassword {...args} />

export const Default = Template.bind({})

Default.args = {
  value: '',
  placeholder: 'Password',
}
