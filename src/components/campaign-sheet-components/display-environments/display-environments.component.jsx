import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayEnvironments = ({ environments }) => (
  <>
    {environments.map((environment, index) => {
      const { name, hp, description, effects } = environment
      return (
        <Card blue heading={name} subheading={`Hit Points: ${hp}`} key={index}>
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

export default DisplayEnvironments
