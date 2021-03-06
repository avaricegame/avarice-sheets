import React from "react"

import { default as Card } from "../../card-container/card-container.component"

import EditAndDeleteActions from "../card-actions/edit-and-delete-actions.component"
import ActivateDeactivateActions from "../../campaign-sheet-components/card-actions/activate-deactivate-actions.component"
import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

import PopupFormTypes from "../../popup-form/popup-form.types"

const WearableCard = ({
  wearable,
  blue,
  quatheading,
  edit,
  equip,
  activate,
  moveEdit,
  whatToEdit,
}) => {
  const { name, id, armourValue, bodyArea, description, equipped, statModifiers, active } = wearable
  return (
    <Card
      blue={blue}
      heading={name}
      subheading={bodyArea}
      terheading={`${equipped ? "Equipped" : ""}`}
      quatheading={quatheading ? quatheading : ""}
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
      <div className="actions-div">
        {equip ? (
          <EquipAndUnequipActions type="WEARABLE" id={id} equipped={equipped} bodyArea={bodyArea} />
        ) : null}
        {activate ? <ActivateDeactivateActions type="WEARABLE" id={id} active={active} /> : null}
        {edit || moveEdit ? (
          <EditAndDeleteActions
            moveEdit={moveEdit}
            whatToEdit={whatToEdit}
            objToEdit={wearable}
            popupFormType={PopupFormTypes.ADD_A_NEW_WEARABLE}
          />
        ) : null}
      </div>
    </Card>
  )
}

export default WearableCard
