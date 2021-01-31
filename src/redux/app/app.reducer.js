import AppActionTypes from "./app.types"

const INITIAL_STATE = {
  isPopupFormVisible: false,
  popupFormType: null,
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_POPUP:
      return {
        ...state,
        isPopupFormVisible: !state.isPopupFormVisible,
        popupFormType: action.payload,
      }

    default:
      return state
  }
}

export default appReducer
