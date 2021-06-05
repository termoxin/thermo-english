import { Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Card } from './card'

export default {
  title: 'Card',
  component: Card,
}

const StyledCard = styled(Card)`
  height: 27.5rem;
  width: 60rem;
`

const Template: Story = (args): React.ReactElement => <StyledCard {...args} />

export const Default = Template.bind({})

Default.args = {
  children: '',
}
