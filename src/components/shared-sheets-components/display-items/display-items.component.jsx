import React from "react"

import ItemCard from "../item-card/item-card.component"

const DisplayItems = ({
  items,
  blue,
  quatheading,
  edit,
  equip,
  activate,
  moveEdit,
  whatToEdit,
}) => (
  <>
    {items.map((item) => (
      <ItemCard
        item={item}
        blue={blue}
        quatheading={quatheading}
        edit={edit}
        equip={equip}
        activate={activate}
        moveEdit={moveEdit}
        key={item.id}
        whatToEdit={whatToEdit}
      />
    ))}
  </>
)

export default DisplayItems
