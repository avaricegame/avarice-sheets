import React from "react"

import "./card-container.styles.scss"

export const InteriorCardContainerFlex = ({ children }) => (
  <div className="card-container--flex">{children}</div>
)

export const Subheading = ({ children, blue }) => (
  <h4 className={`card-container__subheading ${blue ? "card-container__subheading--blue" : ""}`}>
    {children}
  </h4>
)

export const Terheading = ({ children, purpleTerheading }) => (
  <h4
    className={`card-container__terheading ${
      purpleTerheading ? "card-container__terheading--purple" : ""
    }`}
  >
    {children}
  </h4>
)

export const CardContainerContentContainer = ({ children }) => (
  <div className={`card-container__content`}>{children}</div>
)

const CardContainer = ({
  children,
  heading,
  subheading,
  terheading,
  quatheading,
  blue,
  purpleTerheading,
  fullHeight,
}) => (
  <div className={`card-container ${fullHeight ? "card-container--full-height" : ""}`}>
    <h3 className="card-container__heading">{heading}</h3>
    {subheading ? <Subheading blue={blue}>{subheading}</Subheading> : null}
    {terheading ? <Terheading purpleTerheading={purpleTerheading}>{terheading}</Terheading> : null}
    {quatheading ? <Terheading>{quatheading}</Terheading> : null}
    <CardContainerContentContainer>{children}</CardContainerContentContainer>
    {/* <EditDelete type="charsheet" /> */}
  </div>
)

export default CardContainer
