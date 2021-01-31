import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayWearables = ({ wearables, blue, quatheading, edit, equip, activate, moveEdit }) => (
  <>
    {wearables.map((wearable) => {
      const {
        name,
        id,
        armourValue,
        bodyArea,
        description,
        equipped,
        statModifiers,
        abilities,
      } = wearable
      return (
        <Card
          blue={blue}
          heading={name}
          subheading={bodyArea}
          terheading={`${equipped ? "Equipped" : ""}`}
          quatheading={quatheading ? quatheading : ""}
          key={id}
        >
          <p>
            <strong>Armour Value: </strong>
            {armourValue}
          </p>
          <table>
            <thead>
              <tr>
                <th>Stat Modifiers:</th>
              </tr>
            </thead>
            <tbody>
              {statModifiers.map(({ modifier, value }) => {
                if (value !== 0) {
                  return (
                    <tr key={modifier}>
                      <td>
                        <span className="uppercase">{modifier}</span>
                      </td>
                      <td>{value}</td>
                    </tr>
                  )
                } else {
                  return null
                }
              })}
            </tbody>
          </table>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Abilities: </strong>
            {abilities.length}
          </p>
          {equip ? <p className="actions">EQUIP | UNEQUIP</p> : null}
          {activate ? <p className="actions">ACTIVATE | DEACTIVATE</p> : null}
          {moveEdit ? <p className="actions">COPY | MOVE | EDIT | DELETE</p> : null}
          {edit ? <p className="actions">EDIT | DELETE</p> : null}
        </Card>
      )
    })}
  </>
)

export default DisplayWearables
