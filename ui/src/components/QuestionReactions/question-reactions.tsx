import React, { FC, useMemo } from 'react'

import {
  QuestionReactionsProps,
  ReactionOption,
} from './question-reactions.types'
import { calculateReactionsPercentages } from './question-reactions.util'
import {
  AnswerButton,
  Percentage,
  QuestionBlock,
  QuestionReactionsContainer,
  AnswerButtonsContainer,
  AnswerButtonContainer,
} from './styled'

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
    <QuestionReactionsContainer>
      <QuestionBlock>{question}</QuestionBlock>
      <AnswerButtonsContainer>
        {options.map((option) => (
          <AnswerButtonContainer key={option.id}>
            <AnswerButton
              isSelected={currentAnswer === option.value}
              onClick={onOptionClick(option)}
            >
              {option.value}
            </AnswerButton>
            {currentAnswer && (
              <Percentage>{reactionPercentages[option.id]}%</Percentage>
            )}
          </AnswerButtonContainer>
        ))}
      </AnswerButtonsContainer>
    </QuestionReactionsContainer>
  )
}
