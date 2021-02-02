import React from "react"

import ActivateAndDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayInactiveWearables = ({ inactiveWearables }) => {
  return (
    <>
      {inactiveWearables.map((wearable, index) => (
        <div key={index}>
          <p>
            <strong>{wearable.name}: </strong> {wearable.description}
          </p>
          <ActivateAndDeactivateActions type="WEARABLE" id={wearable.id} active={wearable.active} />
        </div>
      ))}
    </>
  )
}

export default DisplayInactiveWearables
