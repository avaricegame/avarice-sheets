import React, { useState, useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function NewAbility(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const close = () => {
    props.newAbilityHandler(false)
  }
  const onNameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const theID = Math.floor(Math.random() * 100000)
    Axios.post("/character/createability", {
      id: theID,
      CSID: props.CSID,
      name: name,
      description: description,
      power: "custom",
    })
      .then(function (response) {
        props.newAbilityHandler(false)
        charSheetDispatch({
          type: "addNewAbility",
          value: {
            id: theID,
            CSID: props.CSID,
            name: name,
            description: description,
            power: "custom",
          },
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <PopupForm formName="Create a New Ability" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label htmlFor="name">Ability Name:</label>
        <input required name="name" value={name} onChange={(e) => onNameChangeHandler(e)} type="text" />
        <label htmlFor="content">Description:</label>
        <textarea required name="description" cols="50" rows="10" value={description} onChange={(e) => onDescriptionChangeHandler(e)}></textarea>
      </fieldset>
    </PopupForm>
  )
}

export default NewAbility
