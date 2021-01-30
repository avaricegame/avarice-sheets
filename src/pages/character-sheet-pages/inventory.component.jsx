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
import DisplayEquippedWeapons from "../../components/shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"
import DisplayEquippedItems from "../../components/shared-sheets-components/display-equipped-items/display-equipped-items.component"

// util functions
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
  restructureEquippedWearables,
} from "./utils/inventory.utils"

class InventoryPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entireInventory: [],
      equippedWeapons: [],
      equippedWearables: [],
      equippedItems: [],
      armourValue: null,
      newEquippedWearables: [],
    }
  }

  componentDidMount() {
    const { weapons, wearables, items } = this.props
    this.setState({
      entireInventory: [...weapons, ...wearables, ...items],
      equippedWeapons: findEquippedInventoryItems(weapons),
      equippedWearables: findEquippedInventoryItems(wearables),
      equippedItems: findEquippedInventoryItems(items),
      armourValue: calculateArmourValueFromEquippedWearables(findEquippedInventoryItems(wearables)),
      newEquippedWearables: restructureEquippedWearables(findEquippedInventoryItems(wearables)),
    })
  }

  componentWillUnmount() {
    this.setState({
      entireInventory: [],
      equippedWeapons: [],
      equippedWearables: [],
      equippedItems: [],
      armourValue: null,
      newEquippedWearables: [],
    })
  }

  render() {
    const { lifeCredits, weapons, wearables, items } = this.props
    const {
      entireInventory,
      equippedWeapons,
      equippedItems,
      armourValue,
      newEquippedWearables,
    } = this.state

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
                <DisplayEquippedWeapons equippedWeapons={equippedWeapons} />
              </Card>

              <Card heading="Items" subheading={`Item's Equipped: ${equippedItems.length} / 3`}>
                <DisplayEquippedItems equippedItems={equippedItems} />
              </Card>

              <Card heading="Wearables" subheading={`Armour Value: ${armourValue}`}>
                {newEquippedWearables.map(({ name, bodyArea, armourValue, augments }) => (
                  <div key={bodyArea}>
                    <p>
                      <strong>
                        {bodyArea}: {name}
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <em>Armour Value:</em> {armourValue}
                      </li>
                      <li>
                        <em>Augments:</em> {augments}
                      </li>
                    </ul>
                  </div>
                ))}
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
