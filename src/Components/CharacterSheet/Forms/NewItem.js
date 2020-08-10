import React from "react"
import Axios from "axios"

function NewItem(props) {
  const close = () => {
    props.newItemHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    Axios.post("/character/additem", {
      id: Math.floor(Math.random() * 100000),
      CSID: props.CSID,
      name: e.target.name.value,
      type: e.target.type.value,
      requirements: e.target.requirements.value,
      slotsReq: e.target.slotsReq.value,
      value: e.target.value.value,
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      //equipped: e.target.equipped.value,
    })
      .then(function (response) {
        console.log(response)
        props.newItemHandler(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Add a New Item</h6>

            <input type="submit" className="submit-button" value="Add New Item" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default NewItem
