import React, { useState, useEffect, useContext } from "react"

import StateContext from "../../../StateContext"
import DispatchContext from "../../../DispatchContext"

function Attack(props) {
  const charSheetState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentProficiency, setCurrentProficiency] = useState("a")
  const [proficiency1, setProficiency1] = useState()
  // useEffect(() => {
  //   setProficiency1(charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].proficiency[0].value)
  // }, [charSheetState.charSheet])
  const setWeaponHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(props.equippedWeapons[e.target.value])
      setCurrentProficiencyHandler(props.equippedWeapons[e.target.value])
    } else {
      setCurrentWeapon("a")
    }
  }
  const setCurrentProficiencyHandler = (weapon) => {
    if (weapon.proficiency === "Proficiency 1") {
      setCurrentProficiency(proficiency1)
    }
  }
  const displayWeapon = () => {
    if (currentWeapon !== "a") {
      return (
        <>
          <div className="current-weapon item-container">
            <h3 className="item-container__heading">{currentWeapon.name}</h3>
            <h4 className="item-container__subheading">{currentWeapon.rangedMelee}</h4>
            <p>
              <strong>Description: </strong>
              {currentWeapon.description}
            </p>
            <p>
              <strong>Range: </strong>
              {currentWeapon.range}
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
              <strong>Damage: </strong>
              {currentWeapon.damage}
            </p>
            <p>
              <strong>Proficiency: </strong>
              {currentWeapon.proficiency}
            </p>
          </div>
          <p>
            <strong>{`Your proficiency value for ${currentWeapon.proficiency} is ${currentProficiency}.`}</strong>
          </p>
        </>
      )
    }
  }
  const onAttackSubmit = (e) => {
    if (currentWeapon !== "a") {
      if (currentWeapon.damage === "D4") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 4)
          alert(`You rolled a D4 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else if (currentWeapon.damage === "D6") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 6)
          alert(`You rolled a D6 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else if (currentWeapon.damage === "D8") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 8)
          alert(`You rolled a D8 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else if (currentWeapon.damage === "D10") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 10)
          alert(`You rolled a D10 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else if (currentWeapon.damage === "D12") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 12)
          alert(`You rolled a D12 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else if (currentWeapon.damage === "D20") {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let num = Math.ceil(Math.random() * 20)
          alert(`You rolled a D20 and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      } else {
        if (window.confirm(`Your D20 roll was ${Math.ceil(Math.random() * 20)}. Did you hit? Click 'OK' to proceed, and 'Cancel' if your attack was unsuccessful.`)) {
          let number = prompt("How many sided die do you need to roll for damage? Please enter a postive, whole integer.")
          let num = Math.ceil(Math.random() * number)
          alert(`You rolled a D${number} and got a ${num}! Your proficiency (${currentWeapon.proficiency}) value is ${currentProficiency}. This brings your total damage done to ${currentProficiency ? num * currentProficiency : num}`)
        }
      }
    }
  }
  return (
    <form className="popupform__form" onSubmit={onAttackSubmit}>
      <h3 className="popupform__heading">Attack</h3>
      <fieldset>
        <label>Select a Weapon to Attack With:</label>
        <select onChange={(e) => setWeaponHandler(e)} className="item-container__select">
          <option value="a"></option>
          {/* {props.equippedWeapons.map((weapon, index) => {
            return (
              <option value={index} key={weapon.id}>
                {weapon.name}
              </option>
            )
          })} */}
        </select>
        {displayWeapon()}
        <p>{currentWeapon !== "a" ? `You have chosen '${currentWeapon.name}.' Please press 'Submit' to attack.` : "Please Choose a Weapon"}</p>
      </fieldset>
      <div className="popupform__button-panel">
        <button
          onClick={() => {
            appDispatch({ type: "hidePopupForm" })
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

export default Attack
