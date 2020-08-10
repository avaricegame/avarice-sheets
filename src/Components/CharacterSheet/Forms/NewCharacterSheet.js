import React, { useState, useEffect } from "react"
import Axios from "axios"

// COMPONENTS
import Loader from "../../Loader"

function NewCharacterSheet(props) {
  const close = () => {
    props.newCharacterSheetHandler(false)
  }
  const [isLoaded, setIsLoaded] = useState(false)
  const [raceArray, setRaceArray] = useState([])
  const [classArray, setClassArray] = useState([])
  useEffect(() => {
    async function fetchData() {
      const r = await Axios.get("/races")
      const c = await Axios.get("/classes")
      setRaceArray(r.data)
      setClassArray(c.data)
    }
    fetchData()
    setIsLoaded(true)
  }, [classArray, raceArray])
  const [chosenRace, setChosenRace] = useState("a")
  const [chosenClass, setChosenClass] = useState("a")
  const raceSelectHandler = (e) => {
    if (e.target.value !== "a") {
      setChosenRace(raceArray[e.target.value])
    } else {
      setChosenRace("a")
    }
  }
  const classSelectHandler = (e) => {
    if (e.target.value !== "a") {
      setChosenClass(classArray[e.target.value])
    } else {
      setChosenClass("a")
    }
  }
  const displayRace = () => {
    if (chosenRace !== "a") {
      return (
        <div className="current-weapon item-container">
          <h3 className="item-container__heading">Race Details and Information</h3>
          <h4 className="item-container__subheading">Race Name: {chosenRace.name}</h4>
          <h4 className="item-container__terheading">Common Name: {chosenRace.commonName}</h4>
          <p>
            <em>"{chosenRace.quote}"</em>
          </p>
          <p>{chosenRace.description}</p>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Base Stat Modifiers:</strong>
                </td>
              </tr>
              <tr>
                <td>Physique:</td>
                <td>{chosenRace.baseStats[0]}</td>
              </tr>
              <tr>
                <td>Reflex:</td>
                <td>{chosenRace.baseStats[1]}</td>
              </tr>
              <tr>
                <td>Intelligence:</td>
                <td>{chosenRace.baseStats[2]}</td>
              </tr>
              <tr>
                <td>Charisma:</td>
                <td>{chosenRace.baseStats[3]}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>More Information:</strong>
                </td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{chosenRace.location}</td>
              </tr>
              <tr>
                <td>Climate:</td>
                <td>{chosenRace.climate}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{chosenRace.size}</td>
              </tr>
              <tr>
                <td>Lifespan:</td>
                <td>{chosenRace.lifespan}</td>
              </tr>
              <tr>
                <td>Personality:</td>
                <td>{chosenRace.personality}</td>
              </tr>
              <tr>
                <td>Friends:</td>
                <td>{chosenRace.friends}</td>
              </tr>
              <tr>
                <td>Enemies:</td>
                <td>{chosenRace.enemies}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
  const displayClass = () => {
    if (chosenClass !== "a") {
      return (
        <div className="current-weapon item-container">
          <h3 className="item-container__heading">Class Details and Information</h3>
          <h4 className="item-container__subheading">Class Name: {chosenClass.name}</h4>
          <h4 className="item-container__terheading">Common Name: {chosenClass.commonName}</h4>
          <p>
            <em>"{chosenClass.quote}"</em>
          </p>
          <p>{chosenClass.description}</p>
          <p>
            <strong>Skills: </strong>Skill 1, Skill 2, Skill 7, Skill 9
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Base Stat Modifiers:</strong>
                </td>
              </tr>
              <tr>
                <td>Physique:</td>
                <td>{chosenClass.baseStats[0]}</td>
              </tr>
              <tr>
                <td>Intelligence:</td>
                <td>{chosenClass.baseStats[1]}</td>
              </tr>
              <tr>
                <td>Reflex:</td>
                <td>{chosenClass.baseStats[2]}</td>
              </tr>
              <tr>
                <td>Charisma:</td>
                <td>{chosenClass.baseStats[3]}</td>
              </tr>
            </tbody>
          </table>
          {/* <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Skills:</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Skill 1: </td>
                    <td>{chosenClass.skills.skill1}</td>
                  </tr>
                  <tr>
                    <td>Skill 2: </td>
                    <td>{chosenClass.skills.skill2}</td>
                  </tr>
                  <tr>
                    <td>Skill 3: </td>
                    <td>{chosenClass.skills.skill3}</td>
                  </tr>
                  <tr>
                    <td>Skill 4: </td>
                    <td>{chosenClass.skills.skill4}</td>
                  </tr>
                  <tr>
                    <td>Skill 5: </td>
                    <td>{chosenClass.skills.skill5}</td>
                  </tr>
                </tbody>
              </table> */}
        </div>
      )
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    Axios.post("/createcs", {
      charid: String(Math.floor(Math.random() * 929484721)),
      CSID: props.CSID,
      userID: props.UID,
      characterName: e.target.characterName.value,
      className: chosenClass.name,
      raceName: chosenRace.name,
      classID: chosenClass.id,
      raceID: chosenRace.id,
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
    })
      .then(function (response) {
        console.log(response)
        props.newCharacterSheetHandler(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  if (isLoaded) {
    return (
      <div className="popup-bg">
        <div className="popup" style={{ width: "60vw", overflowY: "scroll" }}>
          <form onSubmit={(e) => submitHandler(e)}>
            <fieldset>
              <h6 className="edit-h6">Create a New Character Sheet</h6>
              <label htmlFor="characterName">Character Name:</label>
              <input type="text" name="characterName" />
              <label htmlFor="race">Choose Your Race:</label>
              <select
                name="race"
                onChange={(e) => {
                  raceSelectHandler(e)
                }}
              >
                <option value="a"></option>
                {raceArray.map((race, index) => {
                  return (
                    <option key={index} value={index}>
                      {race.name}
                    </option>
                  )
                })}
              </select>
              {displayRace()}
              <label htmlFor="class">Choose Your Class:</label>
              <select
                name="class"
                onChange={(e) => {
                  classSelectHandler(e)
                }}
              >
                <option value="a"></option>
                {classArray.map((c, index) => {
                  return (
                    <option value={index} key={index}>
                      {c.name}
                    </option>
                  )
                })}
              </select>
              {displayClass()}
              <fieldset>
                <h4 className="item-container__subheading" style={{ margin: "2.5rem auto" }}>
                  Character Description
                </h4>
                <label htmlFor="age">Approximate Age in Years:</label>
                <input type="number" name="age" />
                <label htmlFor="gender">Gender:</label>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <input required type="radio" name="gender" value="male" /> Male
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <input required type="radio" name="gender" value="female" /> Male
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <input required type="radio" name="gender" value="ambigious" /> Ambigious
                </span>
                <label htmlFor="weight">Approximate Weight in LBS:</label>
                <input type="number" name="weight" />
                <label htmlFor="height"> Approximate Height in FT:</label>
                <input type="number" name="height" />
                <label htmlFor="skinTone">Skin Tone:</label>
                <select name="skinTone">
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
                <select name="hairLength">
                  <option value=""></option>
                  <option value="long">Long</option>
                  <option value="medium">Medium</option>
                  <option value="short">Short</option>
                  <option value="bald">Bald</option>
                </select>
                <label htmlFor="hairColor">Hair Color:</label>
                <select name="hairColor">
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
                <select name="eyeColor">
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
                <h4 className="item-container__subheading" style={{ margin: "2.5rem auto" }}>
                  Character Background
                </h4>
                <label htmlFor="q1">Who were your parents? How were you raised? Do you have any close family?</label>
                <textarea name="q1" cols="30" rows="2"></textarea>
                <label htmlFor="q2">Where/From whom did you learn your skills?</label>
                <textarea name="q2" cols="30" rows="2"></textarea>
                <label htmlFor="q3">Name your 3 most important personal beliefs?</label>
                <textarea name="q3" cols="30" rows="2"></textarea>
                <label htmlFor="q4">Name 3 or more character flaws that are most likely to trouble you?</label>
                <textarea name="q4" cols="30" rows="2"></textarea>
                <label htmlFor="q5">What do you secretly fear even in times of easy-going peace? Why?</label>
                <textarea name="q5" cols="30" rows="2"></textarea>
                <label htmlFor="q6">Is this character a hero? Why or why not?</label>
                <textarea name="q6" cols="30" rows="2"></textarea>
                <label htmlFor="q7">What are your goals (both long and short term)?</label>
                <textarea name="q7" cols="30" rows="2"></textarea>
                <label htmlFor="q8">Is your character merciful? Why or why not?</label>
                <textarea name="q8" cols="30" rows="2"></textarea>
                <label htmlFor="q9">Why are you an adventurer?</label>
                <textarea name="q9" cols="30" rows="2"></textarea>
              </fieldset>
              <input type="submit" className="submit-button" value="Create New Character Sheet" />
            </fieldset>
          </form>
          <div onClick={close} className="close-button" style={{ padding: "3rem 1rem" }}>
            Close Form
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}

export default NewCharacterSheet
