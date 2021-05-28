import {
  QuestionReactionsProps,
  ReactionOption,
} from './question-reactions.types'

export const options: ReactionOption[] = [
  {
    id: 1,
    value: 'Yes',
    totalPeopleAnswered: 160,
  },
  {
    id: 2,
    value: 'No',
    totalPeopleAnswered: 30,
  },
  {
    id: 3,
    value: 'Maybe',
    totalPeopleAnswered: 10,
  },
]

export const props: QuestionReactionsProps = {
  question: 'Do you believe Leela?',
  currentAnswer: null,
  options,
}
