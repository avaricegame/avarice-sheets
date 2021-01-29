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
  selectLifeCredits,
  selectWeapons,
  selectWearables,
  selectItems,
} from "../../redux/character-sheet/character-sheet.selectors"

// display components
import DisplayWeapons from "../../components/character-sheet-components/display-weapons/display-weapons.component"
import DisplayItems from "../../components/character-sheet-components/display-items/display-items.component"
import DisplayWearables from "../../components/character-sheet-components/display-wearables/display-wearables.component"

// util functions
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
  restructureEquippedWearables,
} from "./utils/inventory.utils"

class InventoryPage extends React.Component {
  render() {
    const { lifeCredits, weapons, wearables, items } = this.props

    let entireInventory = [...weapons, ...wearables, ...items]
    let equippedWeapons = findEquippedInventoryItems(weapons)
    let equippedWearables = findEquippedInventoryItems(wearables)
    let equippedItems = findEquippedInventoryItems(items)
    let armourValue = calculateArmourValueFromEquippedWearables(equippedWearables)
    let newEquippedWearables = restructureEquippedWearables(equippedWearables)

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
                <table>
                  <thead>
                    <tr>
                      <th>Weapon Name</th>
                      <th>Type</th>
                      <th>Proficiency</th>
                      <th>Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equippedWeapons.map(({ name, rangedMelee, proficiency, damage, id }) => (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{rangedMelee}</td>
                        <td>{proficiency}</td>
                        <td>{damage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <Card heading="Items" subheading={`Item's Equipped: ${equippedItems.length} / 3`}>
                <table>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Category</th>
                      <th>Uses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equippedItems.map(({ name, category, uses, id }) => (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{category}</td>
                        <td>{uses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <Card heading="Wearables" subheading={`Armour Value: ${armourValue}`}>
                <table>
                  <thead>
                    <tr>
                      <th>Body Area</th>
                      <th>Wearable Equipped</th>
                      <th>Armour Value</th>
                      <th>Augments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newEquippedWearables.map(({ name, bodyArea, armourValue, augments }) => (
                      <tr key={bodyArea}>
                        <td>{bodyArea}</td>
                        <td>{name}</td>
                        <td>{armourValue}</td>
                        <td>{augments ? "Yes" : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Money">
              <Card heading="Life Credits" terheading={`Current Savings: ${lifeCredits} LC`}>
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="S.U.R.O.N.I.S.">
              <Card heading="See my:">
                <select>
                  <option value="entire-inventory">
                    Entire Inventory ({entireInventory.length})
                  </option>
                  <option value="weapons">Weapons ({weapons.length})</option>
                  <option value="items">Items ({items.length})</option>
                  <option value="wearables">Wearables ({wearables.length})</option>
                </select>
              </Card>
              <DisplayWeapons weapons={weapons} />
              <DisplayItems items={items} />
              <DisplayWearables wearables={wearables} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Add New">
              <Button>Add New Weapon</Button>
              <Button>Add New Item</Button>
              <Button>Add New Wearable</Button>
              <Button>Sell Something</Button>
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
})

export default connect(mapStateToProps)(InventoryPage)
