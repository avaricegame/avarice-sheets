import AppActionTypes from "./app.types"

const INITIAL_STATE = {
  isPopupFormVisible: false,
  popupFormType: null,
  charLogToEdit: null,
  capLogToEdit: null,
  perLogToEdit: null,
  npcToEdit: null,
  weaponToEdit: null,
  itemToEdit: null,
  wearableToEdit: null,
  environmentToEdit: null,
  weapons: undefined,
  wearables: undefined,
  items: undefined,
  races: undefined,
  classes: undefined,
  errorMessage: undefined,
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
    case AppActionTypes.FETCH_WEAPONS:
      return {
        ...state,
        weapons: action.payload,
      }
    case AppActionTypes.FETCH_WEARABLES:
      return {
        ...state,
        wearables: action.payload,
      }

    case AppActionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      }

    case AppActionTypes.FETCH_RACES:
      return {
        ...state,
        races: action.payload,
      }
    case AppActionTypes.FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload,
      }
    case AppActionTypes.FETCH_ADDITIONAL_RESOURCES_FAILURE:
      console.log(action.payload)
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default appReducer
