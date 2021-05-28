import { ReactionOption } from './question-reactions.types'

export const calculateReactionsPercentages = (
  options: ReactionOption[],
): Record<number, number> => {
  const percentagesById: Record<number, number> = {}

  const totalReactions = options.reduce(
    (totalReactions, option) => totalReactions + option.totalPeopleAnswered,
    0,
  )

  options.forEach((option) => {
    percentagesById[option.id] =
      +(option.totalPeopleAnswered / totalReactions).toFixed(2) * 100
  })

  return percentagesById
}
