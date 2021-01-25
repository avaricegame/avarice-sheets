import React from "react"

import "./card-container.styles.scss"

const CardContainer = ({ children, heading, subheading, terheading, blue }) => (
  <div className="card-container">
    <h3 className="card-container__heading">{heading}</h3>
    {subheading ? (
      <h4
        className={`card-container__subheading ${blue ? "card-container__subheading--blue" : ""}`}
      >
        {subheading}
      </h4>
    ) : null}
    {terheading ? <h4 className="card-container__terheading">{terheading}</h4> : null}
    <div className="card-container__content">{children}</div>
    {/* <EditDelete type="charsheet" /> */}
  </div>
)

export default CardContainer
