import React from 'react'

import { Story } from '@storybook/react'
import { QuestionReactions, QuestionReactionsProps } from './'
import { props } from './question-reactions.mock'

export default {
  title: 'QuestionReactions',
  component: QuestionReactions,
}

const Template: Story<QuestionReactionsProps> = (args): React.ReactElement => (
  <QuestionReactions {...args} />
)

export const NotAnswered = Template.bind({})

NotAnswered.args = props

export const Answered = Template.bind({})

Answered.args = { ...props, currentAnswer: 'Yes' }
