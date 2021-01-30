// this lets me easily get a proficiency value from the stats
// without having to go digging around in the stats object on
// any particular page
export const findStatProficiencyValue = (calculatedStats, statName) => {
  const requestedStat = calculatedStats.find(
    (statObj) => statObj.name.toUpperCase() === statName.toUpperCase()
  )

  const proficiencyValue = requestedStat.proficiencyPoints

  return proficiencyValue
}

// this takes the stat values from the three sources: stats, equipped wearables
// stats, and the class stats, and combines them all into one data source that
// i can use to display on the app
export const calculateActualStatValuesAndTransform = (stats, equippedWearables, classStats) => {
  // deep copy the three passed args to remove ALL references to the original in memory
  let copiedStats = JSON.parse(JSON.stringify(stats))
  let copiedEquippedWearables = JSON.parse(JSON.stringify(equippedWearables))
  let copiedClassStats = JSON.parse(JSON.stringify(classStats))

  copiedStats.forEach((statObj) => transformStatValuesObjects(statObj))

  // strip down the array of equipped wearables to be just an array of their stat arrays
  const equippedWearablesStats = copiedEquippedWearables.map((wearable) => wearable.statModifiers)

  equippedWearablesStats.forEach((statsArray) => {
    statsArray.forEach((statObj) => transformOtherStatObjects(statObj, "A"))
  })

  copiedClassStats.forEach((statObj) => {
    transformOtherStatObjects(statObj, "C")
  })

  // loop through the array to send each nested
  // array to be added to the main array
  equippedWearablesStats.forEach((statsArray) => {
    addStatsToMainArray(copiedStats, statsArray)
  })

  addStatsToMainArray(copiedStats, copiedClassStats, true)

  return copiedStats
}

// the stat object proficiency values are stored as numbers
// so this takes those objects, and adds a new array to them
// the new array has the same number of items as the number
// value of the proficiency, and those items are all the
// bool, false, to know they came from the main stats array
const transformStatValuesObjects = (statObject) => {
  let newArray = []
  statObject.newProficiencyPoints = statObject.proficiencyPoints

  while (statObject.newProficiencyPoints > 0) {
    newArray.push(false)
    statObject.newProficiencyPoints -= 1
  }

  statObject.newProficiencyPoints = newArray
}

// the stat object proficiency values are stored as numbers
// so this takes those objects, and adds a new array to them.
// the new array has the same number of items as the number
// value of the proficiency (except an X for a negative number--
// which will be resolved later)
// and those items are all given a letter value, to be used in
// the UI to let the user know where they came from
const transformOtherStatObjects = (statObject, letterToPush) => {
  let newArray = []
  statObject.newValue = statObject.value

  // check for subtracted stat modifications
  // if there are, then push X onto the array
  if (statObject.newValue < 0) {
    while (statObject.newValue < 0) {
      newArray.push("X")
      statObject.newValue += 1
    }
  }

  while (statObject.newValue > 0) {
    newArray.push(letterToPush)
    statObject.newValue -= 1
  }

  console.log(statObject)
  console.log(newArray)

  statObject.newValue = newArray
}

// this takes the wearableStats array of arrays and loops through it,
// then loops through each of its nested arrays, then finds the
// associated object from the main stats array, and adds the
// extra stats to that array
const addStatsToMainArray = (stats, statsToAdd, addToBeginning) => {
  statsToAdd.forEach((statsToAddObj) => {
    const objToAddTo = stats.find(
      (obj) => obj.name.toUpperCase() === statsToAddObj.modifier.toUpperCase()
    )

    console.log(objToAddTo)
    console.log(statsToAddObj)

    // if there were any subtracted stat modifications
    // and X was push onto the array, then
    // REMOVE the last element of the main array
    // then POP the X off the array and PUSH it
    // on to the end -- basically, the X is replacing
    // the last element of the main array if there is an
    // X at all
    if (statsToAddObj.newValue.includes("X")) {
      objToAddTo.newProficiencyPoints.pop()
      objToAddTo.newProficiencyPoints.push(statsToAddObj.newValue.pop())
    }

    // if add to beginning is true, add the new array
    // to the beginning instead of the end
    if (addToBeginning) {
      objToAddTo.newProficiencyPoints = [
        ...statsToAddObj.newValue,
        ...objToAddTo.newProficiencyPoints,
      ]
    } else {
      objToAddTo.newProficiencyPoints = [
        ...objToAddTo.newProficiencyPoints,
        ...statsToAddObj.newValue,
      ]
    }

    // add the actual numbers together for later use
    objToAddTo.proficiencyPoints += statsToAddObj.value
  })
}
