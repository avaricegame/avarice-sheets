import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const MissionCard = ({ mission: { complete, date, name, notes } }) => (
  <Card blue heading={name} subheading={complete ? `Completed ${date}` : `Planned for ${date}`}>
    <p>{notes}</p>
  </Card>
)

export default MissionCard
