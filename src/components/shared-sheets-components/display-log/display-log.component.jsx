import React from "react"

const DisplayLog = ({ id, title, details }) => (
  <p data-logid={id}>
    <strong>{title}: </strong>
    {details}
  </p>
)

export default DisplayLog
