export const equipWeapon = (weapons, weaponID) => {
  return weapons.map((weapon) => {
    return weapon.id === weaponID ? { ...weapon, equipped: true } : weapon
  })
}

export const unequipWeapon = (weapons, weaponID) => {
  return weapons.map((weapon) => {
    return weapon.id === weaponID ? { ...weapon, equipped: false } : weapon
  })
}

export const equipItem = (items, itemID) => {
  return items.map((item) => {
    return item.id === itemID ? { ...item, equipped: true } : item
  })
}

export const unequipItem = (items, itemID) => {
  return items.map((item) => {
    return item.id === itemID ? { ...item, equipped: false } : item
  })
}

export const equipWearable = (wearables, wearableID) => {
  return wearables.map((wearable) => {
    return wearable.id === wearableID ? { ...wearable, equipped: true } : wearable
  })
}

export const unequipWearable = (wearables, wearableID) => {
  return wearables.map((wearable) => {
    return wearable.id === wearableID ? { ...wearable, equipped: false } : wearable
  })
}
