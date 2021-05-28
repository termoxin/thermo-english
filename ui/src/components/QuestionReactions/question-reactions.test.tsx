import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { QuestionReactions } from './'
import { calculateReactionsPercentages } from './question-reactions.util'
import { props, options } from './question-reactions.mock'
import { wrapIntoTheme } from '../../test-helpers/wrapIntoTheme'
import { themes } from '../../styles/theme'

describe('QuestionReactions', () => {
  test('should render correctly', () => {
    const { getByText } = render(
      wrapIntoTheme(<QuestionReactions {...props} />),
    )

    expect(getByText('Do you believe Leela?')).toBeInTheDocument()
    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should have green button when question is answered', () => {
    const { getByText } = render(
      wrapIntoTheme(<QuestionReactions {...props} currentAnswer="Yes" />),
    )

    expect(getByText('Yes')).toHaveStyle({
      'background-color':
        themes.light.questionsReactions.answerButtonBackground,
    })
  })

  test('should invoke onAnswer callback when question is answered', () => {
    const onAnswer = jest.fn()

    const { getByText } = render(
      wrapIntoTheme(<QuestionReactions {...props} onAnswer={onAnswer} />),
    )

    userEvent.click(getByText('Yes'))

    expect(onAnswer).toBeCalledTimes(1)
  })

  test('should have percentages below answers buttons when question is answered', () => {
    const { getByText } = render(
      wrapIntoTheme(<QuestionReactions {...props} currentAnswer="Yes" />),
    )

    expect(getByText('80%')).toBeInTheDocument()
    expect(getByText('15%')).toBeInTheDocument()
    expect(getByText('5%')).toBeInTheDocument()
  })

  test('should not have percentages below answers buttons when question not answered', () => {
    const { queryByText } = render(
      wrapIntoTheme(<QuestionReactions {...props} />),
    )

    expect(queryByText('80%')).toBeNull()
    expect(queryByText('15%')).toBeNull()
    expect(queryByText('5%')).toBeNull()
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
