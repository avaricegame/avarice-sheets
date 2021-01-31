import React from "react"

const DisplayLog = ({ id, title, details, edit }) => (
  <>
    <p data-logid={id}>
      <strong>{title}: </strong>
      {details}
    </p>
    {edit ? <p className="actions">EDIT | DELETE</p> : null}
  </>
)

export default DisplayLog
