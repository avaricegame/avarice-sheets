import React from "react"

import PopupFormButtonPanel from "../popup-form-button-panel/popup-form-button-panel.component"

import "./popup-form.styles.scss"

const PopupForm = ({ children, isNotForm, submitValue, heading }) => (
  <div className="popupform__background">
    <div className="popupform__popup">
      <h3 className="popupform__heading">{heading ? heading : "Blank Form"}</h3>
      {children}
      <PopupFormButtonPanel submitValue={submitValue} isNotForm={isNotForm} />
    </div>
  </div>
)

export default PopupForm
