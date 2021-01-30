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

    const isUserOwner = Boolean(currentCharSheet.creatorID === currentUser._id)
    const doesUserHavePermission = Boolean(isCurrentUserTheCC.length)

    if (isUserOwner || doesUserHavePermission) {
      if (doesUserHavePermission) {
        console.log(
          "You are able to view this Character Sheet because you own the Campaign that it is attached to."
        )
      } else {
        console.log("You are able to view this Character Sheet because you are the owner.")
      }
      return dispatch(fetchAdditionalCharSheetInfoStartAsync(currentCharSheet))
    } else {
      return dispatch(
        fetchCurrentCharSheetByIDFailureNoPermission(
          "You do not have permission to view this Character Sheet"
        )
      )
    }
  }
}

// fetching race, class, and campaign sheet information
export const fetchAdditionalCharSheetResourcesFailure = (errorMessage) => ({
  type: CharSheetActionTypes.FETCH_ADDITIONAL_CHAR_SHEET_RESOURCES_FAILURE,
  payload: errorMessage,
})

export const fetchAdditionalCharSheetInfoStartAsync = (currentCharSheet) => {
  return (dispatch) => {
    const { classID, raceID, campaignID } = currentCharSheet

    const CLASSES = require("../json/data/classes.json")
    const RACES = require("../json/data/races.json")
    const CAMPAIGN_SHEETS = require("../json/campaign-sheets.json")

    // fetch the right class
    const requestedClass = CLASSES.filter((theClass) => theClass._id === classID)
    if (!requestedClass.length) {
      return dispatch(
        fetchAdditionalCharSheetResourcesFailure("Could not fetch a Class with the provided ID.")
      )
    }

    currentCharSheet.classInfo = requestedClass[0]

    // fetch the right race
    const requestedRace = RACES.filter((theRace) => theRace._id === raceID)
    if (!requestedRace.length) {
      return dispatch(
        fetchAdditionalCharSheetResourcesFailure("Could not fetch a Race with the provided ID.")
      )
    }

    currentCharSheet.raceInfo = requestedRace[0]

    // fetch the right campaign
    const requestedCampaign = CAMPAIGN_SHEETS.filter((campaign) => campaign._id === campaignID)
    if (!requestedCampaign.length) {
      return dispatch(
        fetchAdditionalCharSheetResourcesFailure("Could not fetch a Campaign with the provided ID.")
      )
    }

    const {
      campaignName,
      _id,
      creatorName,
      playersNames,
      charactersNames,
      missions,
      background,
      captainsLog,
    } = requestedCampaign[0]

    const campaignInfoToShare = {
      campaignName,
      _id,
      creatorName,
      playersNames,
      charactersNames,
      missions,
      background,
      captainsLog,
    }

    currentCharSheet.campaignInfo = campaignInfoToShare

    return dispatch(fetchCurrentCharSheetByIDSuccess(currentCharSheet))
  }
}
