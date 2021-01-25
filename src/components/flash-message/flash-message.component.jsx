import React from "react"

import "./flash-message.styles.scss"

const FlashMessage = ({ message }) => (
  <div className="flash-messages">
    <div className="flash-message" key>
      {message}
    </div>
  </div>
)

export default FlashMessage
