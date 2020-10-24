import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function NewCharacterLog(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [title, setTitle] = useState()
  const [details, setDetails] = useState()
  const close = () => {
    props.newCharacterLogHandler(false)
  }
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const onDetailsChangeHandler = (e) => {
    setDetails(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const theID = Math.floor(Math.random() * 100000)
    Axios.post("/character/newcharacterlog", {
      id: theID,
      CSID: props.CSID,
      title: title,
      details: details,
    })
      .then(function (response) {
        props.newCharacterLogHandler(false)
        charSheetDispatch({
          type: "addNewCharacterLog",
          value: {
            id: theID,
            CSID: props.CSID,
            title: title,
            details: details,
          },
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <PopupForm formName="New Character Log" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label htmlFor="title">Mission:</label>
        <input required name="title" value={title} onChange={(e) => onTitleChangeHandler(e)} type="text" />
        <label htmlFor="details">Details:</label>
        <textarea required name="details" cols="50" rows="20" value={details} onChange={(e) => onDetailsChangeHandler(e)}></textarea>
      </fieldset>
    </PopupForm>
  )
}

export default NewCharacterLog
