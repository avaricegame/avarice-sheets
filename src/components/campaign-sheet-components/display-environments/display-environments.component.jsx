import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// display components
import CopyMoveEditDeleteActions from "../card-actions/copy-move-edit-delete-actions.component"
import ActivateDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayEnvironments = ({ environments, activate, moveEdit }) => (
  <>
    {environments.map((environment, index) => {
      const { name, hp, description, effects, active, id } = environment
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
            {activate ? (
              <ActivateDeactivateActions type="ENVIRONMENT" id={id} active={active} />
            ) : null}
            {moveEdit ? <CopyMoveEditDeleteActions /> : null}
          </div>
        </Card>
      )
    })}
  </>
)

export default DisplayEnvironments
