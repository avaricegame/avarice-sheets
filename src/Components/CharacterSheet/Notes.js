import React, { useState, useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Notes(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)
  const openNewNote = () => {
    props.newNoteHandler(true)
  }
  const openEditNote = () => {
    props.editNoteHandler(true)
  }

  const [noteIndex, setNoteIndex] = useState("a")

  const openNoteHandler = (index, e) => {
    setNoteIndex(index)
  }
  const deleteNote = () => {
    if (window.confirm("Are you sure you want to delete this note? This action cannot be undone.")) {
      Axios.post("/character/deletenote", {
        CSID: props.CSID,
        id: charSheetState.charSheet.notes[noteIndex].id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteNote",
            value: noteIndex,
          })
          console.log(noteIndex)
          setNoteIndex("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  if (noteIndex === "a") {
    return (
      <>
        <div className="secondary-header">
          <h1 className="secondary-header__heading">Notes</h1>
        </div>
        <div className="page-container">
          <div className="cw__25">
            <h2 className="heading">Your Notes</h2>
            <div className="cw__container">
              <button onClick={openNewNote}>Create New Note</button>

              {charSheetState.charSheet.notes.map((note, index) => {
                return (
                  <div className={`note-title-div ${index === noteIndex ? "note-title-div--selected" : ""}`} onClick={(e) => openNoteHandler(index, e)} key={note.id}>
                    <h3>{note.title} &rarr;</h3>
                  </div>
                )
              })}
              <hr className="hg__hr" />
            </div>
          </div>

          <div className="cw__75">
            <h2 className="heading">Note Content</h2>
            <div className="cw__container">
              <h3 className="item-container__subheading item-container__subheading--lighter" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                Please Select a Note
              </h3>
              {/* <hr className="horizontal-rule" /> */}
              <div style={{ marginBottom: "4rem" }} className="note-content"></div>
              <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
            </div>
            {/* <hr className="horizontal-rule" /> */}
          </div>
        </div>
      </>
    )
  } else if (noteIndex !== "a" && noteIndex > -1 && noteIndex !== undefined) {
    return (
      <>
        <div className="secondary-header">
          <h1 className="secondary-header__heading">Notes</h1>
        </div>
        <div className="page-container">
          <div className="cw__25">
            <h2 className="heading">Your Notes</h2>
            <div className="cw__container">
              <button className="button" onClick={openNewNote}>
                Create New Note
              </button>

              {charSheetState.charSheet.notes.map((note, index) => {
                return (
                  <div className={`note-title-div ${index === noteIndex ? "note-title-div--selected" : ""}`} onClick={(e) => openNoteHandler(index, e)} key={note.id}>
                    <h3>{note.title} &rarr;</h3>
                  </div>
                )
              })}
              <hr className="hg__hr" />
            </div>
          </div>

          <div className="cw__75">
            <h2 className="heading">Note Content</h2>
            <div className="cw__container">
              <h3 className="item-container__subheading item-container__subheading--lighter" style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                {charSheetState.charSheet.notes[noteIndex] ? charSheetState.charSheet.notes[noteIndex].title : ""}
              </h3>
              {/* <hr className="horizontal-rule" /> */}
              <div style={{ marginBottom: "4rem", padding: "1rem 2rem" }} className="note-content">
                {charSheetState.charSheet.notes[noteIndex] ? charSheetState.charSheet.notes[noteIndex].content : ""}
              </div>

              <p style={{ textAlign: "right", margin: "0", color: "darkgray" }}>
                <span onClick={openEditNote} className="hg__fake-link">
                  EDIT
                </span>
                <span>|</span>
                <span onClick={deleteNote} className="hg__fake-link">
                  DELETE
                </span>
              </p>
              <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
            </div>
            {/* <hr className="horizontal-rule" /> */}
          </div>
        </div>
      </>
    )
  }
}

export default Notes
