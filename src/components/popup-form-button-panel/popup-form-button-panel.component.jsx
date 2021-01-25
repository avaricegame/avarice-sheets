import React from "react"

import "./popup-form-button-panel.styles.scss"

const PopupForm = ({ submitValue, isNotForm }) =>
  isNotForm ? (
    <div className="popupform__button-panel">
      <button className="popupform__close-button popupform__close-button--fullwidth">Cancel</button>
    </div>
  ) : (
    <div className="popupform__button-panel">
      <button className="popupform__close-button">Cancel</button>
      <input type="submit" className="popupform__submit-button" value={submitValue} />
    </div>
  )

export default PopupForm
