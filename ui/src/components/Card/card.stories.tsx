import React from 'react'
import styled from 'styled-components'

import { Card } from './card'

export default {
  title: 'Card',
  component: Card,
}

const StyledCard = styled(Card)`
  height: 275px;
  width: 343px;
`

const Template = (args): React.ReactElement => <StyledCard {...args} />

export const Default = Template.bind({})

Default.args = {
  children: '',
}
