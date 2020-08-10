import React, { useState } from "react"
import Axios from "axios"

function NewCharacterLog(props) {
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
    Axios.post("/character/newcharacterlog", {
      id: Math.floor(Math.random() * 100000),
      CSID: props.CSID,
      title: title,
      details: details,
    })
      .then(function (response) {
        props.newCharacterLogHandler(false)
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
            <h6 className="edit-h6">New Character Log</h6>
            <label htmlFor="title">Mission:</label>
            <input required name="title" value={title} onChange={(e) => onTitleChangeHandler(e)} type="text" />
            <label htmlFor="details">Details:</label>
            <textarea required name="details" cols="50" rows="10" value={details} onChange={(e) => onDetailsChangeHandler(e)}></textarea>
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

export default NewCharacterLog
