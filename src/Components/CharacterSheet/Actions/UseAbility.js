import React, { useState } from "react"

function UseAbility(props) {
  const [currentAbility, setCurrentAbility] = useState("a")
  const newArray = props.charSheet.customAbilities.concat(props.abilityArray)
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
            <h4 className="item-container__subheading">{currentAbility.power === "custom" ? `${currentAbility.power} Ability` : `Power ${currentAbility.power}`}</h4>
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
    <div className="popup-bg">
      <div className="popup" style={{ minWidth: "50vw" }}>
        <form>
          <fieldset>
            <h6 className="edit-h6">Use Ability</h6>
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
            <p style={{ marginBottom: "2rem" }}>
              Then just... do what it says... If you need to roll,{" "}
              <span className="click-here" onClick={rollHandler}>
                click here.
              </span>
            </p>
            {displayAbility()}
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default UseAbility
