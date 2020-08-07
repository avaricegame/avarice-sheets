import React, { useState } from "react"

function Notes(props) {
  const [noteIndex, setNoteIndex] = useState(0)

  const openNoteHandler = (index, e) => {
    setNoteIndex(index)
  }

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Notes</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Notes</h2>
          <div className="cw__container">
            <hr className="horizontal-rule" />
            {/* {props.charSheet.notes.map((note, index) => {
              return (
                <button onClick={(e) => openNoteHandler(index, e)} key={note.id}>
                  {note.title}
                </button>
              )
            })} */}
            <hr className="horizontal-rule" />
            <button>Create New</button>
          </div>
        </div>

        <div className="cw__75">
          <h2 className="heading">Note Content</h2>
          <div className="cw__container">
            <button className="edit-note-button">Edit Note</button>
            {/* <h3 className="note-title">{props.charSheet.notes[noteIndex].title}</h3> */}
            <hr className="horizontal-rule" />
            {/* <div className="note-content">{props.charSheet.notes[noteIndex].content}</div> */}
          </div>
          <hr className="horizontal-rule" />
        </div>
      </div>
    </>
  )
}

export default Notes
