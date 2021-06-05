export interface QuestionBuilderReactionOption {
  id: number
  value: string
}

export interface QuestionsBuilderProps {
  questionText: string
  reactions: QuestionBuilderReactionOption[]
  onChangeQuestion?: (value: string) => void
  onChangeReactions?: (reactions: QuestionBuilderReactionOption[]) => void
}
