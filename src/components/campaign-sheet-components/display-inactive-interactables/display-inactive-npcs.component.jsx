import React from "react"

import ActivateAndDeactivateActions from "../card-actions/activate-deactivate-actions.component"

const DisplayInactiveNPCS = ({ inactiveNPCS }) => {
  return (
    <>
      {inactiveNPCS.map((npc, index) => (
        <div key={index}>
          <p>
            <strong>{npc.characterName}: </strong> {npc.enemy ? "Enemy" : "Friend"}
          </p>
          <ActivateAndDeactivateActions type="NPC" id={npc.id} active={npc.active} />
        </div>
      ))}
    </>
  )
}

export default DisplayInactiveNPCS
