import React, { useContext } from "react"

import DispatchContext from "../../../DispatchContext"

function NewCharacterSheet() {
  const appDispatch = useContext(DispatchContext)

  function formSubmit(e) {
    e.preventDefault()
    alert("submitted the form")
  }

  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">New Character Sheet</h3>

      <fieldset>
        <label htmlFor="characterName">Character Name:</label>
        <input required type="text" name="characterName" />
        <label htmlFor="race">Choose Your Race:</label>
        <select required name="race">
          <option value="a"></option>
        </select>
        <label htmlFor="class">Choose Your Class:</label>
        <select required name="class">
          <option value="a"></option>
        </select>
      </fieldset>

      <fieldset>
        <h4 className="item-container__subheading item-container__subheading--topmargin">Character Description</h4>
        <label htmlFor="age">Approximate Age in Years:</label>
        <input required type="number" name="age" />
        <label htmlFor="gender">Gender:</label>
        <div className="radio-list-container">
          <span className="radio-input-container radio-input-container--extra-margin">
            <input required type="radio" name="gender" value="male" /> Male
          </span>
          <span className="radio-input-container radio-input-container--extra-margin">
            <input required type="radio" name="gender" value="female" /> Female
          </span>
          <span className="radio-input-container radio-input-container--extra-margin">
            <input required type="radio" name="gender" value="ambigious" /> Ambigious
          </span>
        </div>
        <label htmlFor="weight">Approximate Weight in LBS:</label>
        <input required type="number" name="weight" />
        <label htmlFor="height"> Approximate Height in FT:</label>
        <input required type="number" name="height" />
        <label htmlFor="skinTone">Skin Tone:</label>
        <select required name="skinTone">
          <option value=""></option>
          <option value="brown">Brown</option>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="gray">Gray</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="hairLength">Hair Length:</label>
        <select required name="hairLength">
          <option value=""></option>
          <option value="long">Long</option>
          <option value="medium">Medium</option>
          <option value="short">Short</option>
          <option value="bald">Bald</option>
        </select>
        <label htmlFor="hairColor">Hair Color:</label>
        <select required name="hairColor">
          <option value=""></option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
          <option value="blonde">Blonde</option>
          <option value="dirty blonde">Dirty Blonde</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="silver">Silver</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="gray">Gray</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="eyeColor">Eye Color:</label>
        <select required name="eyeColor">
          <option value=""></option>
          <option value="amber">Amber</option>
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="hazel">Hazel</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="other">Other</option>
        </select>
      </fieldset>

      <fieldset>
        <h4 className="item-container__subheading item-container__subheading--topmargin">Character Background</h4>
        <label htmlFor="q1">Who were your parents? How were you raised? Do you have any close family?</label>
        <textarea required name="q1" cols="30" rows="2"></textarea>
        <label htmlFor="q2">Where/From whom did you learn your skills?</label>
        <textarea required name="q2" cols="30" rows="2"></textarea>
        <label htmlFor="q3">Name your 3 most important personal beliefs?</label>
        <textarea required name="q3" cols="30" rows="2"></textarea>
        <label htmlFor="q4">Name 3 or more character flaws that are most likely to trouble you?</label>
        <textarea required name="q4" cols="30" rows="2"></textarea>
        <label htmlFor="q5">What do you secretly fear even in times of easy-going peace? Why?</label>
        <textarea required name="q5" cols="30" rows="2"></textarea>
        <label htmlFor="q6">Is this character a hero? Why or why not?</label>
        <textarea required name="q6" cols="30" rows="2"></textarea>
        <label htmlFor="q7">What are your goals (both long and short term)?</label>
        <textarea required name="q7" cols="30" rows="2"></textarea>
        <label htmlFor="q8">Is your character merciful? Why or why not?</label>
        <textarea required name="q8" cols="30" rows="2"></textarea>
        <label htmlFor="q9">Why are you an adventurer?</label>
        <textarea required name="q9" cols="30" rows="2"></textarea>
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

export default NewCharacterSheet
