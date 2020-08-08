import React from "react"

function Roll(props) {
  const close = () => {
    props.rollHandler(false)
  }
  const twenty = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 20)}!`)
  }
  const twelve = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 12)}!`)
  }
  const ten = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 10)}!`)
  }
  const eight = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 8)}!`)
  }
  const six = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 6)}!`)
  }
  const four = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 4)}!`)
  }
  const hundred = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 100)}!`)
  }
  const sixty = () => {
    alert(`You rolled a ${Math.floor(Math.random() * 60)}!`)
  }
  const custom = () => {
    let number = prompt("How many sides?")
    alert(`You rolled a ${Math.floor(Math.random() * number)}!`)
  }

  return (
    <div className="popup-bg">
      <div className="popup" style={{ backgroundColor: "whitesmoke" }}>
        <div className="cw__100" style={{ width: "95%", marginTop: "1rem" }}>
          <h2 className="heading">Common Rolls</h2>
          <div className="cw__container">
            <button onClick={twenty}>D20</button>
            <button onClick={twelve}>D12</button>
            <button onClick={ten}>D10</button>
            <button onClick={eight}>D8</button>
            <button onClick={six}>D6</button>
            <button onClick={four}>D4</button>
          </div>
          <h2 className="heading">Uncommon Rolls</h2>
          <div className="cw__container">
            <button onClick={sixty}>D60</button>
            <button onClick={hundred}>D100</button>
            <button onClick={custom}>Roll a Custom Die</button>
          </div>
        </div>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default Roll
