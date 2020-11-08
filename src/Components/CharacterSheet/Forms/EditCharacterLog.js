import React, { useContext } from "react"
//import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function EditCharacterLog() {
  const appDispatch = useContext(DispatchContext)

  function formSubmit(e) {
    e.preventDefault()
    alert("submitted the form")
  }

  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Edit Character Log</h3>

      <label>this form is under construction</label>

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

export default EditCharacterLog
