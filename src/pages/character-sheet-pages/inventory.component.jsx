import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../components/card-container/card-container.component"
import { default as Button } from "../../components/custom-button/custom-button.component"

import {
  selectCharacterName,
  selectLifeCredits,
  selectWeapons,
  selectWearables,
  selectItems,
} from "../../redux/character-sheet/character-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// display components
import DisplayWeapons from "../../components/shared-sheets-components/display-weapons/display-weapons.component"
import DisplayItems from "../../components/shared-sheets-components/display-items/display-items.component"
import DisplayWearables from "../../components/shared-sheets-components/display-wearables/display-wearables.component"
import DisplayEquippedWeapons from "../../components/shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"
import DisplayEquippedItems from "../../components/shared-sheets-components/display-equipped-items/display-equipped-items.component"

// util functions
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
  restructureEquippedWearables,
} from "./utils/inventory.utils"
import DisplayEquippedWearables from "../../components/shared-sheets-components/display-equipped-wearables/display-equipped-wearables.component"

class InventoryPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayWeapons: true,
      displayItems: true,
      displayWearables: true,
    }

    this.handleSURONISSelect = this.handleSURONISSelect.bind(this)
  }

  componentDidMount() {
    const { characterName } = this.props
    document.title = `Inventory | ${characterName} | Avarice Sheets`
  }

  handleSURONISSelect(e) {
    if (e.target.value === "WEAPONS") {
      this.setState({
        displayWeapons: true,
        displayItems: false,
        displayWearables: false,
      })
    } else if (e.target.value === "WEARABLES") {
      this.setState({
        displayWeapons: false,
        displayItems: false,
        displayWearables: true,
      })
    } else if (e.target.value === "ITEMS") {
      this.setState({
        displayWeapons: false,
        displayItems: true,
        displayWearables: false,
      })
    } else if (e.target.value === "ALL") {
      this.setState({
        displayWeapons: true,
        displayItems: true,
        displayWearables: true,
      })
    } else {
      this.setState({
        displayWeapons: false,
        displayItems: false,
        displayWearables: false,
      })
    }
  }

  render() {
    const { lifeCredits, weapons, wearables, items, togglePopupForm } = this.props
    const { displayItems, displayWeapons, displayWearables } = this.state

    const entireInventory = [...weapons, ...wearables, ...items]
    const equippedWeapons = findEquippedInventoryItems(weapons)
    const equippedWearables = findEquippedInventoryItems(wearables)
    const equippedItems = findEquippedInventoryItems(items)
    const armourValue = calculateArmourValueFromEquippedWearables(equippedWearables)
    const newEquippedWearables = restructureEquippedWearables(equippedWearables)

    return (
      <>
        <SheetsHeading heading="Inventory" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Equipped">
              <Card
                heading="Weapons"
                subheading={`Weapons Equipped: ${equippedWeapons.length} / 2`}
              >
                <DisplayEquippedWeapons unequip equippedWeapons={equippedWeapons} />
              </Card>

              <Card heading="Items" subheading={`Item's Equipped: ${equippedItems.length} / 3`}>
                <DisplayEquippedItems unequip equippedItems={equippedItems} />
              </Card>

              <Card heading="Wearables" subheading={`Armour Value: ${armourValue}`}>
                <DisplayEquippedWearables unequip newEquippedWearables={newEquippedWearables} />
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Money">
              <Card heading="Life Credits" terheading={`Current Savings: ${lifeCredits} LC`}>
                <Button onClick={() => togglePopupForm(PopupFormTypes.PAY_OR_RECIEVE_MONEY)}>
                  Pay Money
                </Button>
                <Button onClick={() => togglePopupForm(PopupFormTypes.PAY_OR_RECIEVE_MONEY)}>
                  Recieve Money
                </Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="S.U.R.O.N.I.S.">
              <Card heading="See my:">
                <select onChange={this.handleSURONISSelect}>
                  <option value="ALL">Entire Inventory ({entireInventory.length})</option>
                  <option value="WEAPONS">Weapons ({weapons.length})</option>
                  <option value="ITEMS">Items ({items.length})</option>
                  <option value="WEARABLES">Wearables ({wearables.length})</option>
                  <option value="NONE">None</option>
                </select>
              </Card>
              {displayWeapons ? (
                <DisplayWeapons equip edit weapons={weapons} whatToEdit="weaponToEdit" />
              ) : null}
              {displayItems ? (
                <DisplayItems equip edit items={items} whatToEdit="itemToEdit" />
              ) : null}
              {displayWearables ? (
                <DisplayWearables equip edit wearables={wearables} whatToEdit="wearableToEdit" />
              ) : null}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Add New">
              <Button onClick={() => togglePopupForm(PopupFormTypes.ADD_A_NEW_WEAPON)}>
                Add New Weapon
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.ADD_A_NEW_ITEM)}>
                Add New Item
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.ADD_A_NEW_WEARABLE)}>
                Add New Wearable
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.SELL_INVENTORY_ITEM)}>
                Sell Something
              </Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  lifeCredits: selectLifeCredits,
  weapons: selectWeapons,
  wearables: selectWearables,
  items: selectItems,
  characterName: selectCharacterName,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPage)
