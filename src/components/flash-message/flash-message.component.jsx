import React from "react"

import "./flash-message.styles.scss"

const FlashMessage = ({ messages }) => (
  <div className="flash-messages">
    {messages.map((message, index) => (
      <div className="flash-message" key={index}>
        {message}
      </div>
    ))}
  </div>
)

export default FlashMessage
