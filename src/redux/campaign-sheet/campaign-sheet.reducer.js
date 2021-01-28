import CampSheetActionTypes from "./campaign-sheet.types"

const INITIAL_STATE = {
  currentCampSheet: null,
  campSheetList: null,
  isListFetching: false,
  errorMessage: undefined,
}

const campSheetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CampSheetActionTypes.SET_CURRENT_CAMP_SHEET:
      return {
        ...state,
        currentCampSheet: action.payload,
      }
    case CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_START:
      return {
        ...state,
        isListFetching: true,
      }
    case CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_SUCCESS:
      return {
        ...state,
        isListFetching: false,
        errorMessage: undefined,
        campSheetList: action.payload,
      }
    case CampSheetActionTypes.FETCH_CAMP_SHEET_LIST_FAILURE:
      return {
        ...state,
        isListFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default campSheetReducer
