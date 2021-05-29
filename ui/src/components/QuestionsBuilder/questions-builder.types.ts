export interface ReactionOption {
  id: number
  value: string
}

export interface QuestionsBuilderProps {
  questionText: string
  reactions: ReactionOption[]
  onChangeQuestion?: (value: string) => void
  onChangeReactions?: (reactions: ReactionOption[]) => void
}
