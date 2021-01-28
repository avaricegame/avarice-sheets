import CharSheetActionTypes from "./character-sheet.types"

const INITIAL_STATE = {
  currentCharSheet: null,
  charSheetList: null,
  isListFetching: false,
  errorMessage: undefined,
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
    default:
      return state
  }
}

export default charSheetReducer
