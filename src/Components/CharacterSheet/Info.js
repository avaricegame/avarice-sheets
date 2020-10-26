import React, { useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Info(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)
  const openNewCharacterLog = () => {
    props.newCharacterLogHandler(true)
  }
  const openEditCharacterLog = () => {
    props.editCharacterLogHandler(true)
  }
  const deleteCharacterLog = (e, id) => {
    if (window.confirm("Are you sure you want to delete this character log? This action cannot be undone.")) {
      Axios.post("/character/deletecharacterlog", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteCharacterLog",
            value: id,
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Info</h1>
      </div>
      <div className="page-container">
        <div className="cw__33">
          <h2 className="heading">Campaign Information</h2>
          <div className="cw__container">
            <button className="button" onClick={openNewCharacterLog}>
              Add a New Character Log
            </button>

            <div className="item-container" style={{ display: "flex", flexDirection: "column-reverse" }}>
              {charSheetState.charSheet.characterLog.map((log) => {
                return (
                  <p key={log.id}>
                    <strong>{log.title}: </strong>
                    {log.details}

                    <p style={{ textAlign: "right", margin: "0", color: "darkgray" }}>
                      <span onClick={openEditCharacterLog} className="hg__fake-link">
                        EDIT
                      </span>
                      <span>|</span>
                      <span
                        onClick={(e, id) => {
                          deleteCharacterLog(e, log.id)
                        }}
                        className="hg__fake-link"
                      >
                        DELETE
                      </span>
                    </p>
                    <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
                  </p>
                )
              })}
              {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4> */}
              <h4 className="item-container__subheading">For {charSheetState.charSheet.characterName}</h4>
              <h3 className="item-container__heading">Character Log</h3>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Master Log</h3>
              {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4>
              <p>
                <strong>Mission III: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p>
                <strong>Mission II: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p>
                <strong>Mission I: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p> */}
            </div>
          </div>

          <div className="item-container">
            <h3 className="item-container__heading">Campaign Details</h3>
            {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4>
            <p>
              <strong>Background: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Campaign Name:</td>
                  <td>Fluttering Butterflies</td>
                </tr>
                <tr>
                  <td>Campaign ID:</td>
                  <td>#123ABC</td>
                </tr>
                <tr>
                  <td>Players:</td>
                  <td>Player 1, Player 2, Player 3</td>
                </tr>
                <tr>
                  <td>Characters:</td>
                  <td>Character 1, Character 2, Character 3</td>
                </tr>
                <tr>
                  <td>Missions Served:</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
        <div className="cw__33">
          <h2 className="heading">Race and Class Information</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Class Details and Information</h3>
              <h4 className="item-container__subheading">Class Name: {props.theClass.name}</h4>
              <h4 className="item-container__terheading">Common Name: {props.theClass.commonName}</h4>
              <p>
                <em>"{props.theClass.quote}"</em>
              </p>
              <p>{props.theClass.description}</p>
              <p>Specializations:</p>
              <table>
                <tbody>
                  <tr>
                    <td>Strength Physique:</td>
                    <td>{props.theClass.specializations.phyStrength}</td>
                  </tr>
                  <tr>
                    <td>Constitution Physique:</td>
                    <td>{props.theClass.specializations.phyHealth}</td>
                  </tr>
                  <tr>
                    <td>Academic Intelligence:</td>
                    <td>{props.theClass.specializations.intIntelligence}</td>
                  </tr>
                  <tr>
                    <td>Technical Intelligence:</td>
                    <td>{props.theClass.specializations.intTechnology}</td>
                  </tr>
                  <tr>
                    <td>Reflex Dexterity:</td>
                    <td>{props.theClass.specializations.refDexterity}</td>
                  </tr>
                  <tr>
                    <td>Speed Dexterity:</td>
                    <td>{props.theClass.specializations.refReaction}</td>
                  </tr>
                  <tr>
                    <td>Speech Charisma:</td>
                    <td>{props.theClass.specializations.chaCharisma}</td>
                  </tr>
                  <tr>
                    <td>Performance Charisma:</td>
                    <td>{props.theClass.specializations.chaPerform}</td>
                  </tr>
                  <tr>
                    <td>Ranged Combat:</td>
                    <td>{props.theClass.specializations.comRanged}</td>
                  </tr>
                  <tr>
                    <td>Melee Combat:</td>
                    <td>{props.theClass.specializations.comMelee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Race Details and Information</h3>
              <h4 className="item-container__subheading">Race Name: {props.theRace.name}</h4>
              <h4 className="item-container__terheading">Common Name: {props.theRace.commonName}</h4>
              <p>
                <em>"{props.theRace.quote}"</em>
              </p>
              <p>{props.theRace.description}</p>
              <p>More Information:</p>
              <table>
                <tbody>
                  <tr>
                    <td>Location:</td>
                    <td>{props.theRace.location}</td>
                  </tr>
                  <tr>
                    <td>Climate:</td>
                    <td>{props.theRace.climate}</td>
                  </tr>
                  <tr>
                    <td>Size:</td>
                    <td>{props.theRace.size}</td>
                  </tr>
                  <tr>
                    <td>Lifespan:</td>
                    <td>{props.theRace.lifespan}</td>
                  </tr>
                  <tr>
                    <td>Personality:</td>
                    <td>{props.theRace.personality}</td>
                  </tr>
                  <tr>
                    <td>Friends:</td>
                    <td>{props.theRace.friends}</td>
                  </tr>
                  <tr>
                    <td>Enemies:</td>
                    <td>{props.theRace.enemies}</td>
                  </tr>
                </tbody>
              </table>
              <p>Specializations:</p>
              <table>
                <tbody>
                  <tr>
                    <td>Strength Physique:</td>
                    <td>{props.theRace.specializations.phyStrength}</td>
                  </tr>
                  <tr>
                    <td>Constitution Physique:</td>
                    <td>{props.theRace.specializations.phyHealth}</td>
                  </tr>
                  <tr>
                    <td>Academic Intelligence:</td>
                    <td>{props.theRace.specializations.intIntelligence}</td>
                  </tr>
                  <tr>
                    <td>Technical Intelligence:</td>
                    <td>{props.theRace.specializations.intTechnology}</td>
                  </tr>
                  <tr>
                    <td>Reflex Dexterity:</td>
                    <td>{props.theRace.specializations.refDexterity}</td>
                  </tr>
                  <tr>
                    <td>Speed Dexterity:</td>
                    <td>{props.theRace.specializations.refReaction}</td>
                  </tr>
                  <tr>
                    <td>Speech Charisma:</td>
                    <td>{props.theRace.specializations.chaCharisma}</td>
                  </tr>
                  <tr>
                    <td>Performance Charisma:</td>
                    <td>{props.theRace.specializations.chaPerform}</td>
                  </tr>
                  <tr>
                    <td>Ranged Combat:</td>
                    <td>{props.theRace.specializations.comRanged}</td>
                  </tr>
                  <tr>
                    <td>Melee Combat:</td>
                    <td>{props.theRace.specializations.comMelee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__33">
          <h2 className="heading">Character Information</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Character Description</h3>
              <h4 className="item-container__subheading">For {charSheetState.charSheet.characterName}</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Age:</td>
                    <td>{charSheetState.charSheet.characterDescription.age} years old</td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td>{charSheetState.charSheet.characterDescription.weight} lbs.</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>{charSheetState.charSheet.characterDescription.height} ft.</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{charSheetState.charSheet.characterDescription.gender}</td>
                  </tr>
                  <tr>
                    <td>Skin Tone:</td>
                    <td>{charSheetState.charSheet.characterDescription.skinTone}</td>
                  </tr>
                  <tr>
                    <td>Eye Color:</td>
                    <td>{charSheetState.charSheet.characterDescription.eyeColor}</td>
                  </tr>
                  <tr>
                    <td>Hair Color:</td>
                    <td>{charSheetState.charSheet.characterDescription.hairColor}</td>
                  </tr>
                  <tr>
                    <td>Hair Length:</td>
                    <td>{charSheetState.charSheet.characterDescription.hairLength}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Character Background</h3>
              <h4 className="item-container__subheading">For {charSheetState.charSheet.characterName}</h4>
              <p>
                <strong>Who were your parents? How were you raised? Do you have any close family?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q1}
              </p>

              <p>
                <strong>Where/From whom did you learn your skills?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q2}
              </p>

              <p>
                <strong>Name your 3 most important personal beliefs:</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q3}
              </p>

              <p>
                <strong>Name 3 or more character flaws that are most likely to trouble you:</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q4}
              </p>

              <p>
                <strong>What do you secretly fear even in times of easy-going peace? Why?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q5}
              </p>

              <p>
                <strong>Are you ({charSheetState.charSheet.characterName}) a hero? Why or why not?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q6}
              </p>

              <p>
                <strong>What are your goals (both long and short term)?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q7}
              </p>

              <p>
                <strong>Are you ({charSheetState.charSheet.characterName}) merciful? Why or why not?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q8}
              </p>

              <p>
                <strong>Why are you an adventurer?</strong>
                <br />
                {charSheetState.charSheet.characterBackground.q9}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
