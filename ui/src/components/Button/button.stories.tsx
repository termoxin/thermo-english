import React from 'react'
import { Story } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'squared'],
      mapping: {
        Default: 'default',
        Primary: 'primary',
        Squared: 'squared',
      },
      control: {
        type: 'radio',
        labels: {
          Default: 'default',
          Primary: 'primary',
          Squared: 'squared',
        },
      },
    },
  },
}

const Template: Story = (args): React.ReactElement => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  variant: 'primary',
}

export const Squared = Template.bind({})

Squared.args = {
  children: 'Squared button',
  variant: 'squared',
}
