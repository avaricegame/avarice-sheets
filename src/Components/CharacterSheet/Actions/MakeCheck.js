import React from "react"

function MakeCheck(props) {
  const close = () => {
    props.makeCheckHandler(false)
  }
  const PHY = () => {
    let num = Math.ceil(Math.random() * 20)
    let mod = props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0] + props.baseEquipmentMod[0] + props.charSheet.baseStatsTempMod[0] + props.theRace.baseStats[0] + props.theClass.baseStats[0]
    alert(`Your D20 roll was a ${num}. The modifier value for your Physique (PHY) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  }
  const INT = () => {
    let num = Math.ceil(Math.random() * 20)
    let mod = props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1] + props.baseEquipmentMod[1] + props.charSheet.baseStatsTempMod[1] + props.theRace.baseStats[1] + props.theClass.baseStats[1]
    alert(`Your D20 roll was a ${num}. The modifier value for your Intelligence (INT) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  }
  const REF = () => {
    let num = Math.ceil(Math.random() * 20)
    let mod = props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2] + props.baseEquipmentMod[2] + props.charSheet.baseStatsTempMod[2] + props.theRace.baseStats[2] + props.theClass.baseStats[2]
    alert(`Your D20 roll was a ${num}. The modifier value for your Reflex (REF) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  }
  const CHA = () => {
    let num = Math.ceil(Math.random() * 20)
    let mod = props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3] + props.baseEquipmentMod[3] + props.charSheet.baseStatsTempMod[3] + props.theRace.baseStats[3] + props.theClass.baseStats[3]
    alert(`Your D20 roll was a ${num}. The modifier value for your Charisma (CHA) stat is ${mod}. This makes your adjusted roll ${num + mod}`)
  }

  return (
    <div className="popup-bg">
      <div className="popup">
        <div className="cw__100" style={{ backgroundColor: "whitesmoke", marginTop: ".5rem", marginBottom: ".5rem" }}>
          <h6 className="edit-h6">Make a Check</h6>
          <div className="cw__container">
            <button onClick={PHY}>Physique Check</button>
            <button onClick={INT}>Intelligence Check</button>
            <button onClick={REF}>Reflex Check</button>
            <button onClick={CHA}>Charisma Check</button>
          </div>
        </div>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem", color: "whitesmoke" }}>
          Close
        </div>
      </div>
    </div>
  )
}

export default MakeCheck
