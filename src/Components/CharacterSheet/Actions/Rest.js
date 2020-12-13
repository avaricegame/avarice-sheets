import React, { useState, useContext } from "react"

import DispatchContext from "../../../DispatchContext"

function Attack(props) {
  const appDispatch = useContext(DispatchContext)

  const [length, setLength] = useState("a")

  const formSubmit = (e) => {
    e.preventDefault()
  }

  const setLengthHandler = (e) => {
    if (e.target.value !== "a") {
      setLength()
    } else {
      setLength(e.target.value)
    }
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Take a Rest</h3>
      <fieldset>
        <label>Long Rest or Short Rest?</label>
        <select onChange={(e) => setLengthHandler(e)} className="item-container__select">
          <option value="a"></option>
          <option value="long">Long</option>
          <option value="short">Short</option>
        </select>
        <p>{length !== "a" ? `You have chosen to take a '${length}' rest. Please press 'Submit' to take the rest.` : "Please Choose an Option"}</p>
        <hr />
        <p>
          <strong>Short Rests</strong> replenish half of your energy points and lost health points.
        </p>
        <p>
          <strong>Long Rests</strong> replenish all of your energy points and lost health points.
        </p>
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
