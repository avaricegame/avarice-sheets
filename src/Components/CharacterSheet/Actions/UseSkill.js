import React, { useState, useContext } from "react"

import StateContext from "../../../StateContext"

function UseSkill(props) {
  const charSheetState = useContext(StateContext)
  const [currentSkill, setCurrentSkill] = useState("a")
  const [corrIndex, setCorrIndex] = useState()
  const close = () => {
    props.useSkillHandler(false)
  }
  const setCurrentSkillHandler = (e) => {
    if (e.target.value !== "a") {
      setCorrIndex(e.target.value)
      setCurrentSkill(charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].skills[e.target.value])
    } else {
      setCurrentSkill("a")
    }
  }
  const displaySkill = () => {
    if (currentSkill !== "a") {
      return (
        <p>
          <strong>{`Your modifier value for ${currentSkill.name} is ${currentSkill.natMod + props.equipmentMod[corrIndex]}`}</strong>
        </p>
      )
    }
  }
  const submitHandler = (e) => {
    if (currentSkill !== "a") {
      let num = Math.ceil(Math.random() * 20)
      window.confirm(`Your D20 roll for ${currentSkill.name} was ${num}. Your modifier value for ${currentSkill.name} is ${currentSkill.natMod + props.equipmentMod[corrIndex]}, so your adjusted roll is ${num + currentSkill.natMod + props.equipmentMod[corrIndex]}`)
    }
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form>
          <fieldset>
            <h6 className="edit-h6">Use a Skill</h6>
            <label>Select a Skill:</label>
            <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentSkillHandler(e)}>
              <option value="a"></option>
              {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].skills.map((skill, index) => {
                return (
                  <option value={index} key={index}>
                    {skill.name}
                  </option>
                )
              })}
            </select>
            {displaySkill()}
            <input onClick={(e) => submitHandler(e)} type="submit" className="submit-button" value={currentSkill !== "a" ? `Roll D20 For Performing ${currentSkill.name}` : "Please Select a Skill"} />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default UseSkill
