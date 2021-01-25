import React from "react"

import "./sheets-heading.styles.scss"

const SheetsHeading = ({ heading }) => (
  <div className="sheets-secondary-header">
    <h1 className="sheets-secondary-header__heading">{heading}</h1>
  </div>
)

export default SheetsHeading
