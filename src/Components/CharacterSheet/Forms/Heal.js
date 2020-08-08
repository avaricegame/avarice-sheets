import React, { useState } from "react"
import Axios from "axios"

function Heal(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.healHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.amount.value)
    Axios.post("/character/healhp", {
      amount: amount,
    })
      .then(function (response) {
        props.healHandler(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Heal</h6>
            <label>How Much?</label>
            <input name="amount" value={amount} type="number" />

            <input type="submit" className="submit-button" value="Heal" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default Heal
