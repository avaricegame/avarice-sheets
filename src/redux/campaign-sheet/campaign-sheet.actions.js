import campSheetReducer from "./campaign-sheet.reducer"
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
