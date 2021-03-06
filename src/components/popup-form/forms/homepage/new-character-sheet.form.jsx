import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import RaceCard from "../../../character-sheet-components/race-card/race-card.component"
import { Subheading } from "../../../card-container/card-container.component"

// selectors
import { selectRaces } from "../../../../redux/app/app.selectors"

// actions
import { togglePopupForm } from "../../../../redux/app/app.actions"
import { createNewCharSheet } from "../../../../redux/user/user.actions"

class NewCharacterSheet extends React.Component {
  constructor() {
    super()

    this.state = {
      characterName: "",
      currentRace: {},
      displayRace: false,
      age: "",
      weight: "",
      height: "",
      gender: "",
      skinTone: "",
      eyeColor: "",
      hairColor: "",
      hairLength: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // [TO DO] add data validation before sending the data to the backend

    const {
      characterName,
      currentRace,
      age,
      weight,
      height,
      gender,
      skinTone,
      eyeColor,
      hairColor,
      hairLength,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
    } = this.state

    const newCharacterDescription = [
      { descriptor: "Age", value: age },
      { descriptor: "Weight", value: weight },
      { descriptor: "Height", value: height },
      { descriptor: "Gender", value: gender },
      { descriptor: "Skin Tone", value: skinTone },
      { descriptor: "Eye Color", value: eyeColor },
      { descriptor: "Hair Color", value: hairColor },
      { descriptor: "Hair Length", value: hairLength },
    ]

    const newCharacterBackground = [
      {
        question: "Who were your parents? How were you raised? Do you have any close family?",
        answer: q1,
      },
      { question: "Where/From whom did you learn your skills?", answer: q2 },
      { question: "Name your 3 most important personal beliefs:", answer: q3 },
      {
        question: "Name 3 or more character flaws that are most likely to trouble you:",
        answer: q4,
      },
      { question: "What do you secretly fear even in times of easy-going peace? Why?", answer: q5 },
      { question: "Are you a hero? Why or why not?", answer: q6 },
      { question: "What are your goals (both long and short term)?", answer: q7 },
      { question: "Are you merciful? Why or why not?", answer: q8 },
      { question: "Why are you an adventurer?", answer: q9 },
    ]

    const data = {
      characterName,
      raceName: currentRace.name,
      raceID: currentRace._id,
      characterDescription: newCharacterDescription,
      characterBackground: newCharacterBackground,
    }

    console.log(data)
  }

  handleRaceChange = (e) => {
    const { races } = this.props

    console.log(e.target.value)

    if (e.target.value !== "SELECT ONE") {
      const currRace = races.find((race) => race._id === e.target.value)

      this.setState({
        currentRace: currRace,
        displayRace: true,
      })
    } else {
      this.setState({
        displayRace: false,
        currentRace: {},
      })
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { characterName, currentRace, displayRace } = this.state
    const { races } = this.props
    return (
      <>
        <PopupFormHeading>New Character Sheet</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="characterName">Character Name</label>
            <input
              type="text"
              name="characterName"
              value={characterName}
              onChange={this.handleInputChange}
            />

            <label htmlFor="select-a-race">Please Select a Race</label>
            <select name="select-a-race" onChange={(e) => this.handleRaceChange(e)}>
              <option value="SELECT ONE">Select One</option>
              {races.map(({ name, _id }, index) => (
                <option key={index} value={_id}>
                  {name}
                </option>
              ))}
            </select>

            {displayRace ? <RaceCard raceInfo={currentRace} /> : null}
          </fieldset>
          <fieldset>
            <Subheading>Character Description</Subheading>
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
            <Subheading>Character Background</Subheading>
            <label htmlFor="q1">
              Who were your parents? How were you raised? Do you have any close family?
            </label>
            <textarea required name="q1" cols="30" rows="2"></textarea>
            <label htmlFor="q2">Where/From whom did you learn your skills?</label>
            <textarea required name="q2" cols="30" rows="2"></textarea>
            <label htmlFor="q3">Name your 3 most important personal beliefs?</label>
            <textarea required name="q3" cols="30" rows="2"></textarea>
            <label htmlFor="q4">
              Name 3 or more character flaws that are most likely to trouble you?
            </label>
            <textarea required name="q4" cols="30" rows="2"></textarea>
            <label htmlFor="q5">
              What do you secretly fear even in times of easy-going peace? Why?
            </label>
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
          <ButtonPanel submitValue={`Create Character Sheet`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  races: selectRaces,
})

const mapDispatchToProps = (dispatch) => ({
  //addNewOrEditItem: (item) => dispatch(addNewOrEditItem(item)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterSheet)
