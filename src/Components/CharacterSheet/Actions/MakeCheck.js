import React, { useContext } from "react"

//import StateContext from "../../../StateContext"
import DispatchContext from "../../../DispatchContext"

function MakeCheck(props) {
  const appDispatch = useContext(DispatchContext)
  // const charSheetState = useContext(StateContext)
  // const close = () => {
  //   props.makeCheckHandler(false)
  // }
  // const PHY = () => {
  //   let num = Math.ceil(Math.random() * 20)
  //   let mod = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[0] + props.baseEquipmentMod[0] + charSheetState.charSheet.baseStatsTempMod[0] + props.theRace.baseStats[0] + props.theClass.baseStats[0]
  //   alert(`Your D20 roll was a ${num}. The modifier value for your Physique (PHY) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  // }
  // const INT = () => {
  //   let num = Math.ceil(Math.random() * 20)
  //   let mod = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[1] + props.baseEquipmentMod[1] + charSheetState.charSheet.baseStatsTempMod[1] + props.theRace.baseStats[1] + props.theClass.baseStats[1]
  //   alert(`Your D20 roll was a ${num}. The modifier value for your Intelligence (INT) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  // }
  // const REF = () => {
  //   let num = Math.ceil(Math.random() * 20)
  //   let mod = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[2] + props.baseEquipmentMod[2] + charSheetState.charSheet.baseStatsTempMod[2] + props.theRace.baseStats[2] + props.theClass.baseStats[2]
  //   alert(`Your D20 roll was a ${num}. The modifier value for your Reflex (REF) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  // }
  // const CHA = () => {
  //   let num = Math.ceil(Math.random() * 20)
  //   let mod = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].baseStats[3] + props.baseEquipmentMod[3] + charSheetState.charSheet.baseStatsTempMod[3] + props.theRace.baseStats[3] + props.theClass.baseStats[3]
  //   alert(`Your D20 roll was a ${num}. The modifier value for your Charisma (CHA) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  // }

  return (
    <div className="popupform__background">
      <div className="popupform__popup popupform__popup--whitebg">
        <h3 className="popupform__heading">Make a Skill Check</h3>
        <div className="cw__container cw__container--popup">
          <h3 className="item-container__subheading">Physique</h3>
          {/* <button className="button" onClick={PHY}>
          Physique Check
        </button> */}
          <button className="button">Strength</button>
          <button className="button">Constitution</button>
          <h3 className="item-container__subheading">Intelligence</h3>
          {/* <button className="button" onClick={INT}>
          Intelligence Check
        </button> */}
          <button className="button">Academic</button>
          <button className="button">Technical</button>
          <h3 className="item-container__subheading">Dexterity</h3>
          {/* <button className="button" onClick={REF}>
          Reflex Check
        </button> */}
          <button className="button">Reflex</button>
          <button className="button">Speed</button>
          <h3 className="item-container__subheading">Charisma</h3>
          {/* <button className="button" onClick={CHA}>
          Charisma Check
        </button> */}
          <button className="button">Speech</button>
          <button className="button">Peformance</button>
        </div>
        <div className="popupform__button-panel">
          <button
            onClick={() => {
              appDispatch({ type: "hidePopupForm" })
            }}
            className="popupform__close-button popupform__close-button--fullwidth"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default MakeCheck

// import React, { useState, useContext } from "react"

// import PopupForm from "../../PopupForm"

// import StateContext from "../../../StateContext"

// function UseSkill(props) {
//   const charSheetState = useContext(StateContext)
//   const [currentSkill, setCurrentSkill] = useState("a")
//   const [corrIndex, setCorrIndex] = useState()
//   const close = () => {
//     props.useSkillHandler(false)
//   }
//   const setCurrentSkillHandler = (e) => {
//     if (e.target.value !== "a") {
//       setCorrIndex(e.target.value)
//       setCurrentSkill(charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].skills[e.target.value])
//     } else {
//       setCurrentSkill("a")
//     }
//   }
//   const displaySkill = () => {
//     if (currentSkill !== "a") {
//       return (
//         <p>
//           <strong>{`Your modifier value for ${currentSkill.name} is ${currentSkill.natMod + props.equipmentMod[corrIndex]}`}</strong>
//         </p>
//       )
//     }
//   }
//   const submitHandler = (e) => {
//     e.preventDefault()
//     if (currentSkill !== "a") {
//       let num = Math.ceil(Math.random() * 20)
//       window.confirm(`Your D20 roll for ${currentSkill.name} was ${num}. Your modifier value for ${currentSkill.name} is ${currentSkill.natMod + props.equipmentMod[corrIndex]}, so your adjusted roll is ${num + currentSkill.natMod + props.equipmentMod[corrIndex]}`)
//       close()
//     }
//   }
//   return (
//     <PopupForm formName="Use a Skill" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
//       <fieldset>
//         <label>Select a Skill:</label>
//         <select style={{ marginBottom: "1rem" }} onChange={(e) => setCurrentSkillHandler(e)}>
//           <option value="a"></option>
//           {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].skills.map((skill, index) => {
//             return (
//               <option value={index} key={index}>
//                 {skill.name}
//               </option>
//             )
//           })}
//         </select>
//         {displaySkill()}
//         <p>{currentSkill !== "a" ? `Click 'Submit' to Roll a D20 For Performing ${currentSkill.name}` : "Please Select a Skill"}</p>
//       </fieldset>
//     </PopupForm>
//   )
// }

// export default UseSkill
