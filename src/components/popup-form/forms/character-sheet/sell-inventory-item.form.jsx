import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import WearableCard from "../../../shared-sheets-components/wearable-card/wearable-card.component"
import WeaponCard from "../../../shared-sheets-components/weapon-card/weapon-card.component"
import ItemCard from "../../../shared-sheets-components/item-card/item-card.component"

// selectors
import {
  selectWeapons,
  selectWearables,
  selectItems,
} from "../../../../redux/character-sheet/character-sheet.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class AddNewWearable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayInventoryItem: false,
      type: "PLEASE SPECIFY",
      value: 0,
      id: null,
      currentWeapon: null,
      currentItem: null,
      currentWearable: null,
    }
  }

  handleChange(e) {
    const { wearables, weapons, items } = this.props
    const { type } = this.state

    if (e.target.value !== "SELECT ONE") {
      let currentInventoryItem

      if (type === "WEAPON") {
        currentInventoryItem = weapons.find((weapon) => weapon.id === e.target.value)
        console.log(currentInventoryItem)
        this.setState({
          currentWeapon: currentInventoryItem,
          displayInventoryItem: true,
          id: currentInventoryItem.id,
        })
      }

      if (type === "ITEM") {
        currentInventoryItem = items.find((item) => item.id === e.target.value)
        this.setState({
          currentItem: currentInventoryItem,
          displayInventoryItem: true,
          id: currentInventoryItem.id,
        })
      }

      if (type === "WEARABLE") {
        currentInventoryItem = wearables.find((wearable) => wearable.id === e.target.value)
        this.setState({
          currentWearable: currentInventoryItem,
          displayInventoryItem: true,
          id: currentInventoryItem.id,
        })
      }
    } else {
      this.setState({
        displayInventoryItem: false,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { value, type, currentInventoryItem } = this.state

    if (value === "") return window.alert("You must specify a value in order to sell.")

    window.alert("Form is not hooked up yet")
    console.log(value, type, currentInventoryItem)
  }

  render() {
    const { wearables, weapons, items } = this.props
    const {
      value,
      displayInventoryItem,
      currentWeapon,
      currentItem,
      currentWearable,
      type,
    } = this.state

    return (
      <>
        <PopupFormHeading>Sell Inventory Item</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="choose-something">Inventory Type</label>
            <select
              name="choose-something"
              onChange={(e) => this.setState({ type: e.target.value })}
            >
              <option value="PLEASE SPECIFY">Please Specify</option>
              <option value="WEAPON">Weapon</option>
              <option value="ITEM">Item</option>
              <option value="WEARABLE">Wearable</option>
            </select>

            {type === "WEAPON" ? (
              <>
                <label htmlFor="choose-weapon">Choose A Weapon to Sell</label>
                <select name="choose-weapon" onChange={(e) => this.handleChange(e, "WEAPON")}>
                  <option value="SELECT ONE">Select a Weapon</option>
                  {weapons.map(({ name, id }, index) => (
                    <option key={index} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </>
            ) : null}

            {type === "ITEM" ? (
              <>
                <label htmlFor="choose-item">Choose An Item to Sell</label>
                <select name="choose-item" onChange={(e) => this.handleChange(e, "ITEM")}>
                  <option value="SELECT ONE">Select an Item</option>
                  {items.map(({ name, id }, index) => (
                    <option key={index} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </>
            ) : null}

            {type === "WEARABLE" ? (
              <>
                <label htmlFor="choose-wearable">Choose A Wearable to Sell</label>
                <select name="choose-wearable" onChange={(e) => this.handleChange(e, "WEARABLE")}>
                  <option value="SELECT ONE">Select a Wearable</option>
                  {wearables.map(({ name, id }, index) => (
                    <option key={index} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </>
            ) : null}

            {type !== "PLEASE SPECIFY" ? (
              <>
                <label htmlFor="value">Value of {type || "Inventory Item"}</label>
                <input
                  type="number"
                  name="value"
                  value={value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
              </>
            ) : null}

            {displayInventoryItem && type === "WEAPON" && currentWeapon ? (
              <WeaponCard weapon={currentWeapon} />
            ) : null}

            {displayInventoryItem && type === "ITEM" && currentItem ? (
              <ItemCard item={currentItem} />
            ) : null}

            {displayInventoryItem && type === "WEARABLE" && currentWearable ? (
              <WearableCard wearable={currentWearable} />
            ) : null}
          </fieldset>
          <ButtonPanel submitValue={`${type === "PLEASE SPECIFY" ? type : `Sell ${type}`}`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  weapons: selectWeapons,
  items: selectItems,
  wearables: selectWearables,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWearable)
