import React, { useState, useContext } from "react"

import DispatchContext from "../../../DispatchContext"

import StateContext from "../../../StateContext"

function UseAbility(props) {
  const appDispatch = useContext(DispatchContext)
  const charSheetState = useContext(StateContext)
  const [currentAbility, setCurrentAbility] = useState("a")
  // const startingAbilities = charSheetState.charSheet.levelUps[0].abilityTree.map((column) => {
  //   return column.ability ? column.ability : ""
  // })
  // startingAbilities.splice(1, 1)
  // const newArray = charSheetState.charSheet.customAbilities.concat(props.abilityArray).concat(startingAbilities)
  const rollHandler = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer (e.g. 4)")
    if (number) {
      alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
    }
  }
  const setCurrentAbilityHandler = (e) => {
    // if (e.target.value !== "a") {
    //   setCurrentAbility(newArray[e.target.value])
    // } else {
    //   setCurrentAbility("a")
    // }
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
    <div className="popupform__background">
      <div className="popupform__popup popupform__popup--whitebg">
        <h3 className="popupform__heading">Use an Ability</h3>
        <div className="cw__container cw__container--popup">
          <p>Select an Ability to View the Details:</p>
          <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentAbilityHandler(e)}>
            <option value="a"></option>
            {/* {newArray.map((ability, index) => {
              return (
                <option value={index} key={index}>
                  {ability.name}
                </option>
              )
            })} */}
          </select>
          <p>Then just... do what it says... </p>
          <p>
            If you need to roll,{" "}
            <span className="click-here" onClick={rollHandler}>
              click here.
            </span>
          </p>
          {displayAbility()}
        </div>
        <div className="popupform__button-panel">
          <button
            onClick={() => {
              appDispatch({ type: "hidePopupForm" })
            }}
            className="popupform__close-button popupform__close-button--fullwidth"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseAbility
