import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectPopupFormType } from "../../redux/app/app.selectors"

import PopupFormTypes from "./popup-form.types"

// import the form components
import MakeACheck from "./forms/make-a-check.form"

import "./popup-form.styles.scss"

export const PopupFormHeading = ({ children }) => (
  <h3 className="popupform__heading">{children ? children : "Blank Form"}</h3>
)

const PopupForm = ({ popupFormType }) => (
  <div className="popupform__background">
    <div className="popupform__popup">
      {popupFormType === PopupFormTypes.MAKE_A_CHECK ? <MakeACheck /> : null}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  popupFormType: selectPopupFormType,
})

export default connect(mapStateToProps)(PopupForm)
