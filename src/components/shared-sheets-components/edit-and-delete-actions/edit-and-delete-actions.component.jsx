import React from "react"
import { connect } from "react-redux"

import { togglePopupForm } from "../../../redux/app/app.actions"
import PopupFormTypes from "../../popup-form/popup-form.types"

const EditAndDeleteActions = ({ id, togglePopupForm }) => {
  return (
    <p className="actions">
      <span onClick={() => togglePopupForm(PopupFormTypes.EDIT_INVENTORY_ITEM)}>EDIT</span> | DELETE
    </p>
  )
}

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(null, mapDispatchToProps)(EditAndDeleteActions)
