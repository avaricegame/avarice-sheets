import CampSheetActionTypes from "./campaign-sheet.types"

export const setCurrentCampSheet = (campSheet) => ({
  type: CampSheetActionTypes.SET_CURRENT_CAMP_SHEET,
  payload: campSheet,
})

export const fetchCampSheetListStart = () => ({
  type: CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_START,
})

export const fetchCampSheetListSuccess = (campSheetList) => ({
  type: CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_SUCCESS,
  payload: campSheetList,
})

export const fetchCampSheetListFailure = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_FAILURE,
  payload: errorMessage,
})

export const fetchCampSheetListStartAsync = (currentUsersID) => {
  return (dispatch) => {
    const CAMP_SHEETS = require("../../redux/json/campaign-sheets.json")

    const usersCampSheets = CAMP_SHEETS.filter(
      (campSheet) => campSheet.creatorID === currentUsersID
    )

    dispatch(fetchCampSheetListSuccess(usersCampSheets))
  }
}

export const fetchCurrentCampSheetByIDStart = () => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_START,
})

export const fetchCurrentCampSheetByIDSuccess = (currentCampSheet) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_SUCCESS,
  payload: currentCampSheet,
})

export const fetchCurrentCampSheetByIDFailureNoneFound = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_FAILURE_NONE_FOUND,
  payload: errorMessage,
})

export const fetchCurrentCampSheetByIDFailureNoPermission = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_FAILURE_NO_PERMISSION,
  payload: errorMessage,
})

export const fetchCurrentCampSheetByIDStartAsync = (campSheetIDParam, currentUser) => {
  return (dispatch) => {
    const CAMP_SHEETS = require("../json/campaign-sheets.json")

    const requestedCampSheet = CAMP_SHEETS.filter((campSheet) => campSheet._id === campSheetIDParam)

    if (!requestedCampSheet.length) {
      return dispatch(
        fetchCurrentCampSheetByIDFailureNoneFound("There is no Campaign Sheet with that ID.")
      )
    }

    const currentCampSheet = requestedCampSheet[0]

    const isUserOwner = Boolean(currentCampSheet.creatorID === currentUser._id)

    if (isUserOwner) {
      console.log("You are able to view this Campaign Sheet because you are the owner.")
      return dispatch(fetchCharSheetsOfPlayersStartAsync(currentCampSheet))
    } else {
      return dispatch(
        fetchCurrentCampSheetByIDFailureNoPermission(
          "You do not have permission to view this Campaign Sheet."
        )
      )
    }
  }
}

// fetching all the character sheet information for the sheets who've joined the campaign
export const fetchCharSheetsOfPlayersFailure = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CHAR_SHEETS_OF_PLAYERS_FAILURE,
  payload: errorMessage,
})

export const fetchCharSheetsOfPlayersStartAsync = (currentCampSheet) => {
  return (dispatch) => {
    const { playersIDS } = currentCampSheet

    const CHARACTER_SHEETS = require("../json/character-sheets.json")

    let playersCharSheets = []

    playersIDS.forEach((playerID) => {
      // find all the character sheets from the playersIDS array and add them to playersCharSheets
      let charSheet = CHARACTER_SHEETS.filter((charSheet) => charSheet._id === playerID)
      if (!charSheet.length) {
        return dispatch(
          fetchCharSheetsOfPlayersFailure("Could not fetch a Character Sheet with the provided ID.")
        )
      }
      playersCharSheets = [...playersCharSheets, charSheet[0]]
    })

    // add the array of players character sheets to the main current campaign sheet object
    currentCampSheet.players = playersCharSheets

    return dispatch(fetchCurrentCampSheetByIDSuccess(currentCampSheet))
  }
}
