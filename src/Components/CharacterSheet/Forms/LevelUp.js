import React from "react"
import Axios from "axios"

function LevelUp(props) {
  const close = () => {
    props.levelUpHandler(false)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    Axios.post("/character/levelup", {
      CSID: props.CSID,
      level: props.charSheet.level + 1,
      baseStats: e.target.baseStats.value,
      skills: e.target.skills.value,
      proficiency: e.target.proficiency.value,
      abilityTree: e.target.abilityTree.value,
    })
      .then(function (response) {
        console.log(response)
        props.levelUpHandler(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="popup-bg">
      <div className="popup">
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Level Up</h6>

            <input type="submit" className="submit-button" value="Level Up" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button">
          Close Form
        </div>
      </div>
    </div>
  )
}

export default LevelUp
