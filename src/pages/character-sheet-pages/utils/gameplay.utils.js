export const calculateMaxHPValue = (level, constitutionStat) => {
  const maxHP = constitutionStat * level + 5
  return maxHP
}

export const calculateDodgeValue = (reflexStat, raceSize) => {
  const mapRaceSizeToValue = {
    tiny: 10,
    small: 5,
    medium: 0,
    large: -5,
    huge: -10,
  }

  const dodgeValue = reflexStat * 2 + mapRaceSizeToValue[raceSize]

  return dodgeValue
}
