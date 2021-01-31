import React from "react"

const DisplayEquippedWeapons = ({ equippedWeapons, unequip, campaignSheet }) => (
  <>
    {equippedWeapons.map(({ name, rangedMelee, proficiencyCode, damage, id }) => (
      <div key={id}>
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
        <p className="actions">{campaignSheet ? "SHOW MORE" : unequip ? "UNEQUIP" : ""}</p>
      </div>
    ))}
  </>
)

export default DisplayEquippedWeapons
