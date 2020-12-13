import React, { useContext } from "react"

import DispatchContext from "../../../DispatchContext"

function UseThing() {
  const appDispatch = useContext(DispatchContext)

  const rollHandler = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer (e.g. 4)")
    if (number) {
      alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
    }
  }
  const setCurrentThingHandler = (e) => {
    // if (e.target.value !== "a") {
    //   setCurrentAbility(newArray[e.target.value])
    // } else {
    //   setCurrentAbility("a")
    // }
  }
  const displayThing = (e) => {
    // if (currentAbility !== "a") {
    //   return (
    //     <div style={{ marginBottom: "2rem" }} key={currentAbility.id}>
    //       <div className="item-container">
    //         <h3 className="item-container__heading">{currentAbility.name}</h3>
    //         <h4 className="item-container__subheading">{currentAbility.power === "custom" || currentAbility.power === "race" ? `${currentAbility.power} Ability` : `Power ${currentAbility.power}`}</h4>
    //         <p>
    //           <strong>Details: </strong>
    //           {currentAbility.details || currentAbility.description}
    //         </p>
    //       </div>
    //     </div>
    //   )
    // }
  }
  return (
    <div className="popupform__background">
      <div className="popupform__popup popupform__popup--whitebg">
        <h3 className="popupform__heading">Use a Thing</h3>
        <div className="cw__container cw__container--popup">
          <p>Select a Thing to View the Details:</p>
          <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentThingHandler(e)}>
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
          {displayThing()}
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

export default UseThing
