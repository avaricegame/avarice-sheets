import React, { useState } from "react"

function Inventory(props) {
  const [holstersUsed, setHolstersUsed] = useState(0)
  const [slotsUsed, setSlotsUsed] = useState(0)

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Inventory</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Equipped</h2>

          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">Holsters Used: {holstersUsed} / 3</h4>
              <table>
                <thead>
                  <tr>
                    <th>Holster Slots</th>
                    <th>Weapon Name</th>
                  </tr>
                </thead>
                <tbody>
                  {props.equippedWeapons.map((weapon) => {
                    return (
                      <tr key={weapon.id}>
                        <td>{weapon.holstersReq}</td>
                        <td>{weapon.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__terheading">Item Slots Used: {slotsUsed} / 16</h4>
              <table>
                <thead>
                  <tr>
                    <th>Holster Slots</th>
                    <th>Weapon Name</th>
                  </tr>
                </thead>
                <tbody>
                  {props.equippedItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.slotsReq}</td>
                        <td>{item.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Holster Count: 3</h4>
              <h4 className="item-container__terheading">Item Slot Count: 16</h4>
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
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Head</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Face</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Neck</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Torso</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Back</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Arms</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Wrists</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Hands</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Waist</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Legs</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Ankles</td>
                    <td>Wearable</td>
                  </tr>
                  <tr>
                    <td>Feet</td>
                    <td>Wearable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Money</h2>
          <div className="cw__container">
            <button>Pay Money</button>
            <button>Recieve Money</button>
            <div className="item-container">
              <h3 className="item-container__heading">Uni-Credits / Gold</h3>
              <h4 className="item-container__subheading">Current Savings</h4>
              <p className="item-container__money-amount">{props.charSheet.gold} Gold</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">S.U.R.O.N.I.S.</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">Weapon Count: 4</h4>
              <p className="item-container__select-label">Select a weapon to view the details</p>
              <select className="item-container__select">
                <option></option>
                {props.charSheet.weapons.map((weapon) => {
                  return <option key={weapon.id}>{weapon.name}</option>
                })}
              </select>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Wearable Count: 4</h4>
              <p className="item-container__select-label">Select a wearable to view the details</p>
              <select className="item-container__select">
                <option></option>
                {props.charSheet.wearables.map((wearable) => {
                  return <option key={wearable.id}>{wearable.name}</option>
                })}
              </select>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__subheading">Item Count: 4</h4>
              <p className="item-container__select-label">Select an item to view the details</p>
              <select className="item-container__select">
                <option></option>
                {props.charSheet.items.map((item) => {
                  return <option key={item.id}>{item.name}</option>
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Add New</h2>
          <div className="cw__container">
            <button>Add New Weapon</button>
            <button>Add New Wearable</button>
            <button>Add New Item</button>
            <button>Edit Soronus Contents</button>
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Inventory
