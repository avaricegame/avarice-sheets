import React from "react"

import WearableCard from "../wearable-card/wearable-card.component"

const DisplayWearables = ({ wearables, blue, quatheading, edit, equip, activate, moveEdit }) => (
  <>
    {wearables.map((wearable) => (
      <WearableCard
        key={wearable.id}
        wearable={wearable}
        blue={blue}
        quatheading={quatheading}
        edit={edit}
        equip={equip}
        activate={activate}
        moveEdit={moveEdit}
      />
    ))}
  </>
)

export default DisplayWearables
