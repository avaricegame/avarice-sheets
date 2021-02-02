import React from "react"

import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

const DisplayEquippedWeapons = ({ equippedWeapons, unequip, campaignSheet }) => (
  <>
    {equippedWeapons.map(({ name, rangedMelee, proficiencyCode, damage, id }) => (
      <div key={id} className="equipped-inventory-items-display">
        <p>
          <strong>{name}: </strong>
        </p>
        <ul>
          <li>
            <em>Type:</em> {rangedMelee}
          </li>
          <li>
            <em>Damage:</em> {damage}
          </li>
          <li>
            <em>Proficiency:</em> {proficiencyCode}
          </li>
        </ul>
        {unequip ? <EquipAndUnequipActions equipped isEquippedList type="WEAPON" id={id} /> : null}
        {campaignSheet ? <p className="actions">SHOW MORE</p> : null}
      </div>
    ))}
  </>
)

export default DisplayEquippedWeapons
