import React from "react"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"
import { default as Card } from "../../card-container/card-container.component"

// display components
import AbilityCardInfo from "../ability-card-info/ability-card-info.component"

const AbilityCardInColumn = ({ ability }) => {
  const { name, type, associatedStat, description, difficulty, equipmentName, effects } = ability
  return (
    <Column width={25}>
      <Card
        fullHeight
        heading={name}
        subheading={type}
        terheading={`${equipmentName ? `for ${equipmentName}` : ""}`}
      >
        <AbilityCardInfo
          description={description}
          difficulty={difficulty}
          effects={effects}
          associatedStat={associatedStat}
        />
      </Card>
    </Column>
  )
}

export default AbilityCardInColumn
