// this pulls together all the equipped abilities from the various
// sources, the starting ability, the equipped abilities from the class
// tree, and the abilities given from the equipped inventory items
export const findAllEquippedAbilities = (
  abilitiesArray,
  startingAbilityObj,
  equippedWeapons,
  equippedWearables
) => {
  let equippedAbilities = []

  abilitiesArray.forEach((abilityObj) => {
    let equipped = abilityObj.types.filter((abilityType) => abilityType.equipped)
    equipped[0].name = abilityObj.name
    equippedAbilities.push(equipped[0])
  })

  const equipment = equippedWeapons.concat(equippedWearables)

  const equipmentWithAbilities = filterInventoryItemsToFindItemsWithAbilities(equipment)

  const justAbiltiesFromEquipment = extractJustTheAbilitiesFromEquipment(equipmentWithAbilities)

  equippedAbilities = equippedAbilities.concat(justAbiltiesFromEquipment)

  equippedAbilities.unshift(startingAbilityObj)

  return equippedAbilities
}

const filterInventoryItemsToFindItemsWithAbilities = (array) => {
  return array.filter((inventoryItem) => inventoryItem.abilities.length)
}

// this loops through an array of equipment and creates a new array of just
// the abilities that are attached to said equipment, if any
const extractJustTheAbilitiesFromEquipment = (equipmentArray) => {
  let abilitiesArray = []
  equipmentArray.map((equipment) =>
    equipment.abilities.forEach((ability) => {
      ability.equipmentName = equipment.name
      return abilitiesArray.push(ability)
    })
  )
  return abilitiesArray
}
