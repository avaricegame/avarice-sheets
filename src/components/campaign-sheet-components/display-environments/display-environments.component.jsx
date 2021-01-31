import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayEnvironments = ({ environments, activate, moveEdit }) => (
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
          {activate ? <p className="actions">ACTIVATE | DEACTIVATE</p> : null}
          {moveEdit ? <p className="actions">COPY | MOVE | EDIT | DELETE</p> : null}
        </Card>
      )
    })}
  </>
)

export default DisplayEnvironments
