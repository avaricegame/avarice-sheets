import React from "react"

import "./sheets-page-container-column.styles.scss"

export const SheetsPageContainerColumnSection = ({ children, heading }) => (
  <>
    <h2 className="heading">{heading}</h2>
    <div className="sheets-page-container-column__section">{children}</div>
  </>
)

const SheetsPageContainerColumn = ({ children, width }) => (
  <div className={`sheets-page-container-column__${width}`}>{children}</div>
)

export default SheetsPageContainerColumn
