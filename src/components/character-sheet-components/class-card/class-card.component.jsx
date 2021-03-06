import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const ClassCard = ({ classInfo }) => {
  const { name, type, quote, description } = classInfo
  return (
    <Card heading="Class Info" subheading={`${name} Class`} terheading={type}>
      <p>
        <strong>"{quote}"</strong>
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </Card>
  )
}

export default ClassCard
