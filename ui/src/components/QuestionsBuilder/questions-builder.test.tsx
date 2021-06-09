import React from 'react'
import { fireEvent } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import { QuestionsBuilder } from './questions-builder'
import { props } from './questions-builder.mock'
import { renderWithTheme as render } from '../../test-helpers/renderWithTheme'

describe('QuestionsBuilder', () => {
  let dateNowSpy: jest.SpyInstance<number, []>

  beforeAll(() => {
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 538)
  })

  afterAll(() => {
    dateNowSpy.mockRestore()
  })

  test('should render correctly', () => {
    const { getByText, getByTestId } = render(<QuestionsBuilder {...props} />)

    expect(getByTestId('input-question')).toBeInTheDocument()

    expect(getByTestId('question-12345')).toBeInTheDocument()
    expect(getByTestId('question-12346')).toBeInTheDocument()
    expect(getByTestId('question-12347')).toBeInTheDocument()

    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()

    expect(getByTestId('input-question')).toBeInTheDocument()

    expect((getByTestId('input-question') as HTMLInputElement).value).toBe(
      props.questionText,
    )

    expect(getByTestId('input-new-reaction')).toBeInTheDocument()

    expect(getByText('Add reaction')).toBeInTheDocument()
  })

  test('should change input question', () => {
    const onChangeQuestion = jest.fn()

    const { getByTestId } = render(
      <QuestionsBuilder
        {...{ ...props, questionText: '' }}
        onChangeQuestion={onChangeQuestion}
      />,
    )

    expect((getByTestId('input-question') as HTMLInputElement).value).toBe('')

    userEvent.type(getByTestId('input-question'), 'Hello')

    expect((getByTestId('input-question') as HTMLInputElement).value).toBe('')

    expect(onChangeQuestion.mock.calls).toEqual([
      ['H'],
      ['e'],
      ['l'],
      ['l'],
      ['o'],
    ])

    expect(onChangeQuestion).toBeCalledTimes(5)
  })

  test('should change input new reaction', () => {
    const { getByTestId } = render(<QuestionsBuilder {...props} />)

    userEvent.type(getByTestId('input-new-reaction'), 'Never')

    expect((getByTestId('input-new-reaction') as HTMLInputElement).value).toBe(
      'Never',
    )
  })

  test('should not create an empty reaction', () => {
    const onChangeReactions = jest.fn()

    const { getByText } = render(
      <QuestionsBuilder {...props} onChangeReactions={onChangeReactions} />,
    )

    userEvent.click(getByText('Add reaction'))

    expect(onChangeReactions).toBeCalledTimes(0)

    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should create a new reaction', () => {
    const onChangeReactions = jest.fn()

    const { getByText, getByTestId } = render(
      <QuestionsBuilder {...props} onChangeReactions={onChangeReactions} />,
    )

    userEvent.type(getByTestId('input-new-reaction'), 'Never')

    expect((getByTestId('input-new-reaction') as HTMLInputElement).value).toBe(
      'Never',
    )

    userEvent.click(getByText('Add reaction'))

    expect(onChangeReactions.mock.calls[0][0]).toEqual([
      { id: 12345, value: 'Yes' },
      { id: 12346, value: 'No' },
      { id: 12347, value: 'Maybe' },
      { id: 538, value: 'Never' },
    ])

    expect(onChangeReactions).toBeCalledTimes(1)

    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should create a new reaction by pressing Enter key', () => {
    const onChangeReactions = jest.fn()

    const { getByText, getByTestId } = render(
      <QuestionsBuilder {...props} onChangeReactions={onChangeReactions} />,
    )

    userEvent.type(getByTestId('input-new-reaction'), 'Never')

    expect((getByTestId('input-new-reaction') as HTMLInputElement).value).toBe(
      'Never',
    )

    fireEvent.keyUp(getByTestId('input-new-reaction'), {
      key: 'Enter',
      code: 'Enter',
    })

    expect(onChangeReactions.mock.calls[0][0]).toEqual([
      { id: 12345, value: 'Yes' },
      { id: 12346, value: 'No' },
      { id: 12347, value: 'Maybe' },
      { id: 538, value: 'Never' },
    ])

    expect(onChangeReactions).toBeCalledTimes(1)

    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should not create an empty reaction by pressing Enter key', () => {
    const onChangeReactions = jest.fn()

    const { getByText, getByTestId } = render(
      <QuestionsBuilder {...props} onChangeReactions={onChangeReactions} />,
    )

    userEvent.clear(getByTestId('input-new-reaction'))

    fireEvent.keyUp(getByTestId('input-new-reaction'), {
      key: 'Enter',
      code: 'Enter',
    })

    expect(onChangeReactions).toBeCalledTimes(0)

    expect(getByText('Yes')).toBeInTheDocument()
    expect(getByText('No')).toBeInTheDocument()
    expect(getByText('Maybe')).toBeInTheDocument()
  })

  test('should delete a reaction by double-clicking on it', () => {
    const onDeleteReaction = jest.fn()

    const { getByText, queryByText } = render(
      <QuestionsBuilder {...props} onDeleteReaction={onDeleteReaction} />,
    )

    userEvent.dblClick(getByText('No'))
    userEvent.dblClick(getByText('Maybe'))

    expect(onDeleteReaction.mock.calls).toEqual([[12346], [12347]])
    expect(getByText('Yes')).toBeInTheDocument()
    expect(queryByText('No')).toBeInTheDocument()
    expect(queryByText('Maybe')).toBeInTheDocument()
  })

  test('should show info text about how to create a reaction where no reactions', () => {
    const { getByText } = render(
      <QuestionsBuilder {...{ ...props, reactions: [] }} />,
    )

    expect(
      getByText(
        'No reactions. Please, type a reaction and click on ADD button',
      ),
    )
  })
})
