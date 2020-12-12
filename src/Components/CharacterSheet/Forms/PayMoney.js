import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function PayMoney(props) {
  const appDispatch = useContext(DispatchContext)
  const [amount, setAmount] = useState()

  const onAmountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    // if (amount) {
    //   Axios.post("/character/paymoney", {
    //     amount: amount,
    //     CSID: props.CSID,
    //   })
    //     .then(function (response) {
    //       props.payMoneyHandler(false)
    //       charSheetDispatch({ type: "payMoney", value: amount })
    //       setAmount("")
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Pay Money</h3>
      <fieldset>
        <label htmlFor="amount">How Much?</label>
        <input required name="amount" value={amount} onChange={(e) => onAmountChangeHandler(e)} type="number" />
        <p>{amount ? `Pay ${amount} Gold` : "Please Specify a Value"}</p>
      </fieldset>
      <div className="popupform__button-panel">
        <button
          onClick={() => {
            appDispatch({ type: "hidePopupForm" })
          }}
          className="popupform__close-button"
        >
          Cancel
        </button>
        <input type="submit" className="popupform__submit-button" value="Submit" />
      </div>
    </form>
  )
}

export default PayMoney
