import AppActionTypes from "./app.types"

const INITIAL_STATE = {
  flashMessages: [],
  isPopupFormVisible: false,
  popupFormType: null,
  errorMessage: undefined,
  toEdit: {
    charLogToEdit: null,
    capLogToEdit: null,
    perLogToEdit: null,
    npcToEdit: null,
    weaponToEdit: null,
    itemToEdit: null,
    wearableToEdit: null,
    environmentToEdit: null,
  },
  additionalResources: {
    weapons: undefined,
    wearables: undefined,
    items: undefined,
    races: undefined,
    classes: undefined,
  },
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_POPUP:
      return {
        ...state,
        isPopupFormVisible: !state.isPopupFormVisible,
        popupFormType: action.payload,
        toEdit: {
          charLogToEdit: null,
          capLogToEdit: null,
          perLogToEdit: null,
          npcToEdit: null,
          weaponToEdit: null,
          itemToEdit: null,
          wearableToEdit: null,
          environmentToEdit: null,
        },
      }
    case AppActionTypes.TOGGLE_POPUP_FOR_EDIT:
      return {
        ...state,
        isPopupFormVisible: !state.isPopupFormVisible,
        popupFormType: action.payload.popupFormType,
        toEdit: {
          ...state.toEdit,
          [action.payload.whatToEdit]: action.payload.objToEdit,
        },
      }
    case AppActionTypes.ADD_FLASH_MESSAGE:
      return {
        ...state,
        flashMessages: state.flashMessages.concat(action.payload),
      }
    case AppActionTypes.FETCH_ADDITIONAL_RESOURCES_SUCCESS:
      return {
        ...state,
        additionalResources: {
          races: action.payload.races,
          classes: action.payload.classes,
          wearables: action.payload.wearables,
          items: action.payload.items,
          weapons: action.payload.weapons,
        },
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
