import { Story } from '@storybook/react'
import React from 'react'

import { WordDetails } from './word-details'
import { wordDetailsProps } from './word-details.mock'
import { WordDetailsProps } from './word-details.types'

export default {
  title: 'WordDetails',
  component: WordDetails,
}

const Template: Story<WordDetailsProps> = (args): React.ReactElement => (
  <WordDetails {...args} />
)

export const Default = Template.bind({})

Default.args = wordDetailsProps
