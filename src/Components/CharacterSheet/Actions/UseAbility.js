import React, { useState, useContext } from "react"

import Popup from "../../Popup"

import StateContext from "../../../StateContext"

function UseAbility(props) {
  const charSheetState = useContext(StateContext)
  const [currentAbility, setCurrentAbility] = useState("a")
  const startingAbilities = charSheetState.charSheet.levelUps[0].abilityTree.map((column) => {
    return column.ability ? column.ability : ""
  })
  startingAbilities.splice(1, 1)
  const newArray = charSheetState.charSheet.customAbilities.concat(props.abilityArray).concat(startingAbilities)
  const close = () => {
    props.useAbilityHandler(false)
  }
  const rollHandler = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer (e.g. 4)")
    if (number) {
      alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
    }
  }
  const setCurrentAbilityHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentAbility(newArray[e.target.value])
    } else {
      setCurrentAbility("a")
    }
  }
  const displayAbility = (e) => {
    if (currentAbility !== "a") {
      return (
        <div style={{ marginBottom: "2rem" }} key={currentAbility.id}>
          <div className="item-container">
            <h3 className="item-container__heading">{currentAbility.name}</h3>
            <h4 className="item-container__subheading">{currentAbility.power === "custom" || currentAbility.power === "race" ? `${currentAbility.power} Ability` : `Power ${currentAbility.power}`}</h4>
            <p>
              <strong>Details: </strong>
              {currentAbility.details || currentAbility.description}
            </p>
          </div>
        </div>
      )
    }
  }
  return (
    <Popup popupName="Use an Ability" popupClose={close}>
      <form>
        <fieldset>
          <label>Select an Ability to view the details:</label>
          <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentAbilityHandler(e)}>
            <option value="a"></option>
            {newArray.map((ability, index) => {
              return (
                <option value={index} key={index}>
                  {ability.name}
                </option>
              )
            })}
          </select>
          <p>Then just... do what it says... </p>
          <p>
            If you need to roll,{" "}
            <span className="click-here" onClick={rollHandler}>
              click here.
            </span>
          </p>
          {displayAbility()}
        </fieldset>
      </form>
    </Popup>
  )
}

export default UseAbility
