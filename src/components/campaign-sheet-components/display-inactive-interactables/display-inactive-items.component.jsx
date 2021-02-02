import React from "react"

import ActivateAndDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayInactiveItems = ({ inactiveItems }) => {
  return (
    <>
      {inactiveItems.map((item, index) => (
        <div key={index}>
          <p>
            <strong>{item.name}: </strong> {item.description}
          </p>
          <ActivateAndDeactivateActions type="ITEM" id={item.id} active={item.active} />
        </div>
      ))}
    </>
  )
}

export default DisplayInactiveItems
