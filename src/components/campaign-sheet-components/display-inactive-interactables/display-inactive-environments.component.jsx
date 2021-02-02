import React from "react"

import ActivateAndDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayInactiveEnvironments = ({ inactiveEnvironments }) => {
  return (
    <>
      {inactiveEnvironments.map((environment, index) => (
        <div key={index}>
          <p>
            <strong>{environment.name}: </strong> {environment.description}
          </p>
          <ActivateAndDeactivateActions
            type="ENVIRONMENT"
            id={environment.id}
            active={environment.active}
          />
        </div>
      ))}
    </>
  )
}

export default DisplayInactiveEnvironments
