import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewCharacterLog() {
  const appDispatch = useContext(DispatchContext)
  const [title, setTitle] = useState()
  const [details, setDetails] = useState()

  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const onDetailsChangeHandler = (e) => {
    setDetails(e.target.value)
  }
  function formSubmit(e) {
    e.preventDefault()
    // const theID = Math.floor(Math.random() * 100000)
    // Axios.post("/character/newcharacterlog", {
    //   id: theID,
    //   CSID: props.CSID,
    //   title: title,
    //   details: details,
    // })
    //   .then(function (response) {
    //     props.newCharacterLogHandler(false)
    //     charSheetDispatch({
    //       type: "addNewCharacterLog",
    //       value: {
    //         id: theID,
    //         CSID: props.CSID,
    //         title: title,
    //         details: details,
    //       },
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">New Character Log</h3>

      <fieldset>
        <label htmlFor="title">Mission:</label>
        <input required name="title" value={title} onChange={(e) => onTitleChangeHandler(e)} type="text" />
        <label htmlFor="details">Details:</label>
        <textarea required name="details" cols="50" rows="20" value={details} onChange={(e) => onDetailsChangeHandler(e)}></textarea>
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

export default NewCharacterLog
