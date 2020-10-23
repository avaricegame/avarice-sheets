import React, { useContext } from "react"
import Axios from "axios"

import PopupForm from "../../PopupForm"

import DispatchContext from "../../../DispatchContext"

function NewWearable(props) {
  const charSheetDispatch = useContext(DispatchContext)
  const close = () => {
    props.newWearableHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let theID = Math.floor(Math.random() * 100000)
    let wearable = {
      id: theID,
      CSID: props.CSID,
      name: e.target.name.value,
      bodyArea: e.target.bodyArea.value,
      requirements: e.target.requirements.value,
      type: e.target.type.value,
      modifiers: {
        armour: parseInt(e.target.armour.value),
        PHY: parseInt(e.target.PHY.value),
        INT: parseInt(e.target.INT.value),
        REF: parseInt(e.target.REF.value),
        CHA: parseInt(e.target.CHA.value),
        skill1: parseInt(e.target.skill1.value),
      },
      size: e.target.size.value,
      value: parseInt(e.target.value.value),
      slots: parseInt(e.target.slots.value),
      holsters: parseInt(e.target.holsters.value),
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      equipped: false,
    }
    Axios.post("/character/addwearable", {
      id: theID,
      CSID: props.CSID,
      name: e.target.name.value,
      bodyArea: e.target.bodyArea.value,
      requirements: e.target.requirements.value,
      type: e.target.type.value,
      modifiers: {
        armour: parseInt(e.target.armour.value),
        PHY: parseInt(e.target.PHY.value),
        INT: parseInt(e.target.INT.value),
        REF: parseInt(e.target.REF.value),
        CHA: parseInt(e.target.CHA.value),
        skill1: parseInt(e.target.skill1.value),
      },
      size: e.target.size.value,
      value: parseInt(e.target.value.value),
      slots: parseInt(e.target.slots.value),
      holsters: parseInt(e.target.holsters.value),
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      //equipped: e.target.equipped.value,
    })
      .then(function (response) {
        console.log(response)
        props.newWearableHandler(false)
        charSheetDispatch({ type: "addNewWearable", value: wearable })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <PopupForm formName="Add a New Wearable" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label htmlFor="name">Wearable Name:</label>
        <input required type="text" name="name" />
        <label htmlFor="bodyArea">Body Area:</label>
        <select required name="bodyArea">
          <option value=""></option>
          <option value="base">Base</option>
          <option value="head">Head</option>
          <option value="face">Face</option>
          <option value="neck">Neck</option>
          <option value="torso">Torso</option>
          <option value="back">Back</option>
          <option value="arms">Arms</option>
          <option value="wrists">Wrists</option>
          <option value="hands">Hands</option>
          <option value="waist">Waist</option>
          <option value="legs">Legs</option>
          <option value="ankles">Ankles</option>
          <option value="feet">Feet</option>
        </select>
        <label htmlFor="description">Description:</label>
        <textarea required name="description"></textarea>
        <label htmlFor="holsters">Holsters Given:</label>
        <input required type="number" name="holsters" />
        <label htmlFor="slots">Slots Given:</label>
        <input required type="number" name="slots" />
        <label htmlFor="size">Size:</label>
        <select required name="size">
          <option value=""></option>
          <option value="extra small">Extra Small</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra large">Extra Large</option>
        </select>
        <label htmlFor="type">Wearable Type:</label>
        <select required name="type">
          <option value=""></option>
          <option value="normal">Normal</option>
          <option value="magic">Magic</option>
        </select>
        <label htmlFor="value">Value in Gold:</label>
        <input required type="number" name="value" />
        <label htmlFor="uses">Uses Per Combat:</label>
        <select required name="uses">
          <option value=""></option>
          <option value="unlimited">Unlimited</option>
        </select>
        <label htmlFor="armour">Armour Modifier:</label>
        <input required type="number" name="armour" />
        <label htmlFor="REF">Reflex Modifier:</label>
        <input required type="number" name="REF" />
        <label htmlFor="PHY">Physique Modifier:</label>
        <input required type="number" name="PHY" />
        <label htmlFor="INT">Intelligence Modifier:</label>
        <input required type="number" name="INT" />
        <label htmlFor="CHA">Charisma Modifier:</label>
        <input required type="number" name="CHA" />
        <label htmlFor="skill1">Skill 1 Modifier:</label>
        <input required type="number" name="skill1" />
        <label htmlFor="effects">Special Effects:</label>
        <textarea name="effects" cols="30" rows="2"></textarea>
        <label htmlFor="requirements">Requirements to Use Wearable:</label>
        <textarea name="requirements" cols="30" rows="2"></textarea>
      </fieldset>
    </PopupForm>
  )
}

export default NewWearable
