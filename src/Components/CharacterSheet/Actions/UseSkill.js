import React, { useState, useContext } from "react"

import PopupForm from "../../PopupForm"

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
    e.preventDefault()
    if (currentSkill !== "a") {
      let num = Math.ceil(Math.random() * 20)
      window.confirm(`Your D20 roll for ${currentSkill.name} was ${num}. Your modifier value for ${currentSkill.name} is ${currentSkill.natMod + props.equipmentMod[corrIndex]}, so your adjusted roll is ${num + currentSkill.natMod + props.equipmentMod[corrIndex]}`)
      close()
    }
  }
  return (
    <PopupForm formName="Use a Skill" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
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
        <p>{currentSkill !== "a" ? `Click 'Submit' to Roll a D20 For Performing ${currentSkill.name}` : "Please Select a Skill"}</p>
      </fieldset>
    </PopupForm>
  )
}

export default UseSkill
