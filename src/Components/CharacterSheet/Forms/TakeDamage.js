import React, { useState } from "react"
import Axios from "axios"

function TakeDamage(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.takeDamageHandler(false)
  }
  const onChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (amount) {
      Axios.post("/character/takedamage", {
        amount: e.target.amount.value,
        CSID: props.CSID,
      })
        .then(function (response) {
          props.takeDamageHandler(false)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Take Damage</h6>
            <label>How Much?</label>
            <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />

            <input type="submit" className="submit-button" value={amount ? `Take ${amount} Damage` : "Please Specify a Value"} />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default TakeDamage
