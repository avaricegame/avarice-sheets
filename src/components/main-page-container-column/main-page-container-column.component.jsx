import React from "react"

import "./main-page-container-column.styles.scss"

const MainPageContainerColumn = ({ children, heading, fullWidth }) => (
  <div
    className={`main-page-container-column ${
      fullWidth ? "main-page-container-column--fullwidth" : ""
    }`}
  >
    <h2 className="main-page-container-column__heading">{heading}</h2>
    <div className="main-page-container-column__containing-div">{children}</div>
  </div>
)

export default MainPageContainerColumn
