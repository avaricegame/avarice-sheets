import React, { useContext } from "react"

import DispatchContext from "../DispatchContext"

function NewCharacterLog() {
  const appDispatch = useContext(DispatchContext)

  function formSubmit(e) {
    e.preventDefault()
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Default Popup Form</h3>

      <label>No form has been assigned to this button.</label>

      {/* onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "newNote" })
                }} */}

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

export default NewCharacterLog
