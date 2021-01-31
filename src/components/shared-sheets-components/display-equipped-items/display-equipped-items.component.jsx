import React from "react"

const DisplayEquippedItems = ({ equippedItems, unequip, campaignSheet }) => (
  <>
    {equippedItems.map(({ name, category, uses, id }) => (
      <div key={id}>
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
        <p className="actions">{campaignSheet ? "SHOW MORE" : unequip ? "UNEQUIP" : ""}</p>
      </div>
    ))}
  </>
)

export default DisplayEquippedItems
