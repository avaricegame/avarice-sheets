import React, { useContext } from "react"

import DispatchContext from "../../../DispatchContext"

function NewCampaignSheet() {
  const appDispatch = useContext(DispatchContext)

  function formSubmit(e) {
    e.preventDefault()
    alert("submitted the form")
  }

  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">New Campaign Sheet</h3>

      <label>New Campaign Sheet Form Under Construction</label>

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

export default NewCampaignSheet
