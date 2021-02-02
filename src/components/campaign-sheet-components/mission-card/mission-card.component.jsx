import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// display components
import MissionCardActions from "../card-actions/mission-card-actions.component"
import EditAndDeleteActions from "../../shared-sheets-components/edit-and-delete-actions/edit-and-delete-actions.component"

class MissionCard extends React.Component {
  render() {
    const { complete, date, name, notes, id, planned, current } = this.props.mission

    console.log(id)

    return (
      <Card blue heading={name} subheading={complete ? `Completed ${date}` : `Planned for ${date}`}>
        <p>{notes}</p>
        <p className="actions">
          <MissionCardActions id={id} complete={complete} planned={planned} current={current} />
        </p>
        <EditAndDeleteActions />
      </Card>
    )
  }
}

export default MissionCard
