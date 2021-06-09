import React, { ChangeEvent, FC, KeyboardEventHandler, useState } from 'react'

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
  onDeleteReaction,
}) => {
  const [newReaction, changeNewReaction] = useState('')

  const onChangeQuestionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

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

      if (onChangeReactions) {
        onChangeReactions([...reactions, newReaction])
      }

      changeNewReaction('')
    }
  }

  const onReactionDblClickHandler = (id: number) => () => {
    if (onDeleteReaction) {
      onDeleteReaction(id)
    }
  }

  const onKeyUpHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === KEYBOARD.ENTER && newReaction) {
      const newReactions = [...reactions, createNewReaction()]

      if (onChangeReactions) {
        onChangeReactions(newReactions)
        changeNewReaction('')
      }
    }
  }

  return (
    <QuestionsBuilderContainer>
      <Input
        data-testid="input-question"
        value={questionText}
        placeholder="Enter question (e.g. What do you think?)"
        onChange={onChangeQuestionHandler}
      />
      {!reactions.length && (
        <Info>
          No reactions. Please, type a reaction and click on ADD button
        </Info>
      )}
      <ReactionsContainer>
        {reactions.map(({ id, value }) => (
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
