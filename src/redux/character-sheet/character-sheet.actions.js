import CharSheetActionTypes from "./character-sheet.types"

export const setCurrentCharSheet = (charSheet) => ({
  type: CharSheetActionTypes.SET_CURRENT_CHAR_SHEET,
  payload: charSheet,
})

export const fetchCharSheetListStart = () => ({
  type: CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_START,
})

export const fetchCharSheetListSuccess = (charSheetList) => ({
  type: CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_SUCCESS,
  payload: charSheetList,
})

export const fetchCharSheetListFailure = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_CHAR_SHEET_LIST_FAILURE,
  payload: errorMessage,
})

export const fetchCharSheetListStartAsync = (currentUsersID) => {
  return (dispatch) => {
    const CHAR_SHEETS = require("../json/character-sheets.json")

    const usersCharSheets = CHAR_SHEETS.filter(
      (charSheet) => charSheet.creatorID === currentUsersID
    )

    dispatch(fetchCharSheetListSuccess(usersCharSheets))
  }
}
