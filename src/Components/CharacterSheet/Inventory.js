import React, { useState } from "react"
import Axios from "axios"

function Inventory(props) {
  const openPayMoney = () => {
    props.payMoneyHandler(true)
  }
  const openRecieveMoney = () => {
    props.recieveMoneyHandler(true)
  }
  const openNewWeapon = () => {
    props.newWeaponHandler(true)
  }
  const openNewWearable = () => {
    props.newWearableHandler(true)
  }
  const openNewItem = () => {
    props.newItemHandler(true)
  }
  const openEditSuronis = () => {
    props.editSuronisHandler(true)
  }
  const deleteWeapon = (e, id) => {
    if (window.confirm("Are you sure you want to delete this weapon? This action cannot be undone.")) {
      Axios.post("/character/deleteweapon", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const deleteWearable = (e, id) => {
    if (window.confirm("Are you sure you want to delete this wearable? This action cannot be undone.")) {
      Axios.post("/character/deletewearable", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const deleteItem = (e, id) => {
    if (window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
      Axios.post("/character/deleteitem", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const equipWeapon = (e, id) => {}
  const equipWearable = (e, id) => {}
  const equipItem = (e, id) => {}

  const [holstersUsed] = useState(0)
  const [slotsUsed] = useState(0)

  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentWearable, setCurrentWearable] = useState("a")
  const [currentItem, setCurrentItem] = useState("a")

  const setWeaponHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(props.charSheet.weapons[e.target.value])
    } else {
      setCurrentWeapon("a")
    }
  }
  const setWearableHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWearable(props.charSheet.wearables[e.target.value])
    } else {
      setCurrentWearable("a")
    }
  }
  const setItemHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentItem(props.charSheet.items[e.target.value])
    } else {
      setCurrentItem("a")
    }
  }
  const displayWeapon = () => {
    if (currentWeapon !== "a") {
      return (
        <div className="current-weapon item-container">
          <h3 className="item-container__heading">{currentWeapon.name}</h3>
          <h4 className="item-container__subheading">{currentWeapon.rangedMelee}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentWeapon.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentWeapon.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentWeapon.effects}
          </p>
          <p>
            <strong>Requirements: </strong>
            {currentWeapon.requirements}
          </p>
          <p>
            <strong>Holsters Required: </strong>
            {currentWeapon.holstersReq}
          </p>
          <p>
            <strong>More Information:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Damage:</td>
                <td>{currentWeapon.damage}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{currentWeapon.type}</td>
              </tr>
              <tr>
                <td>Proficiency:</td>
                <td>{currentWeapon.proficiency}</td>
              </tr>
              <tr>
                <td>Unique:</td>
                <td>{currentWeapon.unique ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Critical:</td>
                <td>{currentWeapon.critical}</td>
              </tr>
              <tr>
                <td>Range:</td>
                <td>{currentWeapon.range}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{currentWeapon.size}</td>
              </tr>
              <tr>
                <td>Value:</td>
                <td>{currentWeapon.value} gold</td>
              </tr>
              <tr>
                <td>Uses:</td>
                <td>{currentWeapon.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipWeapon(e, currentWeapon.id)
              }}
              className="hg__fake-link"
            >
              {currentWeapon.equipped ? "EQUIP THIS WEAPON" : "UNEQUIP THIS WEAPON"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteWeapon(e, currentWeapon.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }
  const displayWearable = () => {
    if (currentWearable !== "a") {
      return (
        <div className="current-wearable item-container">
          <h3 className="item-container__heading">{currentWearable.name}</h3>
          <h4 className="item-container__subheading">Body Area: {currentWearable.bodyArea}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentWearable.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentWearable.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentWearable.effects}
          </p>
          <p>
            <strong>Requirements: </strong> {currentWearable.requirements}
          </p>
          <p>
            <strong>Holsters Given: </strong>
            {currentWearable.holsters}
          </p>
          <p>
            <strong>Slots Given: </strong>
            {currentWearable.slots}
          </p>
          <p>
            <strong>Base Stat Modifiers:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>PHY:</td>
                <td>{currentWearable.modifiers.PHY}</td>
              </tr>
              <tr>
                <td>REF:</td>
                <td>{currentWearable.modifiers.REF}</td>
              </tr>
              <tr>
                <td>INT:</td>
                <td>{currentWearable.modifiers.INT}</td>
              </tr>
              <tr>
                <td>CHA:</td>
                <td>{currentWearable.modifiers.CHA}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Skill Modifiers:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Skill 1:</td>
                <td>{currentWearable.modifiers.skill1}</td>
              </tr>
              <tr>
                <td>Skill 2:</td>
                <td>{currentWearable.modifiers.skill2}</td>
              </tr>
              <tr>
                <td>Skill 3:</td>
                <td>{currentWearable.modifiers.skill3}</td>
              </tr>
              <tr>
                <td>Skill 4:</td>
                <td>{currentWearable.modifiers.skill4}</td>
              </tr>
              <tr>
                <td>Skill 5:</td>
                <td>{currentWearable.modifiers.skill5}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>More Information: </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Type:</td>
                <td>{currentWearable.type}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{currentWearable.size}</td>
              </tr>
              <tr>
                <td>Value:</td>
                <td>{currentWearable.value}</td>
              </tr>
              <tr>
                <td>Uses:</td>
                <td>{currentWearable.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipWearable(e, currentWeapon.id)
              }}
              className="hg__fake-link"
            >
              {currentWearable.equipped ? "EQUIP THIS WEARABLE" : "UNEQUIP THIS WEARABLE"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteWearable(e, currentWearable.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }
  const displayItem = () => {
    if (currentItem !== "a") {
      return (
        <div className="item-container current-item">
          <h3 className="item-container__heading">{currentItem.name}</h3>
          <h4 className="item-container__subheading">{currentItem.name}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentItem.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentItem.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentItem.effects}
          </p>
          <p>
            <strong>Requirements: </strong>
            {currentItem.requirements}
          </p>
          <p>
            <strong>Slots Used: </strong>
            {currentItem.slots}
          </p>
          <p>
            <strong>More Information: </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Value: </td>
                <td>{currentItem.value}</td>
              </tr>
              <tr>
                <td>Uses: </td>
                <td>{currentItem.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipItem(e, currentItem.id)
              }}
              className="hg__fake-link"
            >
              {currentWeapon.equipped ? "EQUIP THIS ITEM" : "UNEQUIP THIS ITEM"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteItem(e, currentItem.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }
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
                    <th>Item Name</th>
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
            <button onClick={openPayMoney}>Pay Money</button>
            <button onClick={openRecieveMoney}>Recieve Money</button>
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
              <h4 className="item-container__subheading">Weapon Count: {props.charSheet.weapons.length}</h4>
              <p className="item-container__select-label">Select a weapon to view the details</p>
              <select onChange={(e) => setWeaponHandler(e)} className="item-container__select">
                <option value="a"></option>
                {props.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })}
              </select>
              {displayWeapon()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Wearable Count: {props.charSheet.wearables.length}</h4>
              <p className="item-container__select-label">Select a wearable to view the details</p>
              <select onChange={(e) => setWearableHandler(e)} className="item-container__select">
                <option value="a"></option>
                {props.charSheet.wearables.map((wearable, index) => {
                  return (
                    <option value={index} key={wearable.id}>
                      {wearable.name}
                    </option>
                  )
                })}
              </select>
              {displayWearable()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__subheading">Item Count: {props.charSheet.items.length}</h4>
              <p className="item-container__select-label">Select an item to view the details</p>
              <select onChange={(e) => setItemHandler(e)} className="item-container__select">
                <option value="a"></option>
                {props.charSheet.items.map((item, index) => {
                  return (
                    <option value={index} key={item.id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
              {displayItem()}
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Add New</h2>
          <div className="cw__container">
            <button onClick={openNewWeapon}>Add New Weapon</button>
            <button onClick={openNewWearable}>Add New Wearable</button>
            <button onClick={openNewItem}>Add New Item</button>
            {/* <button onClick={openEditSuronis}>Edit Suronis Contents</button> */}
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Inventory
