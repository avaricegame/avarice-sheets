import CharSheetActionTypes from "./character-sheet.types"

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

export const fetchCurrentCharSheetByIDStart = () => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_START,
})

export const fetchCurrentCharSheetByIDSuccess = (currentCharSheet) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_SUCCESS,
  payload: currentCharSheet,
})

export const fetchCurrentCharSheetByIDFailureNoneFound = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_FAILURE_NONE_FOUND,
  payload: errorMessage,
})

export const fetchCurrentCharSheetByIDFailureNoPermission = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_BY_ID_FAILURE_NO_PERMISSION,
  payload: errorMessage,
})

export const fetchCurrentCharSheetByIDStartAsync = (charSheetIDParam, currentUser) => {
  return (dispatch) => {
    const CHAR_SHEETS = require("../json/character-sheets.json")

    const requestedCharSheet = CHAR_SHEETS.filter((charSheet) => charSheet._id === charSheetIDParam)

    if (!requestedCharSheet.length) {
      return dispatch(
        fetchCurrentCharSheetByIDFailureNoneFound("There is no Character Sheet with that ID.")
      )
    }

    const currentCharSheet = requestedCharSheet[0]

    // returns the id of the campaign, IF the current user owns the campaign that this character sheet is attatched to
    const isCurrentUserTheCC = currentUser.campaignSheets.filter(
      (campSheetID) => campSheetID === currentCharSheet.campaignID
    )

    const isUserOwner = Boolean(currentCharSheet.creatorID === currentUser.id)

    if (isUserOwner || isCurrentUserTheCC.length) {
      if (isCurrentUserTheCC.length) {
        console.log(
          "You are able to view this Character Sheet because you own the Campaign that it is attached to."
        )
      } else {
        console.log("You are able to view this Character Sheet because you are the owner.")
      }
      return dispatch(fetchCurrentCharSheetByIDSuccess(currentCharSheet))
    }

    return dispatch(
      fetchCurrentCharSheetByIDFailureNoPermission(
        "You do not have permission to view this Character Sheet"
      )
    )
  }
}
