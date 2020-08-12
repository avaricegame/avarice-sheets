import React, { useState, useContext } from "react"
import Axios from "axios"

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
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Recieve Money</h6>
            <label>How Much?</label>
            <input required name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />

            <input type="submit" className="submit-button" value={amount ? `Recieve ${amount} Gold` : "Please Specify a Value"} />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default RecieveMoney
