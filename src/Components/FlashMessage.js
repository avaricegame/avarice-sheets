import React from "react"

function FlashMessage(props) {
  // let color = props.color
  let color = "successPurple"
  let bColor = ""

  // SET THE BACKGROUND OF THE FLASH MESSAGE DEPENDING ON WHAT IS SENT THORUGH PROPS
  color === "error" ? (bColor = "rgb(168, 26, 26)") : color === "successPurple" ? (bColor = "rgb(105, 10, 105)") : color === "successBlue" ? (bColor = "rgb(6, 109, 156)") : (bColor = "rgb(0, 0, 0)")

  return (
    <div className="flash-message" style={{ backgroundColor: bColor }}>
      <p className="flash-message__message">Hi, this is the message Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="flash-message__close-button">
        <p className="flash-message__dismiss">&times;</p>
      </div>
    </div>
  )
}

export default FlashMessage
