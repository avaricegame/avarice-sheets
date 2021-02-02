import React from "react"

import { default as Card } from "../../card-container/card-container.component"

import EditAndDeleteActions from "../card-actions/edit-and-delete-actions.component"
import CopyMoveEditDeleteActions from "../../campaign-sheet-components/card-actions/copy-move-edit-delete-actions.component"
import ActivateDeactivateActions from "../../campaign-sheet-components/card-actions/activate-deactivate-actions.component"
import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

const ItemCard = ({ item, blue, quatheading, edit, equip, activate, moveEdit }) => {
  const { name, id, equipped, description, category, uses, effects, active } = item
  return (
    <Card
      blue={blue}
      heading={name}
      subheading={category}
      terheading={`${equipped ? "Equipped" : ""}`}
      quatheading={quatheading ? quatheading : ""}
    >
      <p>
        <strong>Uses: </strong>
        {uses}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Effects: </strong>
        {effects.name ? "yes" : "n/a"}
      </p>
      <div className="actions-div">
        {equip ? <EquipAndUnequipActions type="ITEM" id={id} equipped={equipped} /> : null}
        {activate ? <ActivateDeactivateActions type="ITEM" id={id} active={active} /> : null}
        {moveEdit ? <CopyMoveEditDeleteActions /> : null}
        {edit ? <EditAndDeleteActions /> : null}
      </div>
    </Card>
  )
}

export default ItemCard
