export const mapDifficultyToValueToBeat = (difficulty) => {
  return parseInt(difficulty) + 10
}

export const findStatBeingChecked = (transformedCalculatedStats, type) => {
  const theStat = transformedCalculatedStats.filter((stat) => stat.name.toUpperCase() === type)
  return theStat[0]
}

export const addOrSubtractAdvantageToValueToBeat = (valueToBeat, advantage) => {
  if (advantage === -1 || advantage === 0 || advantage === 1) return valueToBeat

  if (advantage > 0) {
    return valueToBeat + (advantage - 1) * 2
  }

  if (advantage < 0) {
    return valueToBeat - (advantage + 1) * 2
  }
}

export const determineAdvantageBonus = (advantage) => {
  if (advantage === -1 || advantage === 0 || advantage === 1) return advantage

  if (advantage > 0) {
    return (advantage - 1) * 2
  }

  if (advantage < 0) {
    return (advantage + 1) * 2
  }
}
