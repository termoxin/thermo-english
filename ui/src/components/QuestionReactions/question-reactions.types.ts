import { ButtonProps } from '../Button'

export interface ReactionOption {
  id: number
  value: string
  peopleAnswered: number
}

export interface QuestionReactionsProps {
  question: string
  currentAnswer: string | null
  options: ReactionOption[]
  totalReactions: number
  onAnswer?: (option: ReactionOption) => void
}

export interface AnswerButtonStyleProps extends ButtonProps {
  isSelected: boolean
}
