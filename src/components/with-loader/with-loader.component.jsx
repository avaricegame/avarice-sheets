import React from "react"

import "./with-loader.styles.scss"

const WithLoader = (WrappedComponent) => ({ isLoading, contained, ...otherProps }) => {
  return isLoading ? (
    <div className={`${contained ? "contained-loader-container" : "fullpage-loader-container"}`}>
      <div className="animated-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithLoader
