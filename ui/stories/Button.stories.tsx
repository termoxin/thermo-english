import React from 'react'

import { Button } from '../src/components/Button'

export default {
  title: 'Example/Button',
  component: Button,
}

const Template = (args): React.ReactElement => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
}
