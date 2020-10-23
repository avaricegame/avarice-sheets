import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function PayMoney(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [amount, setAmount] = useState()
  const close = () => {
    props.payMoneyHandler(false)
  }
  const onChangeHandler = (e) => {
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (amount) {
      Axios.post("/character/paymoney", {
        amount: amount,
        CSID: props.CSID,
      })
        .then(function (response) {
          props.payMoneyHandler(false)
          charSheetDispatch({ type: "payMoney", value: amount })
          setAmount("")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <PopupForm formName="Pay Money" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label>How Much?</label>
        <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
        <p>{amount ? `Pay ${amount} Gold` : "Please Specify a Value"}</p>
      </fieldset>
    </PopupForm>
  )
}

export default PayMoney
