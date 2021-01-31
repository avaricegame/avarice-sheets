import React from "react"
import { connect } from "react-redux"

import "./popup-form-button-panel.styles.scss"

import { togglePopupForm } from "../../redux/app/app.actions"

const PopupForm = ({ submitValue, isNotForm, togglePopupForm }) =>
  isNotForm ? (
    <div className="popupform__button-panel">
      <button className="popupform__close-button popupform__close-button--fullwidth">Cancel</button>
    </div>
  ) : (
    <div className="popupform__button-panel">
      <button className="popupform__close-button" onClick={() => togglePopupForm(null)}>
        Cancel
      </button>
      <input type="submit" className="popupform__submit-button" value={submitValue} />
    </div>
  )

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(null, mapDispatchToProps)(PopupForm)
