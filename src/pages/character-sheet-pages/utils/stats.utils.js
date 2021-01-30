export const findStatProficiencyValue = (stats, statName) => {
  let proficiencyValue

  switch (statName.toUpperCase()) {
    case "STRENGTH":
      proficiencyValue = stats[0].proficiencyPoints
      break
    case "CONSTITUTION":
      proficiencyValue = stats[1].proficiencyPoints
      break
    case "REFLEX":
      proficiencyValue = stats[2].proficiencyPoints
      break
    case "SPEED":
      proficiencyValue = stats[3].proficiencyPoints
      break
    case "TECHNICAL":
      proficiencyValue = stats[4].proficiencyPoints
      break
    case "PRACTICAL":
      proficiencyValue = stats[5].proficiencyPoints
      break
    case "SPEECH":
      proficiencyValue = stats[6].proficiencyPoints
      break
    case "PERFORMANCE":
      proficiencyValue = stats[7].proficiencyPoints
      break
    case "RANGED":
      proficiencyValue = stats[8].proficiencyPoints
      break
    case "MELEE":
      proficiencyValue = stats[9].proficiencyPoints
      break
    default:
      break
  }

  return proficiencyValue
}

export const calculateActualStatValues = (stats, equippedWearables, classStats) => {
  return stats
}
