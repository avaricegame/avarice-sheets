import React from "react"

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
    <div className="popup-bg">
      <div className="popup">
        <div className="cw__100" style={{ backgroundColor: "whitesmoke", marginTop: ".5rem", marginBottom: ".5rem" }}>
          <h2 className="heading">Roll Die</h2>
          <div className="cw__container">
            <button onClick={four}>D4</button>
            <button onClick={six}>D6</button>
            <button onClick={eight}>D8</button>
            <button onClick={ten}>D10</button>
            <button onClick={twelve}>D12</button>
            <button onClick={twenty}>D20</button>
            <button onClick={sixty}>D60</button>
            <button onClick={hundred}>D100</button>
            <button onClick={custom}>Custom</button>
          </div>
        </div>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem", color: "whitesmoke" }}>
          Close
        </div>
      </div>
    </div>
  )
}

export default Roll
