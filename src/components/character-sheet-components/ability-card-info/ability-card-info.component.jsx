import React from "react"

const AbilityCardInfo = ({ difficulty, associatedStat, description, effects }) => (
  <>
    <p>
      <strong>Difficulty: </strong>
      {difficulty}
    </p>
    <p>
      <strong>Associated Stat: </strong>
      {associatedStat}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
    <p>
      <strong>Effects: </strong>
      {effects ? "yes" : "n/a"}
    </p>
  </>
)

export default AbilityCardInfo
