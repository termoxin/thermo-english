import React, { ChangeEvent, FC, useState } from 'react'
import { propEq, reject } from 'ramda'

import { QuestionsBuilderProps } from './questions-builder.types'
import { Input } from '../Input'
import { ReactionButton } from '../QuestionReactions/styled'
import {
  QuestionsBuilderContainer,
  ReactionsContainer,
  StyledButton,
} from './styled'

export const QuestionsBuilder: FC<QuestionsBuilderProps> = ({
  questionText,
  reactions,
  onChangeQuestion,
  onChangeReactions,
}) => {
  const [question, changeQuestion] = useState(questionText)
  const [newQuestion, changeNewQuestion] = useState('')
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

    changeNewQuestion(value)
  }

  const onAddHandler = () => {
    if (newQuestion) {
      const newReaction = { id: Date.now(), value: newQuestion }

      setReactions((reactions) => {
        const newReactions = [...reactions, newReaction]

        if (onChangeReactions) {
          onChangeReactions(newReactions)
        }

        return newReactions
      })

      changeNewQuestion('')
    }
  }

  const onReactionDblClick = (id: number) => () =>
    setReactions(reject(propEq('id', id)))

  return (
    <QuestionsBuilderContainer>
      <Input
        data-testid="input-question"
        value={question}
        onChange={onChangeQuestionHandler}
      />
      <ReactionsContainer>
        {currentReactions.map(({ id, value }) => (
          <ReactionButton
            key={id}
            data-testid={`question-${id}`}
            onDoubleClick={onReactionDblClick(id)}
          >
            {value}
          </ReactionButton>
        ))}
      </ReactionsContainer>
      <Input
        data-testid="input-new-reaction"
        value={newQuestion}
        onChange={onChangeNewQuestionHandler}
        placeholder="Enter reaction"
      />
      <StyledButton variant="squared" onClick={onAddHandler}>
        Add
      </StyledButton>
    </QuestionsBuilderContainer>
  )
}
