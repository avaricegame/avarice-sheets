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
      modifiers: e.target.modifiers.value,
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
        props.newWearableHAndler(false)
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
            <h6 className="edit-h6">Add a New Wearable</h6>

            {/*
                           <form id="addNewArmourForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Body Area:</label>
                  <select required name="bodyArea" value={bodyArea} onChange={this.onChange}>
                    <option></option>
                    <option>Head</option>
                    <option>Hands</option>
                    <option>Arms</option>
                    <option>Torso</option>
                    <option>Waist</option>
                    <option>Feet</option>
                    <option>Neck</option>
                    <option>Shoulders</option>
                    <option>Eyes</option>
                    <option>Wrists</option>
                    <option>Ring 1</option>
                    <option>Ring 2</option>
                  </select>
                  <label>Armour Piece Name:</label>
                  <input required name="name" value={name} onChange={this.onChange} type="text" />
                  <label>Speed Mod:</label>
                  <input name="speed" value={speed} onChange={this.onChange} type="number" />
                  <label>Hit Points Mod:</label>
                  <input name="hp" value={hp} onChange={this.onChange} type="number" />
                  <label>Strength Mod:</label>
                  <input name="strength" value={strength} onChange={this.onChange} type="number" />
                  <label>Dexterity/Reflex Mod:</label>
                  <input name="dexterityReflex" value={dexterityReflex} onChange={this.onChange} type="number" />
                  <label>Constitution/Fortitude Mod:</label>
                  <input name="constitutionFortitude" value={constitutionFortitude} onChange={this.onChange} type="number" />
                  <label>Intelligence Mod:</label>
                  <input name="intelligence" value={intelligence} onChange={this.onChange} type="number" />
                  <label>Charisma Mod:</label>
                  <input name="charisma" value={charisma} onChange={this.onChange} type="number" />
                  <label>Perception Mod:</label>
                  <input name="perception" value={perception} onChange={this.onChange} type="number" />
                  <label>Stealth Mod:</label>
                  <input name="stealth" value={stealth} onChange={this.onChange} type="number" />
                  <label>Ranged Accuracy Mod:</label>
                  <input name="rangedAccuracy" value={rangedAccuracy} onChange={this.onChange} type="number" />
                  <label>Melee Accuracy Mod:</label>
                  <input name="meleeAccuracy" value={meleeAccuracy} onChange={this.onChange} type="number" />
                  <label>Description:</label>
                  <textarea required name="description" value={description} onChange={this.onChange}></textarea>
                  <label>Publish?</label>
                  <select required name="published" value={published} onChange={this.onChange}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <input type="submit" className="submit-button" value="Save New Armour" />
                </fieldset>
              </form>
            */}
            <input type="submit" className="submit-button" value="Add New Weapon" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default NewWearable
