import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewNote(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const close = () => {
    props.newNoteHandler(false)
  }
  const onTitleChangeHandler = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const onContentChangeHandler = (e) => {
    console.log(e.target.value)
    setContent(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const theID = Math.floor(Math.random() * 100000)
    Axios.post("/character/newnote", {
      id: theID,
      CSID: props.CSID,
      title: title,
      content: content,
    })
      .then(function (response) {
        props.newNoteHandler(false)
        charSheetDispatch({
          type: "addNewNote",
          value: {
            id: theID,
            CSID: props.CSID,
            title: title,
            content: content,
          },
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form style={{ minWidth: "70vw" }} onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">New Note</h6>
            <label htmlFor="title">Title:</label>
            <input required name="title" value={title} onChange={(e) => onTitleChangeHandler(e)} type="text" />
            <label htmlFor="content">Content:</label>
            <textarea required name="content" cols="50" rows="10" value={content} onChange={(e) => onContentChangeHandler(e)}></textarea>
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

export default NewNote
