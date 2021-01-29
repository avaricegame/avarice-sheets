import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const DisplayWeapons = ({ weapons }) => (
  <>
    {weapons.map((weapon) => {
      const {
        name,
        id,
        size,
        rangedMelee,
        range,
        proficiency,
        equipped,
        description,
        damage,
        critical,
        abilities,
      } = weapon
      return (
        <Card
          heading={name}
          subheading={proficiency}
          terheading={`${equipped ? "Equipped" : ""}`}
          key={id}
        >
          <table>
            <tbody>
              <tr>
                <td>Type:</td>
                <td>{rangedMelee}</td>
              </tr>
              <tr>
                <td>Damage:</td>
                <td>{damage}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{size}</td>
              </tr>
              <tr>
                <td>Range:</td>
                <td>{range}</td>
              </tr>
              <tr>
                <td>Critical:</td>
                <td>{critical}</td>
              </tr>
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

export default DisplayWeapons
