import React, { useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewItem(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const close = () => {
    props.newItemHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let theID = Math.floor(Math.random() * 100000)
    let item = {
      id: theID,
      CSID: props.CSID,
      name: e.target.name.value,
      type: e.target.type.value,
      requirements: e.target.requirements.value,
      slotsReq: parseInt(e.target.slotsReq.value),
      value: parseInt(e.target.value.value),
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      equipped: false,
    }
    Axios.post("/character/additem", {
      id: theID,
      CSID: props.CSID,
      name: e.target.name.value,
      type: e.target.type.value,
      requirements: e.target.requirements.value,
      slotsReq: parseInt(e.target.slotsReq.value),
      value: parseInt(e.target.value.value),
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      //equipped: e.target.equipped.value,
    })
      .then(function (response) {
        console.log(response)
        props.newItemHandler(false)
        charSheetDispatch({
          type: "addNewItem",
          value: item,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup" style={{ width: "50vw", overflowY: "scroll" }}>
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Add a New Item</h6>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required />
            <label htmlFor="description">Description:</label>
            <textarea required name="description" cols="30" rows="3"></textarea>
            <label htmlFor="slotsReq">Slots Required:</label>
            <input required type="number" name="slotsReq" />
            <label htmlFor="type">Item Type:</label>
            <select required name="type">
              <option value=""></option>
              <option value="normal">Normal</option>
              <option value="magic">Magic</option>
            </select>
            <label htmlFor="value">Value in Gold:</label>
            <input required type="number" name="value" />
            <label htmlFor="uses">Uses Per Combat:</label>
            <select required name="uses">
              <option value=""></option>
              <option value="unlimited">Unlimited</option>
            </select>
            <label htmlFor="effects">Special Effects:</label>
            <textarea name="effects" cols="30" rows="2"></textarea>
            <label htmlFor="requirements">Requirements to Use Item:</label>
            <textarea name="requirements" cols="30" rows="2"></textarea>
            <input type="submit" className="submit-button" value="Add New Item" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem" }}>
          Close Form
        </div>
      </div>
    </div>
  )
}

export default NewItem
