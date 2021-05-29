import { ComponentType } from 'react'
import styled from 'styled-components'

import { Info } from '../Typography'
import { Button } from './../Button/button'
import { AnswerButtonStyleProps } from './question-reactions.types'

export const QuestionReactionsContainer = styled.div`
  max-width: 300px;
`

export const ReactionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 4rem 1rem 1rem 0;

  div:not(:first-child) {
    margin-left: 1rem;
  }
`

export const QuestionBlock = styled.div`
  font-family: 'Amaranth', sans-serif;
  font-weight: bold;
  font-size: 2.4rem;

  padding: 1.5rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) =>
    theme.questionsReactions.questionBackground};

  color: ${({ theme }) => theme.questionsReactions.textColor};
`

export const ReactionButton = styled<ComponentType<AnswerButtonStyleProps>>(
  Button,
)`
  height: auto;
  width: auto;

  padding: 1.5rem;
  border-radius: 0.8rem;
  font-size: 2.4rem;

  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.questionsReactions.answerButtonBackground
      : theme.questionsReactions.questionBackground};
`

export const Percentage = styled(Info)`
  margin-top: 8px;
`

export const ReactionButtonContainer = styled.div`
  text-align: center;
`
