import React from "react"
import { connect } from "react-redux"

import { togglePopupForm } from "../../../redux/app/app.actions"
import PopupFormTypes from "../../popup-form/popup-form.types"

const CopyMoveEditDeleteActions = ({ id, togglePopupForm }) => {
  return (
    <p className="actions">
      <span onClick={() => togglePopupForm(PopupFormTypes.COPY_INTERACTABLE_TO_DIFFERENT_MISSION)}>
        COPY
      </span>{" "}
      |{" "}
      <span onClick={() => togglePopupForm(PopupFormTypes.MOVE_INTERACTABLE_TO_DIFFERENT_MISSION)}>
        MOVE
      </span>{" "}
      | <span onClick={() => togglePopupForm(PopupFormTypes.EDIT_INVENTORY_ITEM)}>EDIT</span> |
      DELETE
    </p>
  )
}

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(null, mapDispatchToProps)(CopyMoveEditDeleteActions)
