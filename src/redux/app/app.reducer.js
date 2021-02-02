import AppActionTypes from "./app.types"

const INITIAL_STATE = {
  isPopupFormVisible: false,
  popupFormType: null,
  charLogToEdit: null,
  capLogToEdit: null,
  perLogToEdit: null,
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_POPUP:
      return {
        ...state,
        isPopupFormVisible: !state.isPopupFormVisible,
        popupFormType: action.payload,
      }
    case AppActionTypes.TOGGLE_POPUP_FOR_EDIT:
      return {
        ...state,
        isPopupFormVisible: !state.isPopupFormVisible,
        popupFormType: action.payload.popupFormType,
        [action.payload.whatToEdit]: action.payload.objToEdit,
      }

    default:
      return state
  }
}

export default appReducer
