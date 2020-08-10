import React from "react"
import Axios from "axios"

function NewWearable(props) {
  const close = () => {
    props.newWearableHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    Axios.post("/character/addwearable", {
      id: Math.floor(Math.random() * 100000),
      CSID: props.CSID,
      name: e.target.name.value,
      bodyArea: e.target.bodyArea.value,
      requirements: e.target.requirements.value,
      type: e.target.type.value,
      modifiers: {
        armour: e.target.armour.value || 0,
        PHY: e.target.value.PHY || 0,
        REF: e.target.value.REF || 0,
        INT: e.target.value.INT || 0,
        CHA: e.target.value.CHA || 0,
        skill1: e.target.value.skill1 || 0,
      },
      size: e.target.size.value,
      value: e.target.value.value,
      slots: e.target.slots.value,
      holsters: e.target.holsters.value,
      uses: e.target.uses.value,
      effects: e.target.effects.value,
      description: e.target.description.value,
      //equipped: e.target.equipped.value,
    })
      .then(function (response) {
        console.log(response)
        props.newWearableHandler(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup" style={{ width: "50vw", overflowY: "scroll" }}>
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Add a New Wearable</h6>
            <label htmlFor="name">Name:</label>
            <input required type="text" name="name" />
            <label htmlFor="bodyArea">Body Area:</label>
            <select required name="bodyArea">
              <option value=""></option>
              <option value="base">Base</option>
              <option value="head">Head</option>
              <option value="face">Face</option>
              <option value="neck">Neck</option>
              <option value="torse">Torso</option>
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
              <option value="normal">normal</option>
              <option value="magic">magic</option>
            </select>
            <label htmlFor="value">Value in Gold:</label>
            <input required type="number" name="value" />
            <label htmlFor="uses">Uses Per Combat:</label>
            <select required name="uses">
              <option value=""></option>
              <option value="unlimited">Unlimited</option>
            </select>
            <label htmlFor="armour">Armour Modifier:</label>
            <input type="number" name="armour" />
            <label htmlFor="REF">Reflex Modifier:</label>
            <input type="number" name="REF" />
            <label htmlFor="PHY">Physique Modifier:</label>
            <input type="number" name="PHY" />
            <label htmlFor="INT">Intelligence Modifier:</label>
            <input type="number" name="INT" />
            <label htmlFor="CHA">Charisma Modifier:</label>
            <input type="number" name="CHA" />
            <label htmlFor="skill1">Skill 1 Modifier:</label>
            <input type="number" name="skill1" />
            <label htmlFor="effects">Special Effects:</label>
            <textarea name="effects" cols="30" rows="2"></textarea>
            <label htmlFor="requirements">Requirements to Use Wearable:</label>
            <textarea name="requirements" cols="30" rows="2"></textarea>
            <input type="submit" className="submit-button" value="Add New Wearable" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem" }}>
          Close Form
        </div>
      </div>
    </div>
  )
}

export default NewWearable
