import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Axios from "axios"

import DispatchContext from "../../../DispatchContext"
import StateContext from "../../../StateContext"
import Loader from "../../Loader"
import ViewRace from "../Views/ViewRace"
import ViewClass from "../Views/ViewClass"

function NewCharacterSheet() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  let history = useHistory()

  const [raceList, setRaceList] = useState([])
  const [raceListLoaded, setRaceListLoaded] = useState(false)
  const [classList, setClassList] = useState([])
  const [classListLoaded, setClassListLoaded] = useState(false)

  const [currentRaceName, setCurrentRaceName] = useState()
  const [currentClassName, setCurrentClassName] = useState()
  const [currentRace, setCurrentRace] = useState()
  const [currentClass, setCurrentClass] = useState()

  async function formSubmit(e) {
    e.preventDefault()

    // send request to create new character sheet
    const response = await Axios.post(
      "/character/create",
      {
        characterName: e.target.characterName.value,
        raceName: currentRaceName,
        className: currentClassName,
        characterDescription: {
          age: e.target.age.value,
          weight: e.target.weight.value,
          height: e.target.height.value,
          gender: e.target.gender.value,
          skinTone: e.target.skinTone.value,
          eyeColor: e.target.eyeColor.value,
          hairColor: e.target.hairColor.value,
          hairLength: e.target.hairLength.value,
        },
        characterBackground: {
          q1: e.target.q1.value,
          q2: e.target.q2.value,
          q3: e.target.q3.value,
          q4: e.target.q4.value,
          q5: e.target.q5.value,
          q6: e.target.q6.value,
          q7: e.target.q7.value,
          q8: e.target.q8.value,
          q9: e.target.q9.value,
        },
      },
      {
        headers: {
          Authorization: "Bearer " + appState.user.token,
        },
      }
    )

    if (response) {
      history.push(`/character/${response.data}/gameplay`)
      appDispatch({ type: "hidePopupForm" })
      appDispatch({ type: "flashMessage", value: "Character Sheet successfully created." })
    }
  }

  useEffect(() => {
    if (currentRaceName) {
      Axios.get(`/races/${currentRaceName}`)
        .then(function (response) {
          setCurrentRace(response.data)
        })
        .catch(function (e) {
          console.log(e)
        })
    }

    if (currentClassName) {
      Axios.get(`/classes/${currentClassName}`)
        .then(function (response) {
          setCurrentClass(response.data)
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [currentRaceName, currentClassName])

  useEffect(() => {
    let races
    let classes

    Axios.get(`/races`)
      .then(function (response) {
        races = response.data.map((race) => {
          return { name: race.name }
        })
        setRaceList(races)
        setRaceListLoaded(true)
      })
      .catch(function (e) {
        console.log(e)
      })

    Axios.get(`/classes`)
      .then(function (response) {
        classes = response.data.map((cls) => {
          return { name: cls.name }
        })
        setClassList(classes)
        setClassListLoaded(true)
      })
      .catch(function (e) {
        console.log(e)
      })
  }, [raceListLoaded, classListLoaded])

  return (
    <form className="popupform__form" onSubmit={formSubmit}>
      <h3 className="popupform__heading">New Character Sheet</h3>

      {!raceListLoaded && !classListLoaded && raceList.length && classList.length ? (
        <Loader contained />
      ) : (
        <>
          <fieldset>
            <label htmlFor="characterName">Character Name:</label>
            <input required type="text" name="characterName" />
            <label htmlFor="race">Choose Your Race:</label>
            <select
              onChange={(e) => {
                setCurrentRaceName(e.target.value)
              }}
              required
              name="race"
            >
              <option value="a"></option>{" "}
              {raceList.map((race, index) => {
                return (
                  <option key={index} value={race.name}>
                    {race.name}
                  </option>
                )
              })}
            </select>
            {currentRace && <ViewRace data={currentRace} />}

            <label htmlFor="class">Choose Your Class:</label>
            <select
              onChange={(e) => {
                setCurrentClassName(e.target.value)
              }}
              required
              name="class"
            >
              <option value="a"></option>
              {classList.map((cls, index) => {
                return (
                  <option key={index} value={cls.name}>
                    {cls.name}
                  </option>
                )
              })}
            </select>
            {currentClass && <ViewClass data={currentClass} />}
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
        </>
      )}

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
