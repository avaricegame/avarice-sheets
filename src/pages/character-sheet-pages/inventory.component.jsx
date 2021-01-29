import React from "react"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../components/card-container/card-container.component"
import { default as Button } from "../../components/custom-button/custom-button.component"

class InventoryPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Inventory" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Equipped">
              <Card heading="Weapons" subheading="Weapons Equipped: 2 / 2">
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
                    <tr>
                      <td>Weapon Name</td>
                      <td>Ranged</td>
                      <td>Speed</td>
                      <td>D6</td>
                    </tr>
                    <tr>
                      <td>Weapon Name</td>
                      <td>Melee</td>
                      <td>Reflex</td>
                      <td>D4</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <Card heading="Items" subheading="Item's Equipped: 3 / 3">
                <table>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item Name</td>
                      <td>Leptics</td>
                    </tr>
                    <tr>
                      <td>Item Name</td>
                      <td>Health Pack</td>
                    </tr>
                    <tr>
                      <td>Item Name</td>
                      <td>Food</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <Card heading="Wearables" subheading="Armour Value: 24">
                <table>
                  <thead>
                    <tr>
                      <th>Body Area</th>
                      <th>Wearable Equipped</th>
                      <th>Armour Value</th>
                      <th>Augments?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Head</td>
                      <td>name</td>
                      <td>2</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Face</td>
                      <td>name</td>
                      <td>2</td>
                      <td>speech</td>
                    </tr>

                    <tr>
                      <td>Torso</td>
                      <td>name</td>
                      <td>2</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Arms</td>
                      <td>name</td>
                      <td>2</td>
                      <td>strength</td>
                    </tr>

                    <tr>
                      <td>Hands</td>
                      <td>name</td>
                      <td>2</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Legs</td>
                      <td>name</td>
                      <td>2</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>Feet</td>
                      <td>name</td>
                      <td>2</td>
                      <td>speed</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Money">
              <Card heading="Life Credits" terheading="Current Savings: 123 LC">
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="S.U.R.O.N.I.S.">
              <Card heading="See my:">
                <select>
                  <option value="entire-inventory">Entire Inventory (12)</option>
                  <option value="weapons">Weapons (4)</option>
                  <option value="items">Items (4)</option>
                  <option value="wearables">Wearables (4)</option>
                </select>
              </Card>
              <Card heading="Weapon Name">{/* {displayWeapon()} */}</Card>
              <Card heading="Item Name">{/* {displayWeapon()} */}</Card>
              <Card heading="Wearable Name">{/* {displayWeapon()} */}</Card>
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

export default InventoryPage
