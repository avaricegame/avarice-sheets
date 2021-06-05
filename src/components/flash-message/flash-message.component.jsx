import React from "react"

import "./flash-message.styles.scss"

// FLASH MESSAGE TYPES ARE 'ALERT', 'SUCCESS', 'INFO'

const FlashMessage = ({ flashMessages }) => (
  <div className="flash-messages">
    {flashMessages.map((flashMessage, index) => (
      <div className={`flash-message ${flashMessage.type || "info"}`} key={index}>
        {flashMessage.message}
      </div>
    ))}
  </div>
)

export default FlashMessage
