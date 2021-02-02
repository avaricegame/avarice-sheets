import React from "react"

import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

const DisplayEquippedWearables = ({ newEquippedWearables, unequip, campaignSheet }) => (
  <>
    {newEquippedWearables.map(({ id, name, bodyArea, armourValue, augments }) => (
      <div key={bodyArea} className="equipped-inventory-items-display">
        <p>
          <strong>
            {bodyArea}: {name}
          </strong>
        </p>
        <ul>
          <li>
            <em>Armour Value:</em> {armourValue}
          </li>
          <li>
            <em>Augments:</em> {augments}
          </li>
        </ul>
        {unequip && name ? (
          <EquipAndUnequipActions equipped isEquippedList type="WEARABLE" id={id} />
        ) : null}
        {campaignSheet ? <p className="actions">SHOW MORE</p> : null}
      </div>
    ))}
  </>
)

export default DisplayEquippedWearables
