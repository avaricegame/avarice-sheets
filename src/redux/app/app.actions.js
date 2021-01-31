import AppActionTypes from "./app.types"

export const togglePopupForm = (popupFormType) => ({
  type: AppActionTypes.TOGGLE_POPUP,
  payload: popupFormType,
})
