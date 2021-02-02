import React from "react"

import EditAndDeleteActions from "../card-actions/edit-and-delete-actions.component"

const DisplayLog = ({ log, edit, whatToEdit, popupFormType }) => {
  const { title, date, details } = log
  return (
    <>
      <p>
        <strong>
          {date}: {title}:{" "}
        </strong>
        {details}
      </p>
      {edit ? (
        <EditAndDeleteActions
          objToEdit={log}
          whatToEdit={whatToEdit}
          popupFormType={popupFormType}
        />
      ) : null}
    </>
  )
}

export default DisplayLog
