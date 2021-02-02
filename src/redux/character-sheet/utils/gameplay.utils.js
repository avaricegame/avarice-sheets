export const makeACheck = (stats, { type, success, critFail, critSuccess }) => {
  return stats.map((stat) => {
    if (stat.name.toUpperCase() === type) {
      if (!success) {
        if (critFail) return { ...stat, energyPoints: stat.energyPoints - 2 }
        return { ...stat, energyPoints: stat.energyPoints - 1 }
      }
      if (critSuccess)
        return {
          ...stat,
          energyPoints: stat.energyPoints - 1,
          successPoints: stat.successPoints + 2,
        }
      return { ...stat, energyPoints: stat.energyPoints - 1, successPoints: stat.successPoints + 1 }
    }
    return stat
  })
}

export const levelUp = (abilities, abilityToUnlockIDAndType) => {}
