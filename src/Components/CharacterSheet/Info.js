import React, { useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

import ViewRace from "../CharacterSheet/Views/ViewRace"
import ViewClass from "../CharacterSheet/Views/ViewClass"

function Info() {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)

  console.log(charSheetState)
  const deleteCharacterLog = (e, id) => {
    // if (window.confirm("Are you sure you want to delete this character log? This action cannot be undone.")) {
    //   Axios.post("/character/deletecharacterlog", {
    //     CSID: props.CSID,
    //     id: id,
    //   })
    //     .then(function (response) {
    //       console.log(response)
    //       charSheetDispatch({
    //         type: "deleteCharacterLog",
    //         value: id,
    //       })
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
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
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "newCharacterLog" })
              }}
            >
              Add a New Character Log
            </button>

            <div className="item-container" style={{ display: "flex", flexDirection: "column-reverse" }}>
              {charSheetState.charSheet.characterLog.map((log) => {
                return (
                  <p key={log.id}>
                    <strong>{log.title}: </strong>
                    {log.details}

                    <p style={{ textAlign: "right", margin: "0", color: "darkgray" }}>
                      <span
                        onClick={() => {
                          charSheetDispatch({ type: "showPopupForm" })
                          charSheetDispatch({ type: "changePopupForm", data: "editCharacterLog" })
                        }}
                        className="hg__fake-link"
                      >
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
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "" })
                }}
              >
                Join a Campaign
              </button>
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
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "" })
              }}
            >
              Join a Campaign
            </button>
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
            <ViewClass data={charSheetState.charSheet.class} />
            <ViewRace data={charSheetState.charSheet.race} />
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
