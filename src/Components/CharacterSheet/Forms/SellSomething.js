import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"

function SellItems(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const charSheetState = useContext(StateContext)
  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentWearable, setCurrentWearable] = useState("a")
  const [currentItem, setCurrentItem] = useState("a")

  const formSubmit = (e) => {
    e.preventDefault()
  }

  const onWeaponChangeHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(props.charSheet.weapons[e.target.value])
    } else {
      setCurrentWeapon("a")
    }
  }
  const onWearableChangeHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWearable(props.charSheet.wearables[e.target.value])
    } else {
      setCurrentWearable("a")
    }
  }
  const onItemChangeHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentItem(props.charSheet.items[e.target.value])
    } else {
      setCurrentItem("a")
    }
  }
  const weaponSubmitHandler = (e) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to sell ${currentWeapon.name} for ${currentWeapon.value} Gold? This action cannot be undone.`)) {
      Axios.post("/character/deleteweapon", {
        CSID: props.CSID,
        id: currentWeapon.id,
      })
        .then(function (response) {
          console.log(response)
          Axios.post("/character/recievemoney", {
            amount: currentWeapon.value,
            CSID: props.CSID,
          })
            .then(function (response) {
              console.log(response)
              //props.sellItemsHandler(false)
              charSheetDispatch({
                type: "deleteWeapon",
                value: currentWeapon.id,
              })
              charSheetDispatch({ type: "recieveMoney", value: currentWeapon.value })
              setCurrentWeapon("a")
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const itemSubmitHandler = (e) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to sell ${currentItem.name} for ${currentItem.value} Gold? This action cannot be undone.`)) {
      Axios.post("/character/deleteitem", {
        CSID: props.CSID,
        id: currentItem.id,
      })
        .then(function (response) {
          console.log(response)
          Axios.post("/character/recievemoney", {
            amount: currentItem.value,
            CSID: props.CSID,
          })
            .then(function (response) {
              console.log(response)
              //props.sellItemsHandler(false)
              charSheetDispatch({
                type: "deleteItem",
                value: currentItem.id,
              })
              charSheetDispatch({ type: "recieveMoney", value: currentItem.value })
              setCurrentItem("a")
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const wearableSubmitHandler = (e) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to sell this ${currentWearable.name} for ${currentWearable.value} Gold? This action cannot be undone.`)) {
      Axios.post("/character/deletewearable", {
        CSID: props.CSID,
        id: currentWearable.id,
      })
        .then(function (response) {
          console.log(response)
          Axios.post("/character/recievemoney", {
            amount: currentWearable.value,
            CSID: props.CSID,
          })
            .then(function (response) {
              console.log(response)
              //props.sellItemsHandler(false)
              charSheetDispatch({
                type: "deleteWearable",
                value: currentWearable.id,
              })
              charSheetDispatch({ type: "recieveMoney", value: currentWearable.value })
              setCurrentWearable("a")
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Sell Something</h3>
      <div>
        <form onSubmit={(e) => weaponSubmitHandler(e)} style={{ marginBottom: "-1rem" }}>
          <fieldset>
            <label>Sell a Weapon:</label>
            <select onChange={(e) => onWeaponChangeHandler(e)}>
              <option value="a"></option>
              {charSheetState.charSheet.weapons.map((weapon, index) => {
                return (
                  <option value={index} key={weapon.id}>
                    {weapon.name}
                  </option>
                )
              })}
            </select>
            <input type="submit" className="popupform__submit-button popupform__submit-button--adjustwidth" value={currentWeapon !== "a" ? `Sell ${currentWeapon.name} for ${currentWeapon.value} Gold` : "Please Choose a Weapon to Sell"} />
          </fieldset>
        </form>
        <form onSubmit={(e) => itemSubmitHandler(e)} style={{ marginBottom: "-1rem" }}>
          <fieldset>
            <label>Sell an Item:</label>
            <select onChange={(e) => onItemChangeHandler(e)}>
              <option value="a"></option>
              {charSheetState.charSheet.items.map((item, index) => {
                return (
                  <option value={index} key={item.id}>
                    {item.name}
                  </option>
                )
              })}
            </select>
            <input type="submit" className="popupform__submit-button popupform__submit-button--adjustwidth" value={currentItem !== "a" ? `Sell ${currentItem.name} for ${currentItem.value} Gold` : "Please Choose an Item to Sell"} />
          </fieldset>
        </form>
        <form onSubmit={(e) => wearableSubmitHandler(e)}>
          <fieldset>
            <label>Sell a Wearable:</label>
            <select onChange={(e) => onWearableChangeHandler(e)}>
              <option value="a"></option>
              {charSheetState.charSheet.wearables.map((wearable, index) => {
                return (
                  <option value={index} key={wearable.id}>
                    {wearable.name}
                  </option>
                )
              })}
            </select>
            <input type="submit" className="popupform__submit-button popupform__submit-button--adjustwidth" value={currentWearable !== "a" ? `Sell ${currentWearable.name} for ${currentWearable.value} Gold` : "Please Choose a Wearable to Sell"} />
          </fieldset>
        </form>
        <form onSubmit={(e) => wearableSubmitHandler(e)}>
          <fieldset>
            <label>Sell a Thing:</label>
            <select onChange={(e) => onWearableChangeHandler(e)}>
              <option value="a"></option>
              {charSheetState.charSheet.wearables.map((wearable, index) => {
                return (
                  <option value={index} key={wearable.id}>
                    {wearable.name}
                  </option>
                )
              })}
            </select>
            <input type="submit" className="popupform__submit-button popupform__submit-button--adjustwidth" value={currentWearable !== "a" ? `Sell ${currentWearable.name} for ${currentWearable.value} Gold` : "Please Choose a Thing to Sell"} />
          </fieldset>
        </form>
      </div>
      <div className="popupform__button-panel">
        <button
          onClick={() => {
            charSheetDispatch({ type: "hidePopupForm" })
          }}
          className="popupform__close-button"
        >
          Cancel
        </button>
        <input type="submit" className="popupform__submit-button" value="Submit" />
      </div>
    </form>
  )
}

export default SellItems
