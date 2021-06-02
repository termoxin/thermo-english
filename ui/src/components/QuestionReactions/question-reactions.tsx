import React, { FC, useMemo } from 'react'

import {
  QuestionReactionsProps,
  ReactionOption,
} from './question-reactions.types'
import { calculateReactionsPercentages } from './question-reactions.util'
import {
  ReactionButton,
  Percentage,
  QuestionBlock,
  QuestionReactionsContainer,
  ReactionButtonsContainer,
  ReactionButtonContainer,
} from './styled'

export const QuestionReactions: FC<QuestionReactionsProps> = ({
  question,
  options,
  currentAnswer,
  onAnswer,
}) => {
  const onOptionClick = (option: ReactionOption) => () => {
    if (onAnswer) {
      onAnswer(option)
    }
  }

  const reactionPercentages = useMemo(
    () => calculateReactionsPercentages(options),
    [options, currentAnswer],
  )

  return (
    <QuestionReactionsContainer>
      <QuestionBlock>{question}</QuestionBlock>
      <ReactionButtonsContainer>
        {options.map((option) => (
          <ReactionButtonContainer key={option.id}>
            <ReactionButton
              isSelected={currentAnswer === option.value}
              onClick={onOptionClick(option)}
            >
              {option.value}
            </ReactionButton>
            {currentAnswer && (
              <Percentage>{reactionPercentages[option.id]}%</Percentage>
            )}
          </ReactionButtonContainer>
        ))}
      </ReactionButtonsContainer>
    </QuestionReactionsContainer>
  )
}
