import React from "react"
import { connect } from "react-redux"

// dispatch actions
import { setAsFriend, setAsEnemy } from "../../../redux/campaign-sheet/pages/pages.actions"

const MissionCardActions = ({ enemy, id, setAsFriend, setAsEnemy }) => (
  <>
    <p className="actions">
      <span onClick={() => setAsFriend(id)} className={!enemy ? "true" : ""}>
        FRIEND
      </span>{" "}
      |{" "}
      <span onClick={() => setAsEnemy(id)} className={enemy ? "true" : ""}>
        ENEMY
      </span>{" "}
    </p>
  </>
)

const mapDispatchToProps = (dispatch) => ({
  setAsFriend: (npcID) => dispatch(setAsFriend(npcID)),
  setAsEnemy: (npcID) => dispatch(setAsEnemy(npcID)),
})

export default connect(null, mapDispatchToProps)(MissionCardActions)
