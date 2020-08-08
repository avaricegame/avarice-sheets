import React, { useState } from "react"
import Axios from "axios"

function Attack(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.attackHandler(false)
  }
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(amount)
    // Axios.post("/character/UseSkill", {
    //   amount: amount,
    //   CSID: props.CSID,
    // })
    //   .then(function (response) {
    //     props.payMoneyHandler(false)
    //     setAmount("")
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Pay Money</h6>
            <label>How Much?</label>
            <input name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />

            <input type="submit" className="submit-button" value={`submit`} />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default Attack
