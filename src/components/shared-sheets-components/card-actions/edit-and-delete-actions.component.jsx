import React from "react"
import { connect } from "react-redux"

import { togglePopupFormForEdit } from "../../../redux/app/app.actions"

const EditAndDeleteActions = ({ whatToEdit, objToEdit, togglePopupFormForEdit, popupFormType }) => {
  return (
    <p className="actions">
      <span
        onClick={() =>
          togglePopupFormForEdit({
            popupFormType: popupFormType,
            whatToEdit: whatToEdit,
            objToEdit: objToEdit,
          })
        }
      >
        EDIT
      </span>{" "}
      | DELETE
    </p>
  )
}

const mapDispatchToProps = (dispatch) => ({
  togglePopupFormForEdit: (object) => dispatch(togglePopupFormForEdit(object)),
})

export default connect(null, mapDispatchToProps)(EditAndDeleteActions)
