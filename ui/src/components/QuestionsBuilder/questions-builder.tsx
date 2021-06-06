import React, { ChangeEvent, FC, KeyboardEventHandler, useState } from 'react'
import { propEq, reject } from 'ramda'

import { QuestionsBuilderProps } from './questions-builder.types'
import { Input } from '../Input'
import { ReactionButton } from '../QuestionReactions/styled'
import {
  QuestionsBuilderContainer,
  ReactionsContainer,
  StyledButton,
} from './styled'
import { Info } from '../Typography'
import { KEYBOARD } from '../../constants/keyboard'

export const QuestionsBuilder: FC<QuestionsBuilderProps> = ({
  questionText,
  reactions,
  onChangeQuestion,
  onChangeReactions,
}) => {
  const [question, changeQuestion] = useState(questionText)
  const [newReaction, changeNewReaction] = useState('')
  const [currentReactions, setReactions] = useState(reactions)

  const onChangeQuestionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    changeQuestion(value)

    if (onChangeQuestion) {
      onChangeQuestion(value)
    }
  }

  const onChangeNewQuestionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    changeNewReaction(value)
  }

  const createNewReaction = () => ({ id: Date.now(), value: newReaction })

  const onAddHandler = () => {
    if (newReaction) {
      const newReaction = createNewReaction()

      setReactions((reactions) => {
        const newReactions = [...reactions, newReaction]

        if (onChangeReactions) {
          onChangeReactions(newReactions)
        }

        return newReactions
      })

      changeNewReaction('')
    }
  }

  const onReactionDblClickHandler = (id: number) => () =>
    setReactions(reject(propEq('id', id)))

  const onKeyUpHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === KEYBOARD.ENTER && newReaction) {
      setReactions((reactions) => {
        const newReactions = [...reactions, createNewReaction()]

        if (onChangeReactions) {
          onChangeReactions(newReactions)
        }

        return newReactions
      })

      changeNewReaction('')
    }
  }

  return (
    <QuestionsBuilderContainer>
      <Input
        data-testid="input-question"
        value={question}
        placeholder="Enter question (e.g. What do you think?)"
        onChange={onChangeQuestionHandler}
      />
      {!currentReactions.length && (
        <Info>
          No reactions. Please, type a reaction and click on ADD button
        </Info>
      )}
      <ReactionsContainer>
        {currentReactions.map(({ id, value }) => (
          <ReactionButton
            key={id}
            data-testid={`question-${id}`}
            onDoubleClick={onReactionDblClickHandler(id)}
          >
            {value}
          </ReactionButton>
        ))}
      </ReactionsContainer>
      <Input
        data-testid="input-new-reaction"
        value={newReaction}
        onChange={onChangeNewQuestionHandler}
        onKeyUp={onKeyUpHandler}
        placeholder="Enter reaction"
      />
      <StyledButton variant="squared" onClick={onAddHandler}>
        Add reaction
      </StyledButton>
    </QuestionsBuilderContainer>
  )
}
