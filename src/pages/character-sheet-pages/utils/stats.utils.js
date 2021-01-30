// this lets me easily get a proficiency value from the stats
// without having to go digging around in the stats object on
// any particular page
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
    case "PERFORM":
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

// this takes the stat values from the three sources: stats, equipped wearables
// stats, and the class stats, and combines them all into one data source that
// i can use to display on the app
export const calculateActualStatValues = (stats, equippedWearables, classStats) => {
  stats.forEach((statObj) => transformStatValuesObjects(statObj))

  const equippedWearablesStats = equippedWearables.map((wearable) => wearable.statModifiers)

  equippedWearablesStats.forEach((wearablesArray) => {
    wearablesArray.forEach((statObj) => transformEquippedWearablesStatValuesObjects(statObj))
  })

  classStats.forEach((classStatsObj) => {
    transformClassesStatValuesObjects(classStatsObj)
  })

  addInEquippedWearablesStats(stats, equippedWearablesStats)

  addInClassesStats(stats, classStats)

  return stats
}

// the stat object proficiency values are stored as numbers
// so this takes those objects, and adds a new array to them
// the new array has the same number of items as the number
// value of the proficiency, and those items are all the
// bool, false
const transformStatValuesObjects = (statValueObject) => {
  let newArray = []
  statValueObject.newProficiencyPoints = statValueObject.proficiencyPoints

  while (statValueObject.newProficiencyPoints > 0) {
    newArray.push(false)
    statValueObject.newProficiencyPoints -= 1
  }

  statValueObject.newProficiencyPoints = newArray
}

// the stat object proficiency values are stored as numbers
// so this takes those objects, and adds a new array to them
// the new array has the same number of items as the number
// value of the proficiency, and those items are all the
// bool, true, to let me know they are from wearables
const transformEquippedWearablesStatValuesObjects = (wearableStatValueObject) => {
  let newArray = []
  wearableStatValueObject.newValue = wearableStatValueObject.value

  while (wearableStatValueObject.newValue > 0) {
    newArray.push("A")
    wearableStatValueObject.newValue -= 1
  }

  wearableStatValueObject.newValue = newArray
}

// the stat object proficiency values are stored as numbers
// so this takes those objects, and adds a new array to them
// the new array has the same number of items as the number
// value of the proficiency, and those items are all the
// value, "C", to let me know they are from the class
const transformClassesStatValuesObjects = (classesStatValueObject) => {
  let newArray = []
  classesStatValueObject.newValue = classesStatValueObject.value

  while (classesStatValueObject.newValue > 0) {
    newArray.push("C")
    classesStatValueObject.newValue -= 1
  }

  classesStatValueObject.newValue = newArray
}

// this takes the wearableStats array of arrays and loops through it,
// then finds the associated object from the main stats array, and
// adds the extra stats to that array
const addInEquippedWearablesStats = (stats, wearableStats) => {
  wearableStats.forEach((statsArray) => {
    statsArray.forEach((statsObj) => {
      const objToAddTo = stats.find(
        (obj) => obj.name.toUpperCase() === statsObj.modifier.toUpperCase()
      )
      objToAddTo.newProficiencyPoints = [...objToAddTo.newProficiencyPoints, ...statsObj.newValue]
    })
  })
}

// then finds the associated object from the main stats array of
// objects, and adds the extra stats to that array
const addInClassesStats = (stats, classStats) => {
  classStats.forEach((statsObj) => {
    const objToAddTo = stats.find(
      (obj) => obj.name.toUpperCase() === statsObj.modifier.toUpperCase()
    )
    objToAddTo.newProficiencyPoints = [...objToAddTo.newProficiencyPoints, ...statsObj.newValue]
  })
}
