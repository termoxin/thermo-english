import { QuestionsBuilderProps } from './questions-builder.types'

export const props: QuestionsBuilderProps = {
  questionText: 'Do you believe Leela',
  reactions: [
    {
      id: 12345,
      value: 'Yes',
    },
    {
      id: 12346,
      value: 'No',
    },
    {
      id: 12347,
      value: 'Maybe',
    },
  ],
}
