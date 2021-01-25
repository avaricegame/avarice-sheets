import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class InventoryPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Inventory" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Equipped">
              <Card heading="Weapons" subheading="Holsters Used: 2 / 6">
                <table>
                  <thead>
                    <tr>
                      <th>Holsters Needed</th>
                      <th>Weapon Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {props.equippedWeapons.map((weapon) => {
                    return (
                      <tr key={weapon.id}>
                        <td>{weapon.holstersReq}</td>
                        <td>{weapon.name}</td>
                      </tr>
                    )
                  })} */}
                  </tbody>
                </table>
              </Card>

              <Card heading="Items" terheading="Item Slots Used: 12 / 24">
                <table>
                  <thead>
                    <tr>
                      <th>Slots Needed</th>
                      <th>Item Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {props.equippedItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.slotsReq}</td>
                        <td>{item.name}</td>
                      </tr>
                    )
                  })} */}
                  </tbody>
                </table>
              </Card>

              <Card heading="Wearables" subheading="Holster Count: 24" terheading="Slot Count: 24">
                <table>
                  <thead>
                    <tr>
                      <th>Body Area</th>
                      <th>Wearable Equipped</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Base</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Head</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Face</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Torso</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Back</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Arms</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Wrists</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Hands</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Waist</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Legs</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Ankles</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Feet</td>
                      <td>name</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Money">
              <Card heading="Life Credits" terheading="Current Savings: 123 LC">
                <p className="item-container__money-amount">123 LC</p>
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="S.U.R.O.N.I.S.">
              <Card heading="Weapons" subheading="Weapon Count: 4">
                <p className="item-container__select-label">Select a weapon to view the details</p>
                <select className="item-container__select">
                  <option value="a"></option>
                  {/* {charSheetState.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })} */}
                </select>
                {/* {displayWeapon()} */}
                <Card heading="Weapon Name">Weapon</Card>
              </Card>

              <Card heading="Items" subheading="Item Count: 4">
                <p className="item-container__select-label">Select an item to view the details</p>
                <select className="item-container__select">
                  <option value="a"></option>
                  {/* {charSheetState.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })} */}
                </select>
                {/* {displayWeapon()} */}
                <Card heading="Item Name">Item</Card>
              </Card>

              <Card heading="Wearables" subheading="Wearables Count: 4">
                <p className="item-container__select-label">
                  Select a wearable to view the details
                </p>
                <select className="item-container__select">
                  <option value="a"></option>
                  {/* {charSheetState.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })} */}
                </select>
                {/* {displayWeapon()} */}
                <Card heading="Wearable Name">Wearable</Card>
              </Card>

              <Card heading="Things" subheading="Things Count: 4">
                <p className="item-container__select-label">Select a thing to view the details</p>
                <select className="item-container__select">
                  <option value="a"></option>
                  {/* {charSheetState.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })} */}
                </select>
                {/* {displayWeapon()} */}
                <Card heading="Thing Name">Thing</Card>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Add New">
              <Button>Add New Weapon</Button>
              <Button>Add New Item</Button>
              <Button>Add New Wearable</Button>
              <Button>Add New Thing</Button>
              <Button>Sell Something</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default InventoryPage
