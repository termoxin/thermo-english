import React, { ChangeEvent, FC, useState } from 'react'
import { propEq, reject } from 'ramda'

import { QuestionsBuilderProps } from './questions-builder.types'

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
    <div>
      <input
        data-testid="input-question"
        value={question}
        onChange={onChangeQuestionHandler}
      />
      <div>
        {currentReactions.map(({ id, value }) => (
          <button
            key={id}
            data-testid={`question-${id}`}
            onDoubleClick={onReactionDblClick(id)}
          >
            {value}
          </button>
        ))}
      </div>
      <input
        data-testid="input-new-reaction"
        value={newQuestion}
        onChange={onChangeNewQuestionHandler}
      />
      <button onClick={onAddHandler}>Add</button>
    </div>
  )
}
