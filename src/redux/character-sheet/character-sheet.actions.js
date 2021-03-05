import CharSheetActionTypes from "./character-sheet.types"

export const fetchCurrentCharSheetStart = (TokenAndID) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_START,
  payload: TokenAndID,
})

export const fetchCurrentCharSheetSuccess = (currentCharSheet) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_SUCCESS,
  payload: currentCharSheet,
})

export const fetchCurrentCharSheetFailureNoneFound = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_FAILURE_NONE_FOUND,
  payload: errorMessage,
})

export const fetchCurrentCharSheetFailureNoPermission = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_FAILURE_NO_PERMISSION,
  payload: errorMessage,
})
