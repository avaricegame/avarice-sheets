import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function RecieveMoney(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [amount, setAmount] = useState()
  const close = () => {
    props.recieveMoneyHandler(false)
  }
  const onChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (amount) {
      Axios.post("/character/recievemoney", {
        amount: amount,
        CSID: props.CSID,
      })
        .then(function (response) {
          props.recieveMoneyHandler(false)
          charSheetDispatch({ type: "recieveMoney", value: amount })
          setAmount("")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <PopupForm formName="Recieve Money" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label>How Much?</label>
        <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
        <p>{amount ? `Recieve ${amount} Gold` : "Please Specify a Value"}</p>
      </fieldset>
    </PopupForm>
  )
}

export default RecieveMoney
