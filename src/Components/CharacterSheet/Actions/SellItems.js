import React, { useState } from "react"
//import Axios from "axios"

function SellItems(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.sellItemsHandler(false)
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

            <div className="sell-items item-container">
              <h6>Give Items</h6>
              <h5>Which item are you giving?</h5>
              <select>
                <option>Choose Weapon</option>
                <option>#1</option>
                <option>#2</option>
              </select>
              <select>
                <option>Choose Armour</option>
                <option>#1</option>
                <option>#2</option>
              </select>
              <select>
                <option>Choose Items</option>
                <option>#1</option>
                <option>#2</option>
              </select>

              <h5>Who are you giving it to?</h5>
              <select>
                <option>Choose Player</option>
                <option>DM</option>
                <option>Player 1</option>
                <option>Player 2</option>
                <option>Player 3</option>
              </select>

              <button>
                Give <span>(item)</span> to <span>(recipient)</span>
              </button>
            </div>
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

export default SellItems
