import React from "react"

import "./custom-button.styles.scss"

const CustomButton = ({ children, formButton, signOut, ...props }) => (
  <button
    className={`custom-button ${formButton ? "custom-button--form-button" : ""} ${
      signOut ? "custom-button--sign-out-button" : ""
    }`}
    {...props}
  >
    {children}
  </button>
)

export default CustomButton
