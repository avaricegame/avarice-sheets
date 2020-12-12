import React, { useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewItem(props) {
  const appDispatch = useContext(DispatchContext)

  const formSubmit = (e) => {
    e.preventDefault()

    // let theID = Math.floor(Math.random() * 100000)
    // let item = {
    //   id: theID,
    //   CSID: props.CSID,
    //   name: e.target.name.value,
    //   type: e.target.type.value,
    //   requirements: e.target.requirements.value,
    //   slotsReq: parseInt(e.target.slotsReq.value),
    //   value: parseInt(e.target.value.value),
    //   uses: e.target.uses.value,
    //   effects: e.target.effects.value,
    //   description: e.target.description.value,
    //   equipped: false,
    // }
    // Axios.post("/character/additem", {
    //   id: theID,
    //   CSID: props.CSID,
    //   name: e.target.name.value,
    //   type: e.target.type.value,
    //   requirements: e.target.requirements.value,
    //   slotsReq: parseInt(e.target.slotsReq.value),
    //   value: parseInt(e.target.value.value),
    //   uses: e.target.uses.value,
    //   effects: e.target.effects.value,
    //   description: e.target.description.value,
    //   //equipped: e.target.equipped.value,
    // })
    //   .then(function (response) {
    //     console.log(response)
    //     props.newItemHandler(false)
    //     charSheetDispatch({
    //       type: "addNewItem",
    //       value: item,
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Add a New Item</h3>
      <fieldset>
        <label htmlFor="name">Item Name:</label>
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

export default NewItem
