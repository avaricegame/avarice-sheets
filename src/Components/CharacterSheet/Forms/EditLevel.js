import React, { useState } from "react"
import Axios from "axios"

function EditLevel(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.editLevelHandler(false)
  }
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.amount.value)
    // Axios.post("/character/takedamage", {
    //   amount: e.target.amount.value,
    //   CSID: props.CSID,
    // })
    //   .then(function (response) {
    //     props.newNoteHandler(false)
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
            <h6 className="edit-h6">Form Title</h6>
            <label>How Much?</label>
            <input name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
            {/* <form id="editLevelForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Edit Level</h6>
                  <input type="number" onChange={this.onChange} name="level" value={level} />

                  <input type="submit" className="submit-button" value="Save Level" />
                </fieldset>
              </form> */}
            <input type="submit" className="submit-button" value="Submit" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default EditLevel
