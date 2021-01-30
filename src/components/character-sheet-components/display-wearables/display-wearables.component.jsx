import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayWearables = ({ wearables }) => (
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
          heading={name}
          subheading={bodyArea}
          terheading={`${equipped ? "Equipped" : ""}`}
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
        </Card>
      )
    })}
  </>
)

export default DisplayWearables
