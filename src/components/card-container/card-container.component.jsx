import React from "react"

import "./card-container.styles.scss"

const CardContainer = ({ children, heading, subheading, terheading }) => (
  <div className="card-container">
    <h3 className="card-container__heading">{heading}</h3>
    {subheading ? <h4 className="card-container__subheading">{subheading}</h4> : null}
    {terheading ? <h4 className="card-container__terheading">{terheading}</h4> : null}
    {children}
    {/* <EditDelete type="charsheet" /> */}
  </div>
)

export default CardContainer
