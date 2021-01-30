import CharSheetActionTypes from "./character-sheet.types"

const INITIAL_STATE = {
  currentCharSheet: null,
  charSheetList: null,
  isListFetching: false,
  isCharSheetFetching: false,
  errorMessage: undefined,
  doesCharacterSheetExist: true,
  doesUserHavePermission: true,
  areAdditionalResourcesLoaded: true,
}

const charSheetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharSheetActionTypes.SET_CURRENT_CHAR_SHEET:
      return {
        ...state,
        currentCharSheet: action.payload,
      }
    case CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_START:
      return {
        ...state,
        isListFetching: true,
      }
    case CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_SUCCESS:
      return {
        ...state,
        isListFetching: false,
        errorMessage: undefined,
        charSheetList: action.payload,
      }
    case CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_START:
      return {
        ...state,
        isCharSheetFetching: true,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_SUCCESS:
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: undefined,
        doesCharacterSheetExist: true,
        doesUserHavePermission: true,
        areAdditionalResourcesLoaded: true,
        currentCharSheet: action.payload,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_FAILURE_NONE_FOUND:
      console.log(action.payload)
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: action.payload,
        doesCharacterSheetExist: false,
      }
    case CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_FAILURE_NO_PERMISSION:
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: action.payload,
        doesUserHavePermission: false,
      }
    case CharSheetActionTypes.FETCH_ADDITIONAL_CHAR_SHEET_RESOURCES_FAILURE:
      console.log(action.payload)
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: action.payload,
        areAdditionalResourcesLoaded: false,
      }
    default:
      return state
  }
}

export default charSheetReducer
