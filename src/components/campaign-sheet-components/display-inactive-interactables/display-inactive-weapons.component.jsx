import React from "react"

import ActivateAndDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayInactiveWeapons = ({ inactiveWeapons }) => {
  return (
    <>
      {inactiveWeapons.map((weapon, index) => (
        <div key={index}>
          <p>
            <strong>{weapon.name}: </strong> {weapon.description}
          </p>
          <ActivateAndDeactivateActions type="WEAPON" id={weapon.id} active={weapon.active} />
        </div>
      ))}
    </>
  )
}

export default DisplayInactiveWeapons
