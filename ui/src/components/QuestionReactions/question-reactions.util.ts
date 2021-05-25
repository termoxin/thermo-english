import { ReactionOption } from './question-reactions.types'

export const calculateReactionsPercentages = (
  totalReactions: number,
  options: ReactionOption[],
): Record<number, number> => {
  const percentagesById: Record<number, number> = {}

  options.forEach((option) => {
    percentagesById[option.id] =
      +(option.peopleAnswered / totalReactions).toFixed(2) * 100
  })

  return percentagesById
}
