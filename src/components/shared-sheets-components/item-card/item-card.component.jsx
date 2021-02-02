import React from "react"

import { default as Card } from "../../card-container/card-container.component"

import EditAndDeleteActions from "../card-actions/edit-and-delete-actions.component"
import ActivateDeactivateActions from "../../campaign-sheet-components/card-actions/activate-deactivate-actions.component"
import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

import PopupFormTypes from "../../popup-form/popup-form.types"

const ItemCard = ({ item, blue, quatheading, edit, equip, activate, moveEdit, whatToEdit }) => {
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
        {edit || moveEdit ? (
          <EditAndDeleteActions
            moveEdit={moveEdit}
            whatToEdit={whatToEdit}
            objToEdit={item}
            popupFormType={PopupFormTypes.ADD_A_NEW_ITEM}
          />
        ) : null}
      </div>
    </Card>
  )
}

export default ItemCard
