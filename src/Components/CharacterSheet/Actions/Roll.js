import React, { useContext } from "react"

import DispatchContext from "../../../DispatchContext"

function Roll() {
  const appDispatch = useContext(DispatchContext)

  const twenty = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 20)}`)
  }
  const twelve = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 12)}`)
  }
  const ten = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 10)}`)
  }
  const eight = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 8)}`)
  }
  const six = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 6)}`)
  }
  const four = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 4)}`)
  }
  const hundred = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 100)}`)
  }
  const sixty = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 60)}`)
  }
  const custom = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer.")
    if (number) {
      alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
    }
  }

  return (
    <div className="popupform__background">
      <div className="popupform__popup popupform__popup--whitebg">
        <h3 className="popupform__heading">Roll Dice</h3>
        <div className="cw__container cw__container--popup">
          <div className="cw__container">
            <button className="button" onClick={four}>
              D4
            </button>
            <button className="button" onClick={six}>
              D6
            </button>
            <button className="button" onClick={eight}>
              D8
            </button>
            <button className="button" onClick={ten}>
              D10
            </button>
            <button className="button" onClick={twelve}>
              D12
            </button>
            <button className="button" onClick={twenty}>
              D20
            </button>
            <button className="button" onClick={sixty}>
              D60
            </button>
            <button className="button" onClick={hundred}>
              D100
            </button>
            <button className="button" onClick={custom}>
              Custom
            </button>
          </div>
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

export default Roll
