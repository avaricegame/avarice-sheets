import AppActionTypes from "./app.types"

export const togglePopupForm = (popupFormType) => ({
  type: AppActionTypes.TOGGLE_POPUP,
  payload: popupFormType,
})

export const togglePopupFormForEdit = (object) => ({
  type: AppActionTypes.TOGGLE_POPUP_FOR_EDIT,
  payload: object,
})
