import CharPageActionTypes from "./pages.types"

export const makeACheck = (typeAndSuccess) => ({
  type: CharPageActionTypes.MAKE_A_CHECK,
  payload: typeAndSuccess,
})

export const equipWeapon = (weaponID) => ({
  type: CharPageActionTypes.EQUIP_WEAPON,
  payload: weaponID,
})

export const equipItem = (itemID) => ({
  type: CharPageActionTypes.EQUIP_ITEM,
  payload: itemID,
})

export const equipWearable = (wearableID) => ({
  type: CharPageActionTypes.EQUIP_WEARABLE,
  payload: wearableID,
})

export const unequipWeapon = (weaponID) => ({
  type: CharPageActionTypes.UNEQUIP_WEAPON,
  payload: weaponID,
})

export const unequipItem = (itemID) => ({
  type: CharPageActionTypes.UNEQUIP_ITEM,
  payload: itemID,
})

export const unequipWearable = (wearableID) => ({
  type: CharPageActionTypes.UNEQUIP_WEARABLE,
  payload: wearableID,
})
