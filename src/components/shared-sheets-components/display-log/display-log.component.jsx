import React from "react"

import EditAndDeleteActions from "../edit-and-delete-actions/edit-and-delete-actions.component"

const DisplayLog = ({ id, title, details, edit }) => (
  <>
    <p data-logid={id}>
      <strong>{title}: </strong>
      {details}
    </p>
    {edit ? <EditAndDeleteActions /> : null}
  </>
)

export default DisplayLog
