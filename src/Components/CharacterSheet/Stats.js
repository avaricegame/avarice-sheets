import React, { useState, useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Stats(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)
  const openLevelUp = () => {
    props.levelUpHandler(true)
  }
  const openEditLevel = () => {
    //props.editLevelHandler(true)
    if (charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].level !== 0) {
      if (window.confirm("Are you sure you want to remove your last level? This could result in a lot of abilities and level up points.")) {
        Axios.post("/character/removelevel", {
          CSID: props.CSID,
          level: parseInt(charSheetState.charSheet.levelUps.length - 1),
        })
          .then(function (response) {
            //console.log(response)
            charSheetDispatch({ type: "removeLevel" })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    } else {
      alert("You cannot remove a level, because you are already at level 0")
    }
  }
  const addEC = () => {
    Axios.post("/character/addec", {
      CSID: props.CSID,
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "addEC" })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const useEC = () => {
    Axios.post("/character/useec", {
      CSID: props.CSID,
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "useEC" })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Stats</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Levels and Experience</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Level</h3>
              <h4 className="item-container__subheading">You are at Level {charSheetState.charSheet.level}</h4>
              <button className="button" onClick={openLevelUp}>
                Level Up
              </button>
              <button className="button" onClick={openEditLevel}>
                Remove Level
              </button>
              <p>How do I level up? You level up at the end of a mission (or whenever your DM tells you to). When you level up you get to choose a new ability to upgrade or learn from your ability tree.</p>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Excellence Chips</h3>
              <h4 className="item-container__subheading">You have {charSheetState.charSheet.excellenceChips} Excellence Chips</h4>
              <button className="button" onClick={addEC}>
                Add Excellence Chip
              </button>
              <button className="button" onClick={useEC}>
                Use Excellence Chip
              </button>
              <p>Want to earn an excellence chip? Do something epic and make sure the DM is watching! Excellence Chips can be cashed in whenever you'd like for an immediate perfect roll. Use them wisely.</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Tokens</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Skill Tokens</h3>
              <h4 className="item-container__subheading">Physique</h4>
              <table className="specializations-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Strength</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Constitution</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Intelligence</h4>
              <table className="specializations-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Academic</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Technical</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Dexterity</h4>
              <table className="specializations-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Reflex</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Speed</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Charisma</h4>
              <table className="specializations-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Speech</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Performance</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Combat</h4>
              <table className="specializations-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Ranged</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Melee</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <button>Level Up</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>What do the Skill Tokens do?</p>
            <p>Earning skill tokens is how you level up a skill. If you earn three tokens, then you can level up the skill.</p>
            <p>How do I earn Skill Tokens?</p>
            <p>Skill tokens are earned when you successfuly pass a check (D20 roll) for the skills during a campaign.</p>
          </div>
        </div>

        <div className="cw__50">
          <h2 className="heading">Skills</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Skills Table</h3>
              <h4 className="item-container__subheading">Physique</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Strength</td>
                    <td></td>
                    <td></td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.phyStrength}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Constitution</td>
                    <td></td>
                    <td></td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.phyHealth}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Intelligence</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Academic</td>
                    <td></td>
                    <td></td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.intIntelligence}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Technical</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.intTechnology}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Dexterity</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Reflex</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.refDexterity}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Speed</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.refReaction}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Charisma</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Speech</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.chaCharisma}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Performance</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.chaPerform}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="item-container__subheading">Combat</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Ranged</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.comRanged}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Melee</td>
                    <td>Terrible</td>
                    <td>Bad</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.comMelee}</td>
                    <td>Good</td>
                    <td>Great</td>
                    <td>Fantastic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Stats
