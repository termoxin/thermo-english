import React from 'react'

import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'primary'],
      mapping: {
        Default: 'default',
        Primary: 'primary',
      },
      control: {
        type: 'radio',
        labels: {
          Default: 'default',
          Primary: 'primary',
        },
      },
    },
  },
}

const Template = (args): React.ReactElement => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  variant: 'primary',
}
