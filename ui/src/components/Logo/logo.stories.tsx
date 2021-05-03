import React from 'react'

import { Logo } from './logo'

export default {
  title: 'Logo',
  component: Logo,
}

const Template = (): React.ReactElement => <Logo />

export const Default = Template.bind({})
