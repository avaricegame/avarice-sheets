import React from "react"

import { default as Card } from "../../card-container/card-container.component"

import EditAndDeleteActions from "../card-actions/edit-and-delete-actions.component"
import ActivateDeactivateActions from "../../campaign-sheet-components/card-actions/activate-deactivate-actions.component"
import EquipAndUnequipActions from "../card-actions/equip-and-unequip.component"

import PopupFormTypes from "../../popup-form/popup-form.types"

const WeaponCard = ({ weapon, blue, quatheading, edit, equip, activate, moveEdit, whatToEdit }) => {
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
    active,
  } = weapon
  return (
    <Card
      blue={blue}
      heading={name}
      subheading={proficiency}
      terheading={`${equipped ? "Equipped" : ""}`}
      quatheading={quatheading ? quatheading : ""}
    >
      <table>
        <thead>
          <tr>
            <th>Weapon Stats:</th>
          </tr>
        </thead>
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
      <div className="actions-div">
        {equip ? <EquipAndUnequipActions type="WEAPON" id={id} equipped={equipped} /> : null}
        {activate ? <ActivateDeactivateActions type="WEAPON" id={id} active={active} /> : null}
        {edit || moveEdit ? (
          <EditAndDeleteActions
            moveEdit={moveEdit}
            whatToEdit={whatToEdit}
            objToEdit={weapon}
            popupFormType={PopupFormTypes.ADD_A_NEW_WEAPON}
          />
        ) : null}
      </div>
    </Card>
  )
}

export default WeaponCard
