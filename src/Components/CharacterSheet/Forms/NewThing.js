import React, { useContext } from "react"
//import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewThing() {
  const appDispatch = useContext(DispatchContext)

  const formSubmit = (e) => {
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
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Add a New Thing</h3>
      <fieldset>
        <label>this form is under construction</label>
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

export default NewThing
