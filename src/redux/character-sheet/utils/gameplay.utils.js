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

export const levelUp = (abilities, { id, type }) => {
  const typeToUnlock = type

  const correctAbility = abilities.find((ability) => ability.id === id)

  const correctedTypesArray = correctAbility.types.map((type) => {
    return type.type === typeToUnlock ? { ...type, unlocked: true } : type
  })

  console.log(correctedTypesArray)

  return abilities.map((ability) => {
    return ability.id === id ? { ...ability, types: [...correctedTypesArray] } : ability
  })
}

export const loadAbilitiesFromLoadout = (abilities, loadout) => {
  console.log(abilities)
  console.log(loadout)
}

export const takeARest = (stats, type) => {
  console.log(stats)
  console.log(type)

  return stats.map((stat) => {
    return stat.successPoints >= stat.proficiencyPoints
      ? {
          ...stat,
          successPoints: 0,
          proficiencyPoints: stat.proficiencyPoints + 1,
          energyPoints: stat.proficiencyPoints + 1,
        }
      : { ...stat, successPoints: 0, energyPoints: stat.proficiencyPoints }
  })
}
