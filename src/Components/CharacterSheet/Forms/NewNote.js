import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewNote(props) {
  const appDispatch = useContext(DispatchContext)

  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const onTitleChangeHandler = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const onContentChangeHandler = (e) => {
    console.log(e.target.value)
    setContent(e.target.value)
  }
  function formSubmit(e) {
    e.preventDefault()
    // const theID = Math.floor(Math.random() * 100000)
    // Axios.post("/character/newnote", {
    //   id: theID,
    //   CSID: props.CSID,
    //   title: title,
    //   content: content,
    // })
    //   .then(function (response) {
    //     props.newNoteHandler(false)
    //     charSheetDispatch({
    //       type: "addNewNote",
    //       value: {
    //         id: theID,
    //         CSID: props.CSID,
    //         title: title,
    //         content: content,
    //       },
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">New Note</h3>
      <fieldset>
        <label htmlFor="title">Title:</label>
        <input required name="title" value={title} onChange={(e) => onTitleChangeHandler(e)} type="text" />
        <label htmlFor="content">Content:</label>
        <textarea required name="content" cols="50" rows="20" value={content} onChange={(e) => onContentChangeHandler(e)}></textarea>
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

export default NewNote
