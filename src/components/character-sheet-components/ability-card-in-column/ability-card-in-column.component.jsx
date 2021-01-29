import React from "react"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../card-container/card-container.component"

const AbilityCardInColumn = ({ ability }) => {
  const { name, type, associatedStat, description, difficulty, equipmentName } = ability
  return (
    <Column width={25}>
      <Card
        heading={name}
        subheading={type}
        terheading={`${equipmentName ? `for ${equipmentName}` : ""}`}
      >
        <ul>
          <li>Difficulty: {difficulty}</li>
          <li>Associated Stat: {associatedStat}</li>
        </ul>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </Card>
    </Column>
  )
}

export default AbilityCardInColumn
