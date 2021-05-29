import { ButtonProps } from '../Button'

export interface ReactionOption {
  id: number
  value: string
  totalPeopleAnswered: number
}

export interface QuestionReactionsProps {
  question: string
  currentAnswer: string | null
  options: ReactionOption[]
  onAnswer?: (option: ReactionOption) => void
}

export interface AnswerButtonStyleProps extends ButtonProps {
  isSelected?: boolean
}
