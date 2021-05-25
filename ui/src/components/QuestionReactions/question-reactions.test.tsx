import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { QuestionReactions, QuestionReactionsProps } from './'
import { calculateReactionsPercentages } from './question-reactions.util'

describe('QuestionReactions', () => {
  const options = [
    {
      id: 1,
      value: 'Yes',
      peopleAnswered: 160,
    },
    {
      id: 2,
      value: 'No',
      peopleAnswered: 30,
    },
    {
      id: 3,
      value: 'Maybe',
      peopleAnswered: 10,
    },
  ]

  const props: QuestionReactionsProps = {
    question: 'Do you believe Leela?',
    previousAnswer: null,
    totalReactions: 200,
    options,
  }

  test('should render correctly', () => {
    const { getByText } = render(<QuestionReactions {...props} />)

    expect(getByText('Do you believe Leela?')).toBeInTheDocument()
    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should have green button when question is answered', () => {
    const { getByText } = render(
      <QuestionReactions {...props} previousAnswer="Yes" />,
    )

    expect(getByText('No')).toHaveStyle({ background: 'green' })
  })

  test('should invoke onAnswer callback when question is answered', () => {
    const onAnswer = jest.fn()

    const { getByText } = render(
      <QuestionReactions {...props} onAnswer={onAnswer} />,
    )

    userEvent.click(getByText('Yes'))

    expect(onAnswer).toBeCalledTimes(1)
  })

  test('should able to change answer', () => {
    const { getByText } = render(<QuestionReactions {...props} />)

    userEvent.click(getByText('Yes'))

    expect(getByText('Yes')).toHaveStyle({ background: 'green' })

    userEvent.click(getByText('No'))

    expect(getByText('No')).toHaveStyle({ background: 'green' })
  })

  test('should have percentages below answers buttons when question is answered', () => {
    const { getByText } = render(<QuestionReactions {...props} />)

    expect(getByText('80%')).toBeInTheDocument()
    expect(getByText('15%')).toBeInTheDocument()
    expect(getByText('5%')).toBeInTheDocument()
  })

  describe('utils', () => {
    describe('calculateReactionsPercentages', () => {
      test('should return percentages', () => {
        const output = { 1: 80, 2: 15, 3: 5 }

        expect(calculateReactionsPercentages(200, options)).toEqual(output)
      })
    })
  })
})
