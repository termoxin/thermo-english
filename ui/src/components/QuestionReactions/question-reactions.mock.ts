import {
  QuestionReactionsProps,
  ReactionOption,
} from './question-reactions.types'

export const options: ReactionOption[] = [
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

export const props: QuestionReactionsProps = {
  question: 'Do you believe Leela?',
  currentAnswer: null,
  totalReactions: 200,
  options,
}
