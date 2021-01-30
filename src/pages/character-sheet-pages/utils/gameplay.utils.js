// this calulates the max hp for the character
export const calculateMaxHPValue = (level, constitutionStat) => {
  const maxHP = constitutionStat * level + 5
  return maxHP
}

// this maps the race size to a number, then calculates the dodge value
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
