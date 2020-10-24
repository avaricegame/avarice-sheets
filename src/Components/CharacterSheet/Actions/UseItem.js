import React, { useState } from "react"

import Popup from "../../Popup"

function UseItem(props) {
  const [currentItem, setCurrentItem] = useState("a")
  const close = () => {
    props.useItemHandler(false)
  }
  const rollHandler = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer (e.g. 4)")
    if (number) {
      alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
    }
  }
  const setCurrentItemHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentItem(props.equippedItems[e.target.value])
    } else {
      setCurrentItem("a")
    }
  }
  const displayItem = (e) => {
    if (currentItem !== "a") {
      return (
        <div className="item-container current-item">
          <h3 className="item-container__heading">{currentItem.name}</h3>
          <h4 className="item-container__subheading">{currentItem.name}</h4>
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
            <strong>Uses: </strong>
            {currentItem.uses}
          </p>
        </div>
      )
    }
  }
  return (
    <Popup popupName="Use an Item" popupClose={close}>
      <form>
        <fieldset>
          <label>Select an Item to View the Details:</label>
          <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentItemHandler(e)}>
            <option value="a"></option>
            {props.equippedItems.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item.name}
                </option>
              )
            })}
          </select>
          <p>Then just... do what it says...</p>
          <p>
            If you need to roll,{" "}
            <span className="click-here" onClick={rollHandler}>
              click here.
            </span>
          </p>
          {displayItem()}
        </fieldset>
      </form>
    </Popup>
  )
}

export default UseItem
