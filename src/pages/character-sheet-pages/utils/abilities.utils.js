import { findAllEquippedInventoryItems } from "./inventory.utils"

export const findAllEquippedAbilities = (
  abilitiesArray,
  startingAbilityObj,
  weaponsArray,
  wearablesArray
) => {
  let equippedAbilities = []

  abilitiesArray.forEach((abilityObj) => {
    let equipped = abilityObj.types.filter((abilityType) => abilityType.equipped)
    equipped[0].name = abilityObj.name
    equippedAbilities.push(equipped[0])
  })

  const equippedWeapons = findAllEquippedInventoryItems(weaponsArray)
  const equippedWearables = findAllEquippedInventoryItems(wearablesArray)

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
