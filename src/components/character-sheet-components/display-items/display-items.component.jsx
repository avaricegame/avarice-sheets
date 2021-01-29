import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayItems = ({ items }) => (
  <>
    {items.map((item) => {
      const { name, id, equipped, description, category, uses, effects } = item
      return (
        <Card
          heading={name}
          subheading={category}
          terheading={`${equipped ? "Equipped" : ""}`}
          key={id}
        >
          <p>
            <strong>Uses: </strong>
            {uses}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Effects: </strong>
            {effects.name ? "yes" : "n/a"}
          </p>
        </Card>
      )
    })}
  </>
)

export default DisplayItems
