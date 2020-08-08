import React, { useState } from "react"
//import Axios from "axios"

function NewCharacterSheet(props) {
  const [amount, setAmount] = useState()
  const close = () => {
    props.newCharacterSheetHandler(false)
  }
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setAmount(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.amount.value)
    // Axios.post("/character/takedamage", {
    //   amount: e.target.amount.value,
    //   CSID: props.CSID,
    // })
    //   .then(function (response) {
    //     props.newNoteHandler(false)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Form Title</h6>
            <label>How Much?</label>
            <input name="amount" value={amount} onChange={(e) => onChangeHandler(e)} type="number" />
            {/*

<form id="editCharacterBackgroundForm">
                <fieldset>
                  <fieldset>
                    <legend>Who were your parents? How were you raised? Do you have any close family?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Where/From whom did you learn your skills?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Name your 3 most important personal beliefs?</legend>
                    <label>1)</label>
                    <textarea></textarea>
                    <br />
                    <label>2)</label>
                    <textarea></textarea>
                    <br />
                    <label>3)</label>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Name 3 or more character flaws that are most likely to trouble you?</legend>
                    <label>1)</label>
                    <textarea></textarea>
                    <br />
                    <label>2)</label>
                    <textarea></textarea>
                    <br />
                    <label>3)</label>
                    <textarea></textarea>
                    <br />
                    <label>4)</label>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>What do you secretly fear even in times of easy-going peace? Why?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Is this character a hero? Why or why not?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>What are your goals (both long and short term)?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Is your character merciful? Why or why not?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Why are you an adventurer?</legend>
                    <textarea></textarea>
                  </fieldset>
                </fieldset>
                <input type="submit" className="submit-button" value="Save Changes" />
              </form>

            */}

            {/* 
            
            <form id="editCharacterDescriptionForm">
                <fieldset>
                  <label>Player Name:</label>
                  <input type="text" value="Zack Bringhurst" />
                  <label>Character Name:</label>
                  <input type="text" value="Todd Bendy" />
                  <label>Effect:</label>
                  <select>
                    <option></option>
                    <option>None</option>
                    <option>Were-wolf</option>
                    <option>Vampire</option>
                  </select>
                  <label>Approximate Age in Years:</label>
                  <input type="number" /> <label>Years</label>
                  <label>Gender:</label>
                  <input type="radio" name="gender" value="male" />
                  Male
                  <input type="radio" name="gender" value="female" />
                  Female
                  <input type="radio" name="gender" value="ambiguous" />
                  Ambiguous
                  <label>Skin Tone:</label>
                  <select>
                    <option></option>
                    <option>Brown</option>
                    <option>White</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>Other</option>
                  </select>
                  <label>Hair Length:</label>
                  <select>
                    <option></option>
                    <option>Long</option>
                    <option>Medium</option>
                    <option>Short</option>
                    <option>Bald</option>
                  </select>
                  <label>Hair Color:</label>
                  <select>
                    <option></option>
                    <option>Brown</option>
                    <option>Black</option>
                    <option>Blonde</option>
                    <option>Dirty Blonde</option>
                    <option>Blue</option>
                    <option>Purple</option>
                    <option>Orange</option>
                    <option>Silver</option>
                    <option>White</option>
                    <option>Red</option>
                    <option>Gray</option>
                    <option>Other</option>
                  </select>
                  <label>Eyes:</label>
                  <select>
                    <option></option>
                    <option>Amber</option>
                    <option>Blue</option>
                    <option>Brown</option>
                    <option>Hazel</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Purple</option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Gray</option>
                    <option>Orange</option>
                    <option>Yellow</option>
                    <option>Pink</option>
                    <option>Other</option>
                  </select>
                  <label>Approximate Weight in LBS:</label>
                  <input type="number" /> <label>LBS</label>
                  <labe> Approximate Height in FT:</labe>
                  <input type="number" /> <label>FT</label>
                </fieldset>
                <input type="submit" className="submit-button" value="Save Changes" />
              </form>
            
            */}

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

export default NewCharacterSheet
