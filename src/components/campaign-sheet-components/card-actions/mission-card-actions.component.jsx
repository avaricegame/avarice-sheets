import React from "react"
import { connect } from "react-redux"

// dispatch actions
import {
  setCurrentMission,
  togglePlanned,
  toggleComplete,
} from "../../../redux/campaign-sheet/pages/pages.actions"

class MissionCardActions extends React.Component {
  render() {
    const { setCurrentMission, toggleComplete, togglePlanned, id, current, complete } = this.props

    return (
      <>
        <span onClick={() => setCurrentMission(id)} className={current ? "true" : ""}>
          CURRENT
        </span>{" "}
        |{" "}
        <span onClick={() => togglePlanned(id)} className={!complete ? "true" : ""}>
          PLANNED
        </span>{" "}
        |{" "}
        <span onClick={() => toggleComplete(id)} className={complete ? "true" : ""}>
          COMPLETE
        </span>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentMission: (missionID) => dispatch(setCurrentMission(missionID)),
  toggleComplete: (missionID) => dispatch(toggleComplete(missionID)),
  togglePlanned: (missionID) => dispatch(togglePlanned(missionID)),
})

export default connect(null, mapDispatchToProps)(MissionCardActions)
