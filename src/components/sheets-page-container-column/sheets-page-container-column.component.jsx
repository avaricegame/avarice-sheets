import React from "react"

import "./sheets-page-container-column.styles.scss"

export const SheetsPageContainerColumnSection = ({ children, heading, flex }) => (
  <>
    <h2 className="sheets-page-container-column__heading">{heading}</h2>
    <div
      className={`sheets-page-container-column__section ${
        flex ? "sheets-page-container-column__section--flex" : ""
      }`}
    >
      {children}
    </div>
  </>
)

const SheetsPageContainerColumn = ({ children, width, ability, unlocked, equipped }) => (
  <div
    className={`sheets-page-container-column__${width} ${
      ability && !unlocked
        ? "sheets-page-container-column--locked"
        : ability && equipped
        ? "sheets-page-container-column--equipped"
        : ""
    }`}
  >
    {children}
  </div>
)

export default SheetsPageContainerColumn
