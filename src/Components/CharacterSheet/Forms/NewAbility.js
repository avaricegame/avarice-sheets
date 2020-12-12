import React, { useState, useContext } from "react"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"

function NewAbility(props) {
  const appDispatch = useContext(DispatchContext)

  const [name, setName] = useState()
  const [description, setDescription] = useState()

  const onNameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }

  const formSubmit = (e) => {
    e.preventDefault()

    // const theID = Math.floor(Math.random() * 100000)
    // Axios.post("/character/createability", {
    //   id: theID,
    //   CSID: props.CSID,
    //   name: name,
    //   description: description,
    //   power: "custom",
    // })
    //   .then(function (response) {
    //     props.newAbilityHandler(false)
    //     charSheetDispatch({
    //       type: "addNewAbility",
    //       value: {
    //         id: theID,
    //         CSID: props.CSID,
    //         name: name,
    //         description: description,
    //         power: "custom",
    //       },
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">Create a New Ability</h3>
      <fieldset>
        <label htmlFor="name">Ability Name:</label>
        <input required name="name" value={name} onChange={(e) => onNameChangeHandler(e)} type="text" />
        <label htmlFor="content">Description:</label>
        <textarea required name="description" cols="50" rows="10" value={description} onChange={(e) => onDescriptionChangeHandler(e)}></textarea>
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

export default NewAbility
