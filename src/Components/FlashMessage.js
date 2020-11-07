import React, { useContext } from "react"

import StateContext from "../StateContext"

function FlashMessage() {
  const appState = useContext(StateContext)

  return (
    <div className="floating-alerts">
      {appState.flashMessages
        ? appState.flashMessages.map((message, index) => {
            return (
              <div className="floating-alert" key={index}>
                {message}
              </div>
            )
          })
        : ""}
    </div>
  )
}

export default FlashMessage
