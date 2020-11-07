import React from "react"

//import StateContext from "../../../StateContext"

import Popup from "../../Popup"

function MakeCheck(props) {
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
    <Popup popupName="Make a Check">
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
    </Popup>
  )
}

export default MakeCheck
