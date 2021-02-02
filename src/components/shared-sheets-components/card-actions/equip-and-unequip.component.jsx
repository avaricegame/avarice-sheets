import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// dispatch actions
import {
  equipWeapon,
  equipItem,
  equipWearable,
  unequipWeapon,
  unequipWearable,
  unequipItem,
} from "../../../redux/character-sheet/pages/pages.actions"

import {
  selectWeapons,
  selectWearables,
  selectItems,
} from "../../../redux/character-sheet/character-sheet.selectors"

import {
  findEquippedInventoryItems,
  restructureEquippedWearables,
} from "../../../pages/character-sheet-pages/utils/inventory.utils"

class EquipAndUnequipActions extends React.Component {
  constructor(props) {
    super(props)

    this.handleEquip = this.handleEquip.bind(this)
    this.handleUnequip = this.handleUnequip.bind(this)
  }

  handleEquip() {
    const {
      type,
      id,
      bodyArea,
      weapons,
      wearables,
      items,
      equipWeapon,
      equipItem,
      equipWearable,
    } = this.props

    const equippedWeapons = findEquippedInventoryItems(weapons)
    const equippedWearables = findEquippedInventoryItems(wearables)
    const equippedItems = findEquippedInventoryItems(items)
    const newEquippedWearables = restructureEquippedWearables(equippedWearables)

    console.log(newEquippedWearables)

    if (type === "WEAPON") {
      // make sure there aren't already two weapons equipped
      if (equippedWeapons.length >= 2) {
        window.alert("You must unequip a weapon before you can equip a new one.")
      } else {
        equipWeapon(id)
      }
    }

    if (type === "WEARABLE") {
      // make a new object with objects for each body area in it,
      // with the keys being the body area
      let equippedWearablesObject = {}
      newEquippedWearables.forEach((wearable) => {
        equippedWearablesObject[wearable.bodyArea] = { ...wearable }
      })

      // check if a wearable is already equipped on the body area
      // that the current wearable is trying to be equipped to
      if (equippedWearablesObject[bodyArea].name) {
        window.alert(
          "You must first unequip the wearable on your " +
            bodyArea.toLowerCase() +
            " before you can equip this."
        )
      } else {
        equipWearable(id)
      }
    }

    if (type === "ITEM") {
      // make sure there aren't already three items equipped
      if (equippedItems.length >= 3) {
        window.alert("You must unequip an item before you can equip a new one.")
      } else {
        equipItem(id)
      }
    }
  }

  handleUnequip() {
    const { type, id, unequipItem, unequipWeapon, unequipWearable } = this.props
    if (type === "WEAPON") {
      unequipWeapon(id)
    }

    if (type === "WEARABLE") {
      unequipWearable(id)
    }

    if (type === "ITEM") {
      unequipItem(id)
    }
  }

  render() {
    const { equipped, isEquippedList } = this.props
    return (
      <p className={`actions ${isEquippedList ? "actions--equipped-inventory-items-display" : ""}`}>
        {equipped ? (
          <span onClick={this.handleUnequip}>UNEQUIP</span>
        ) : (
          <span onClick={this.handleEquip}>EQUIP</span>
        )}
      </p>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  equipWeapon: (weaponID) => dispatch(equipWeapon(weaponID)),
  equipWearable: (wearableID) => dispatch(equipWearable(wearableID)),
  equipItem: (itemID) => dispatch(equipItem(itemID)),
  unequipWeapon: (weaponID) => dispatch(unequipWeapon(weaponID)),
  unequipWearable: (wearableID) => dispatch(unequipWearable(wearableID)),
  unequipItem: (itemID) => dispatch(unequipItem(itemID)),
})

const mapStateToProps = createStructuredSelector({
  weapons: selectWeapons,
  wearables: selectWearables,
  items: selectItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(EquipAndUnequipActions)
