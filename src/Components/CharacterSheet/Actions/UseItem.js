import React, { useContext, useState } from "react"

import DispatchContext from "../../../DispatchContext"

function UseItem(props) {
  const appDispatch = useContext(DispatchContext)
  const [currentItem, setCurrentItem] = useState("a")
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
    <div className="popupform__background">
      <div className="popupform__popup popupform__popup--whitebg">
        <h3 className="popupform__heading">Use an Item</h3>
        <div className="cw__container cw__container--popup">
          <p>Select an Item to View the Details:</p>
          <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentItemHandler(e)}>
            <option value="a"></option>
            {/* {props.equippedItems.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item.name}
                </option>
              )
            })} */}
          </select>
          <p>Then just... do what it says...</p>
          <p>
            If you need to roll,{" "}
            <span className="click-here" onClick={rollHandler}>
              click here.
            </span>
          </p>
          {displayItem()}
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

export default UseItem
