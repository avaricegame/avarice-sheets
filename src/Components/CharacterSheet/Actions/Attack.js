import React, { useState, useEffect } from "react"

function Attack(props) {
  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentProficiency, setCurrentProficiency] = useState("a")
  const [proficiency1, setProficiency1] = useState()
  useEffect(() => {
    setProficiency1(props.charSheet.levelUps[props.charSheet.levelUps.length - 1].proficiency[0].value)
  }, [props.charSheet])
  const close = () => {
    props.attackHandler(false)
  }
  const setWeaponHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(props.charSheet.weapons[e.target.value])
      setCurrentProficiencyHandler(props.charSheet.weapons[e.target.value])
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
    <div className="popup-bg">
      <div className="popup" style={{ width: "60vw" }}>
        <form>
          <fieldset>
            <h6 className="edit-h6">Attack</h6>
            <label>Select a Weapon to Attack With:</label>
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
            <input
              onClick={(e) => {
                onAttackSubmit(e)
              }}
              type="submit"
              className="submit-button"
              value={currentWeapon !== "a" ? `Attack With ${currentWeapon.name}` : "Please Choose a Weapon"}
            />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default Attack
