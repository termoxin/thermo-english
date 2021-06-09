import { ReactionOption } from '../QuestionReactions'

export interface QuestionsBuilderProps {
  questionText: string
  reactions: ReactionOption[]
  onChangeQuestion?: (value: string) => void
  onChangeReactions?: (reactions: ReactionOption[]) => void
  onDeleteReaction?: (id: number) => void
}
