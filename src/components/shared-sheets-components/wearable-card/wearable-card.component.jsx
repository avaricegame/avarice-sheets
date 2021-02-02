import React from "react"

import { default as Card } from "../../card-container/card-container.component"

import EditAndDeleteActions from "../edit-and-delete-actions/edit-and-delete-actions.component"
import CopyMoveEditDeleteActions from "../../campaign-sheet-components/card-actions/copy-move-edit-delete-actions.component"
import ActivateDeactivateActions from "../../campaign-sheet-components/card-actions/activate-deactivate-actions.component"
import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

const WearableCard = ({ wearable, blue, quatheading, edit, equip, activate, moveEdit }) => {
  const {
    name,
    id,
    armourValue,
    bodyArea,
    description,
    equipped,
    statModifiers,
    abilities,
    active,
  } = wearable
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
      <p>
        <strong>Abilities: </strong>
        {abilities.length}
      </p>
      <div className="actions-div">
        {equip ? (
          <EquipAndUnequipActions type="WEARABLE" id={id} equipped={equipped} bodyArea={bodyArea} />
        ) : null}
        {activate ? <ActivateDeactivateActions type="WEARABLE" id={id} active={active} /> : null}
        {moveEdit ? <CopyMoveEditDeleteActions /> : null}
        {edit ? <EditAndDeleteActions /> : null}
      </div>
    </Card>
  )
}

export default WearableCard
