import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function Heal(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [amount, setAmount] = useState()
  const close = () => {
    props.healHandler(false)
  }
  const onChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (amount) {
      Axios.post("/character/healhp", {
        amount: amount,
        CSID: props.CSID,
      })
        .then(function (response) {
          //props.updateCharSheet("currentHP", amount)
          props.healHandler(false)
          charSheetDispatch({ type: "healHP", value: amount })
          setAmount("")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <PopupForm formName="Heal HP" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label>How Much?</label>
        <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
        <p>{amount ? `Heal ${amount} Hit Points` : "Please Specify a Value"}</p>
      </fieldset>
    </PopupForm>
  )
}

export default Heal
