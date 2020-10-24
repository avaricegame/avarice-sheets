import React from "react"

import Popup from "../../Popup"

function Roll(props) {
  const close = () => {
    props.rollHandler(false)
  }
  const twenty = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 20)}!`)
  }
  const twelve = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 12)}!`)
  }
  const ten = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 10)}!`)
  }
  const eight = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 8)}!`)
  }
  const six = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 6)}!`)
  }
  const four = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 4)}!`)
  }
  const hundred = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 100)}!`)
  }
  const sixty = () => {
    alert(`You rolled a ${Math.ceil(Math.random() * 60)}!`)
  }
  const custom = () => {
    let number = prompt("How many sided die? Please enter a positive, whole integer.")
    alert(`You rolled a ${Math.ceil(Math.random() * number)}!`)
  }

  return (
    <Popup popupName="Roll Die" popupClose={close}>
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
    </Popup>
  )
}

export default Roll
