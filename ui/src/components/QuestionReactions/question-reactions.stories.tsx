import React, { useState } from 'react'

import { Story } from '@storybook/react'
import { QuestionReactions, QuestionReactionsProps } from './'
import { props } from './question-reactions.mock'

export default {
  title: 'QuestionReactions',
  component: QuestionReactions,
}

const Template: Story<QuestionReactionsProps> = (args): React.ReactElement => {
  const [answer, setAnswer] = useState(args.currentAnswer)

  return (
    <QuestionReactions
      {...args}
      currentAnswer={answer}
      onAnswer={({ value }) => setAnswer(value)}
    />
  )
}

export const NotAnswered = Template.bind({})

NotAnswered.args = props

export const Answered = Template.bind({})

Answered.args = { ...props, currentAnswer: 'Yes' }
