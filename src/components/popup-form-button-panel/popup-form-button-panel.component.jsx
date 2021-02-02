import React from "react"
import { connect } from "react-redux"

import "./popup-form-button-panel.styles.scss"

import { togglePopupForm } from "../../redux/app/app.actions"

const PopupFormButtonPanel = ({ submitValue, buttonValue, noSubmit, togglePopupForm }) => (
  <div className="popupform__button-panel">
    {noSubmit ? (
      <button
        className="popupform__close-button popupform__close-button--fullwidth"
        onClick={() => togglePopupForm(null)}
        type="button"
      >
        {buttonValue}
      </button>
    ) : (
      <>
        <button
          className="popupform__close-button"
          type="button"
          onClick={() => togglePopupForm(null)}
        >
          Cancel
        </button>
        <input type="submit" className="popupform__submit-button" value={submitValue} />
      </>
    )}
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(null, mapDispatchToProps)(PopupFormButtonPanel)
