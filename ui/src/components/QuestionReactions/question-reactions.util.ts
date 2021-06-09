import { ReactionOption } from './question-reactions.types'

export const calculateReactionsPercentages = (
  options: ReactionOption[],
): Record<number, number> => {
  const percentagesById: Record<number, number> = {}

  const totalReactions = options.reduce(
    (totalReactions, option) =>
      option.totalPeopleAnswered
        ? totalReactions + option.totalPeopleAnswered
        : totalReactions,
    0,
  )

  options.forEach((option) => {
    percentagesById[option.id] = option.totalPeopleAnswered
      ? +(option.totalPeopleAnswered / totalReactions).toFixed(2) * 100
      : totalReactions
  })

  return percentagesById
}
