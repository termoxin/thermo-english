import { Story } from '@storybook/react'
import React from 'react'

import { Label } from './'
import { LabelProps } from './label.types'

export default {
  title: 'Label',
  component: Label,
}

const Template: Story<LabelProps> = (args): React.ReactElement => (
  <div>
    <Label {...args} />
  </div>
)

export const Requested = Template.bind({})

Requested.args = {
  children: 'REQUESTED',
  state: 'requested',
}

export const Draft = Template.bind({})

Draft.args = {
  children: 'DRAFT',
  state: 'draft',
}

export const Published = Template.bind({})

Published.args = {
  children: 'PUBLISHED',
  state: 'published',
}
