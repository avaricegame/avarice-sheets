import React from "react"

import NPCCard from "../../campaign-sheet-components/npc-card/npc-card.component"

const DisplayNPCS = ({ npcs, activate, moveEdit, whatToEdit }) => (
  <>
    {npcs.map((npc, index) => (
      <NPCCard
        moveEdit={moveEdit}
        activate={activate}
        npc={npc}
        key={index}
        whatToEdit={whatToEdit}
      />
    ))}
  </>
)

export default DisplayNPCS
