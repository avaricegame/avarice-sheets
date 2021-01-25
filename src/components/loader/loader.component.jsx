import React from "react"

import "./loader.styles.scss"

const Loader = ({ contained }) => (
  <div className={`${contained ? "contained-loader-container" : "fullpage-loader-container"}`}>
    <div className="animated-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Loader
