import React from "react"

import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

const DisplayEquippedItems = ({ equippedItems, unequip, campaignSheet }) => (
  <>
    {equippedItems.map(({ name, category, uses, id }) => (
      <div key={id} className="equipped-inventory-items-display">
        <p>
          <strong>{name}: </strong>
        </p>
        <ul>
          <li>
            <em>Uses:</em> {uses}
          </li>
          <li>
            <em>Category:</em> {category}
          </li>
        </ul>
        {unequip ? <EquipAndUnequipActions equipped isEquippedList type="ITEM" id={id} /> : null}
        {campaignSheet ? <p className="actions">SHOW MORE</p> : null}
      </div>
    ))}
  </>
)

export default DisplayEquippedItems
