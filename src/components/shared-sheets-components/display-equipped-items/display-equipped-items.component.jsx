import React from "react"

const DisplayEquippedItems = ({ equippedItems }) => (
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
      </div>
    ))}
  </>
)

export default DisplayEquippedItems
