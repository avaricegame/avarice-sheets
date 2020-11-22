import React from "react"

function Loader(props) {
  if (props.contained) {
    return (
      <div className="contained-container">
        <div className="animated-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="fullpage-container">
        <div className="animated-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Loader
