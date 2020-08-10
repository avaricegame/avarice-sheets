import React from "react"
import Axios from "axios"

function NewWeapon(props) {
  const close = () => {
    props.newWeaponHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    Axios.post("/character/addweapon", {
      id: Math.floor(Math.random() * 100000),
      CSID: props.CSID,
      name: e.target.name.value,
      damage: e.target.damage.value,
      unique: e.target.unique.value,
      type: e.target.type.value,
      proficiency: e.target.proficiency.value,
      requirements: e.target.requirements.value,
      rangedMelee: e.target.rangedMelee.value,
      critical: e.target.critical.value,
      range: e.target.range.value,
      size: e.target.size.value,
      holstersReq: parseInt(e.target.holstersReq.value),
      value: parseInt(e.target.value.value),
      uses: e.target.uses.value,
      description: e.target.description.value,
      effects: e.target.effects.value,
      //equipped: e.target.equipped.value,
    })
      .then(function (response) {
        console.log(response)
        props.newWeaponHandler(false)
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
            <h6 className="edit-h6">Add New Weapon</h6>
            <label htmlFor="name">Name:</label>
            <input required name="name" type="text" />
            <label htmlFor="rangedMelee">Ranged or Melee?</label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input type="radio" name="rangedMelee" value="ranged" /> Ranged
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input type="radio" name="rangedMelee" value="melee" /> Melee
            </span>
            <label htmlFor="description">Description:</label>
            <textarea required name="description"></textarea>
            <label htmlFor="holsterReq">Holsters Required:</label>
            <input required type="number" name="holstersReq" />
            <label htmlFor="damage">Damage:</label>
            <select required name="damage">
              <option value=""></option>
              <option value="D4">D4</option>
              <option value="D6">D6</option>
              <option value="D8">D8</option>
              <option value="D10">D10</option>
              <option value="D12">D12</option>
              <option value="D20">D20</option>
              <option value="D100">D100</option>
            </select>
            <label htmlFor="range">Range:</label>
            <select required name="range">
              <option value=""></option>
              <option value="0">0</option>
              <option value="0-1">0-1</option>
              <option value="1">1</option>
              <option value="1-2">1-2</option>
              <option value="2">2</option>
              <option value="2-4">2-4</option>
              <option value="1-5">1-5</option>
              <option value="4-5">4-5</option>
              <option value="2-7">2-7</option>
              <option value="3-10">3-10</option>
            </select>
            <label htmlFor="unique">Unique?</label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input type="radio" name="unique" value={true} /> Yes
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input type="radio" name="unique" value={false} /> No
            </span>
            <label htmlFor="size">Size:</label>
            <select required name="size">
              <option value=""></option>
              <option value="extra small">Extra Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra large">Extra Large</option>
            </select>
            <label htmlFor="proficiency">Proficiency:</label>
            <select required name="proficiency">
              <option value=""></option>
              <option value="Proficiency 1">Proficiency 1</option>
            </select>
            <label htmlFor="critical">Critical:</label>
            <select required name="critical">
              <option value=""></option>
              <option value="20">20</option>
              <option value="19-20">19-20</option>
              <option value="18-20">18-20</option>
              <option value="17-20">17-20</option>
              <option value="16-20">16-20</option>
              <option value="15-20">15-20</option>
            </select>
            <label htmlFor="type">Weapon Type:</label>
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
            <label htmlFor="effects">Special Effects:</label>
            <textarea name="effects" cols="30" rows="2"></textarea>
            <label htmlFor="requirements">Requirements to Use Weapon:</label>
            <textarea name="requirements" cols="30" rows="2"></textarea>
            <input type="submit" className="submit-button" value="Add New Weapon" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem" }}>
          Close Form
        </div>
      </div>
    </div>
  )
}

export default NewWeapon
