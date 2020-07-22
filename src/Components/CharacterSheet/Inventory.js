import React from "react"

function Inventory() {
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
              <h4 className="item-container__subheading">Holsters Used: 3 / 3</h4>
              <table>
                <thead>
                  <tr>
                    <th>Holster Slots</th>
                    <th>Weapon Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>Weapon 1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Weapon 2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__terheading">Item Slots Used: 11 / 16</h4>
              <table>
                <thead>
                  <tr>
                    <th>Holster Slots</th>
                    <th>Weapon Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>Item 1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Item 2</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Item 3</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Item 4</td>
                  </tr>
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
            <button>Send and Recieve Money</button>
            <div className="item-container">
              <h3 className="item-container__heading">Uni-Credits / Gold</h3>
              <h4 className="item-container__subheading">Current Savings</h4>
              <p className="item-container__money-amount">30 Gold</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">S.U.R.O.I.S.</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">Weapon Count: 4</h4>
              <p className="item-container__select-label">Select a weapon to view the details</p>
              <select className="item-container__select">
                <option></option>
                <option>Weapon</option>
                <option>WEapon</option>
                <option>WEApon</option>
              </select>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Wearable Count: 4</h4>
              <p className="item-container__select-label">Select a wearable to view the details</p>
              <select className="item-container__select">
                <option></option>
                <option>Wearable</option>
                <option>Wearable</option>
                <option>Wearable</option>
              </select>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__subheading">Item Count: 4</h4>
              <p className="item-container__select-label">Select an item to view the details</p>
              <select className="item-container__select">
                <option></option>
                <option>Item</option>
                <option>Item</option>
                <option>Item</option>
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
