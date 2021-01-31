import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// display components
import MissionCardActions from "../mission-card-actions/mission-card-actions.component"

const MissionCard = ({ mission: { complete, date, name, notes, id, planned, current } }) => (
  <Card blue heading={name} subheading={complete ? `Completed ${date}` : `Planned for ${date}`}>
    <p>{notes}</p>
    <p className="actions">
      <MissionCardActions id={id} complete={complete} planned={planned} current={current} />
    </p>
    <p className="actions">EDIT | DELETE</p>
  </Card>
)

export default MissionCard
