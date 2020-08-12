import React, { useState, useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Inventory(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)
  const [weaponSelect, setWeaponSelect] = useState("")
  const [wearableSelect, setWearableSelect] = useState("")
  const [itemSelect, setItemSelect] = useState("")
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
    console.log(e)
    if (window.confirm("Are you sure you want to delete this weapon? This action cannot be undone.")) {
      Axios.post("/character/deleteweapon", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteWeapon",
            value: id,
          })
          setCurrentWeapon("a")
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
          charSheetDispatch({
            type: "deleteWearable",
            value: id,
          })
          setCurrentWearable("a")
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
          charSheetDispatch({
            type: "deleteItem",
            value: id,
          })
          setCurrentItem("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const equipWeapon = (e, id, equipped) => {
    if (equipped) {
      Axios.post("/character/equipweapon", {
        CSID: props.CSID,
        id: id,
        equipped: false,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "unequipWeapon",
            value: id,
          })
          setCurrentWeapon("a")
          setWeaponSelect("")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      Axios.post("/character/equipweapon", {
        CSID: props.CSID,
        id: id,
        equipped: true,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "equipWeapon",
            value: id,
          })
          setCurrentWeapon("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const equipWearable = (e, id, equipped) => {
    if (equipped) {
      Axios.post("/character/equipwearable", {
        CSID: props.CSID,
        id: id,
        equipped: false,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "unequipWearable",
            value: id,
          })
          setCurrentWearable("a")
          setWearableSelect("")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      Axios.post("/character/equipwearable", {
        CSID: props.CSID,
        id: id,
        equipped: true,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "equipWearable",
            value: id,
          })
          setCurrentWearable("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const equipItem = (e, id, equipped) => {
    if (equipped) {
      Axios.post("/character/equipitem", {
        CSID: props.CSID,
        id: id,
        equipped: false,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "unequipItem",
            value: id,
          })
          setCurrentItem("a")
          setWearableSelect("")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      Axios.post("/character/equipitem", {
        CSID: props.CSID,
        id: id,
        equipped: true,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "equipItem",
            value: id,
          })
          setCurrentItem("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentWearable, setCurrentWearable] = useState("a")
  const [currentItem, setCurrentItem] = useState("a")

  const setWeaponHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(charSheetState.charSheet.weapons[e.target.value])
      setWeaponSelect(charSheetState.charSheet.weapons[e.target.value].name)
    } else {
      setCurrentWeapon("a")
      setWeaponSelect("")
    }
  }
  const setWearableHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWearable(charSheetState.charSheet.wearables[e.target.value])
      setWearableSelect(charSheetState.charSheet.wearables[e.target.value].name)
    } else {
      setCurrentWearable("a")
      setWearableSelect("")
    }
  }
  const setItemHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentItem(charSheetState.charSheet.items[e.target.value])
      setItemSelect(charSheetState.charSheet.wearables[e.target.value].name)
    } else {
      setCurrentItem("a")
      setItemSelect("")
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
                equipWeapon(e, currentWeapon.id, currentWeapon.equipped)
              }}
              className="hg__fake-link"
            >
              {currentWeapon.equipped ? "UNEQUIP THIS WEAPON" : "EQUIP THIS WEAPON"}
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
                equipWearable(e, currentWearable.id, currentWearable.equipped)
              }}
              className="hg__fake-link"
            >
              {currentWearable.equipped ? "UNEQUIP THIS WEARABLE" : "EQUIP THIS WEARABLE"}
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
            {currentItem.slotsReq}
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
                equipItem(e, currentItem.id, currentItem.equipped)
              }}
              className="hg__fake-link"
            >
              {currentItem.equipped ? "UNEQUIP THIS ITEM" : "EQUIP THIS ITEM"}
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
              <h4 className="item-container__subheading">
                Holsters Used: {props.holstersUsed} / {props.holstersAvailable}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>Holsters Needed</th>
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
              <h4 className="item-container__terheading">
                Item Slots Used: {props.slotsUsed} / {props.slotsAvailable}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>Slots Needed</th>
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
              <h4 className="item-container__subheading">Holster Count: {props.holstersAvailable}</h4>
              <h4 className="item-container__terheading">Item Slot Count: {props.slotsAvailable}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Body Area</th>
                    <th>Wearable Equipped</th>
                  </tr>
                </thead>
                <tbody>
                  {props.equippedWearables.map((wearable) => {
                    // if (wearable.bodyArea === "base") {
                    // } else if (wearable.bodyArea === "head") {

                    // } else if (wearable.bodyArea === "face") {

                    // } else if (wearable.bodyArea === "neck") {

                    // } else if (wearable.bodyArea === "torso") {

                    // } else if (wearable.bodyArea === "back") {

                    // } else if (wearable.bodyArea === "arms") {

                    // } else if (wearable.bodyArea === "wrists") {

                    // } else if (wearable.bodyArea === "hands") {

                    // } else if (wearable.bodyArea === "waist") {

                    // } else if (wearable.bodyArea === "legs") {

                    // } else if (wearable.bodyArea === "ankles") {

                    // } else if (wearable.bodyArea === "feet") {

                    // }
                    return (
                      <tr key={wearable.id}>
                        <td>{wearable.bodyArea}</td>
                        <td>{wearable.name}</td>
                      </tr>
                    )
                  })}
                  {/* <tr>
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
                  </tr> */}
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
              <p className="item-container__money-amount">{charSheetState.charSheet.gold} Gold</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">S.U.R.O.N.I.S.</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">Weapon Count: {charSheetState.charSheet.weapons.length}</h4>
              <p className="item-container__select-label">Select a weapon to view the details</p>
              <select onChange={(e) => setWeaponHandler(e)} value={weaponSelect} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.weapons.map((weapon, index) => {
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
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__subheading">Item Count: {charSheetState.charSheet.items.length}</h4>
              <p className="item-container__select-label">Select an item to view the details</p>
              <select onChange={(e) => setItemHandler(e)} value={itemSelect} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.items.map((item, index) => {
                  return (
                    <option value={index} key={item.id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
              {displayItem()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Wearable Count: {charSheetState.charSheet.wearables.length}</h4>
              <p className="item-container__select-label">Select a wearable to view the details</p>
              <select onChange={(e) => setWearableHandler(e)} value={wearableSelect} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.wearables.map((wearable, index) => {
                  return (
                    <option value={index} key={wearable.id}>
                      {wearable.name}
                    </option>
                  )
                })}
              </select>
              {displayWearable()}
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Add New</h2>
          <div className="cw__container">
            <button onClick={openNewWeapon}>Add New Weapon</button>
            <button onClick={openNewItem}>Add New Item</button>
            <button onClick={openNewWearable}>Add New Wearable</button>
            {/* <button onClick={openEditSuronis}>Edit Suronis Contents</button> */}
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Inventory
