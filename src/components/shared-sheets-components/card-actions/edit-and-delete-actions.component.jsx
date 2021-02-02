import React from "react"
import { connect } from "react-redux"

import { togglePopupFormForEdit } from "../../../redux/app/app.actions"
import PopupFormTypes from "../../popup-form/popup-form.types"

const EditAndDeleteActions = ({
  whatToEdit,
  objToEdit,
  togglePopupFormForEdit,
  popupFormType,
  moveEdit,
}) => {
  return (
    <p className="actions">
      {moveEdit ? (
        <>
          <span
            onClick={() =>
              togglePopupFormForEdit({
                popupFormType: PopupFormTypes.COPY_INTERACTABLE_TO_DIFFERENT_MISSION,
                whatToEdit: whatToEdit,
                objToEdit: objToEdit,
              })
            }
          >
            COPY
          </span>{" "}
          |{" "}
          <span
            onClick={() =>
              togglePopupFormForEdit({
                popupFormType: PopupFormTypes.MOVE_INTERACTABLE_TO_DIFFERENT_MISSION,
                whatToEdit: whatToEdit,
                objToEdit: objToEdit,
              })
            }
          >
            MOVE
          </span>{" "}
          |{" "}
        </>
      ) : null}
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
