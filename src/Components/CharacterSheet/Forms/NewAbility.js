import React, { useState } from "react"
import Axios from "axios"

function NewAbility(props) {
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
    Axios.post("/character/createability", {
      id: Math.floor(Math.random() * 100000),
      CSID: props.CSID,
      name: name,
      description: description,
      power: "custom",
    })
      .then(function (response) {
        props.newAbilityHandler(false)
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
            <h6 className="edit-h6">Create New Ability</h6>
            <label htmlFor="name">Name:</label>
            <input required name="name" value={name} onChange={(e) => onNameChangeHandler(e)} type="text" />
            <label htmlFor="content">Description:</label>
            <textarea required name="description" cols="50" rows="10" value={description} onChange={(e) => onDescriptionChangeHandler(e)}></textarea>
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

export default NewAbility
