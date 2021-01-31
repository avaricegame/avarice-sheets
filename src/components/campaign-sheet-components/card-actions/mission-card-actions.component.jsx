import React from "react"
import { connect } from "react-redux"

// dispatch actions
import {
  setCurrentMission,
  togglePlanned,
  toggleComplete,
} from "../../../redux/campaign-sheet/pages/pages.actions"

const MissionCardActions = ({
  complete,
  id,
  planned,
  current,
  setCurrentMission,
  toggleComplete,
  togglePlanned,
}) => (
  <>
    <span onClick={() => setCurrentMission(id)} className={current ? "true" : ""}>
      CURRENT
    </span>{" "}
    |{" "}
    <span onClick={() => togglePlanned(id)} className={planned ? "true" : ""}>
      PLANNED
    </span>{" "}
    |{" "}
    <span onClick={() => toggleComplete(id)} className={complete ? "true" : ""}>
      COMPLETE
    </span>
  </>
)

const mapDispatchToProps = (dispatch) => ({
  setCurrentMission: (missionID) => dispatch(setCurrentMission(missionID)),
  toggleComplete: (missionID) => dispatch(toggleComplete(missionID)),
  togglePlanned: (missionID) => dispatch(togglePlanned(missionID)),
})

export default connect(null, mapDispatchToProps)(MissionCardActions)
