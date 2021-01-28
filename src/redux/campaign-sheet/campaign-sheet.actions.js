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
