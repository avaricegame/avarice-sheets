import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function TakeDamage(props) {
  const charSheetDispatch = useContext(DispatchContext)
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
          charSheetDispatch({ type: "takeDamage", value: amount })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <PopupForm formName="Take Damage" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label>How Much?</label>
        <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
        <p>{amount ? `Take ${amount} Damage` : "Please Specify a Value"}</p>
      </fieldset>
    </PopupForm>
  )
}

export default TakeDamage
