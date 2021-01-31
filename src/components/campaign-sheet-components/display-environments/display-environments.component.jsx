import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// display components
import CopyMoveEditDeleteActions from "../copy-move-edit-delete-actions/copy-move-edit-delete-actions.component"

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
          <div className="actions-div">
            {activate ? <p className="actions">ACTIVATE | DEACTIVATE</p> : null}
            {moveEdit ? <CopyMoveEditDeleteActions /> : null}
          </div>
        </Card>
      )
    })}
  </>
)

export default DisplayEnvironments
