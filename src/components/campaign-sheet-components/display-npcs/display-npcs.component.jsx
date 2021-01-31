import React from "react"

import NPCCard from "../../campaign-sheet-components/npc-card/npc-card.component"

const DisplayNPCS = ({ npcs }) => (
  <>
    {npcs.map((npc, index) => (
      <NPCCard npc={npc} key={index} />
    ))}
  </>
)

export default DisplayNPCS
