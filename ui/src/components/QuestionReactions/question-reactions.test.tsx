import React from 'react'
import userEvent from '@testing-library/user-event'

import { QuestionReactions } from './'
import { calculateReactionsPercentages } from './question-reactions.util'
import { props, options } from './question-reactions.mock'
import { renderWithTheme as render } from '../../test-helpers/renderWithTheme'
import { themes } from '../../styles/theme'

describe('QuestionReactions', () => {
  test('should render correctly', () => {
    const { getByText } = render(<QuestionReactions {...props} />)

    expect(getByText('Do you believe Leela?')).toBeInTheDocument()
    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should have green button when question is answered', () => {
    const { getByText } = render(
      <QuestionReactions {...props} currentAnswer="Yes" />,
    )

    expect(getByText('Yes')).toHaveStyle({
      'background-color':
        themes.light.questionsReactions.answerButtonBackground,
    })
  })

  test('should invoke onAnswer callback when question is answered', () => {
    const onAnswer = jest.fn()

    const { getByText } = render(
      <QuestionReactions {...props} onAnswer={onAnswer} />,
    )

    userEvent.click(getByText('Yes'))

    expect(onAnswer).toBeCalledTimes(1)
  })

  test('should have percentages below answers buttons when question is answered', () => {
    const { getByText } = render(
      <QuestionReactions {...props} currentAnswer="Yes" />,
    )

    expect(getByText('80%')).toBeInTheDocument()
    expect(getByText('15%')).toBeInTheDocument()
    expect(getByText('5%')).toBeInTheDocument()
  })

  test('should not have percentages below answers buttons when question not answered', () => {
    const { queryByText } = render(<QuestionReactions {...props} />)

    expect(queryByText('80%')).toBeNull()
    expect(queryByText('15%')).toBeNull()
    expect(queryByText('5%')).toBeNull()
  })

  describe('utils', () => {
    describe('calculateReactionsPercentages', () => {
      test('should return percentages', () => {
        const output = [
          { 1: 80, 2: 15, 3: 5 },
          { 1: 11, 2: 2, 3: 1, 4: 27, 5: 60 },
        ]

        const extendedOptions = [
          ...options,
          {
            id: 4,
            value: 'Never again',
            totalPeopleAnswered: 410,
          },
          {
            id: 5,
            value: 'Are you kidding me?',
            totalPeopleAnswered: 910,
          },
        ]

        expect(calculateReactionsPercentages(options)).toEqual(output[0])
        expect(calculateReactionsPercentages(extendedOptions)).toEqual(
          output[1],
        )
      })
    })
  })
})
