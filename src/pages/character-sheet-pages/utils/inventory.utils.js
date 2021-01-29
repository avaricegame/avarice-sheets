export const findAllEquippedInventoryItems = (array) => {
  return array.filter((inventoryItem) => inventoryItem.equipped)
}
