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
  const [PHY, setPHY] = useState(charSheetState.charSheet.baseStatsTempMod[0])
  const [INT, setINT] = useState(charSheetState.charSheet.baseStatsTempMod[1])
  const [REF, setREF] = useState(charSheetState.charSheet.baseStatsTempMod[2])
  const [CHA, setCHA] = useState(charSheetState.charSheet.baseStatsTempMod[3])
  const phyChangeHandler = (e) => {
    setPHY(parseInt(e.target.value))
    Axios.post("/character/editbasestat", {
      CSID: props.CSID,
      statsArray: [parseInt(e.target.value), INT, REF, CHA],
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "updateBaseStatsTempMod", value: [PHY, INT, REF, CHA] })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const intChangeHandler = (e) => {
    setINT(parseInt(e.target.value))
    Axios.post("/character/editbasestat", {
      CSID: props.CSID,
      statsArray: [PHY, parseInt(e.target.value), REF, CHA],
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "updateBaseStatsTempMod", value: [PHY, INT, REF, CHA] })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const refChangeHandler = (e) => {
    setREF(parseInt(e.target.value))
    Axios.post("/character/editbasestat", {
      CSID: props.CSID,
      statsArray: [PHY, INT, parseInt(e.target.value), CHA],
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "updateBaseStatsTempMod", value: [PHY, INT, REF, CHA] })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const chaChangeHandler = (e) => {
    setCHA(parseInt(e.target.value))
    Axios.post("/character/editbasestat", {
      CSID: props.CSID,
      statsArray: [PHY, INT, REF, parseInt(e.target.value)],
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "updateBaseStatsTempMod", value: [PHY, INT, REF, CHA] })
      })
      .catch(function (error) {
        console.log(error)
      })
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
  function calcBaseStatTotal(num) {
    return charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[num] + props.baseEquipmentMod[num] + charSheetState.charSheet.baseStatsTempMod[num] + props.theRace.baseStats[num] + props.theClass.baseStats[num]
  }

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Stats</h1>
      </div>
      <div className="page-container">
        <div className="cw__50">
          <div className="cw__100 cw__100--adjusted">
            <div className="cw__50--adjusted">
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

            <div className="cw__50--adjusted">
              <h2 className="heading">Proficiencies</h2>
              <div className="cw__container">
                <div className="item-container">
                  <h3 className="item-container__heading">Proficiencies</h3>
                  <h4 className="item-container__subheading">When Performing Attack Actions</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Proficiency</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].proficiency.map((prof, index) => {
                        return (
                          <tr key={index}>
                            <td>{prof.name}</td>
                            <td>{prof.value}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cw__50">
          <h2 className="heading">Base Stats</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Base Stats Table</h3>
              <h4 className="item-container__subheading">When Performing General Actions</h4>
              <table>
                <thead>
                  <tr>
                    <th>Ability</th>
                    <th>Total</th>
                    <th>Level Ups</th>
                    <th>Equipment Mod</th>
                    <th>Temp Mod</th>
                    <th>Race/Class Mod</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Physique
                      <br /> (PHY)
                    </td>
                    <td>{calcBaseStatTotal(0)}</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[0]}</td>
                    <td>{props.baseEquipmentMod[0]}</td>
                    <td>
                      <input
                        type="number"
                        name="PHY"
                        value={PHY}
                        onChange={(e) => {
                          phyChangeHandler(e)
                        }}
                      />
                    </td>
                    <td>{props.theRace.baseStats[0] + props.theClass.baseStats[0]}</td>
                  </tr>
                  <tr>
                    <td>
                      Intelligence
                      <br /> (INT)
                    </td>
                    <td>{calcBaseStatTotal(1)}</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[1]}</td>
                    <td>{props.baseEquipmentMod[1]}</td>
                    <td>
                      <input
                        type="number"
                        name="INT"
                        value={INT}
                        onChange={(e) => {
                          intChangeHandler(e)
                        }}
                      />
                    </td>
                    <td>{props.theRace.baseStats[1] + props.theClass.baseStats[1]}</td>
                  </tr>
                  <tr>
                    <td>
                      Reflex
                      <br /> (REF)
                    </td>
                    <td>{calcBaseStatTotal(2)}</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[2]}</td>
                    <td>{props.baseEquipmentMod[2]}</td>
                    <td>
                      <input
                        type="number"
                        name="REF"
                        value={REF}
                        onChange={(e) => {
                          refChangeHandler(e)
                        }}
                      />
                    </td>
                    <td>{props.theRace.baseStats[2] + props.theClass.baseStats[2]}</td>
                  </tr>
                  <tr>
                    <td>
                      Charisma
                      <br /> (CHA)
                    </td>
                    <td>{calcBaseStatTotal(3)}</td>
                    <td>{charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[3]}</td>
                    <td>{props.baseEquipmentMod[3]}</td>
                    <td>
                      <input
                        type="number"
                        name="CHA"
                        value={CHA}
                        onChange={(e) => {
                          chaChangeHandler(e)
                        }}
                      />
                    </td>
                    <td>{props.theRace.baseStats[3] + props.theClass.baseStats[3]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="heading">Skills</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Skills Table</h3>
              <h4 className="item-container__subheading">When Performing Skilled Actions</h4>
              <table>
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Total</th>
                    <th>Natural Mod</th>
                    <th>Equipment Mod</th>
                  </tr>
                </thead>
                <tbody>
                  {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].skills.map((skill, index) => {
                    return (
                      <tr key={index}>
                        <td>{skill.name}</td>
                        <td>{skill.natMod + props.equipmentMod[index]}</td>
                        <td>{skill.natMod}</td>
                        <td>{props.equipmentMod[index]}</td>
                      </tr>
                    )
                  })}
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
