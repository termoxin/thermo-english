import React, { FC, useMemo, useState } from 'react'

import {
  QuestionReactionsProps,
  ReactionOption,
} from './question-reactions.types'
import { calculateReactionsPercentages } from './question-reactions.util'

export const QuestionReactions: FC<QuestionReactionsProps> = ({
  question,
  options,
  totalReactions,
  currentAnswer,
  onAnswer,
}) => {
  const onOptionClick = (option: ReactionOption) => () => {
    if (onAnswer) {
      onAnswer(option)
    }
  }

  const reactionPercentages = useMemo(
    () => calculateReactionsPercentages(totalReactions, options),
    [options, currentAnswer],
  )

  return (
    <div>
      <p>{question}</p>
      {options.map((option) => (
        <div key={option.id}>
          <button
            style={{
              background: currentAnswer === option.value ? 'green' : undefined,
            }}
            onClick={onOptionClick(option)}
          >
            {option.value}
          </button>
          {currentAnswer && <span>{reactionPercentages[option.id]}%</span>}
        </div>
      ))}
    </div>
  )
}