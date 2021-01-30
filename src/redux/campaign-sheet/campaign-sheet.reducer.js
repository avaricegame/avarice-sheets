import CampSheetActionTypes from "./campaign-sheet.types"

const INITIAL_STATE = {
  currentCampSheet: null,
  campSheetList: null,
  isListFetching: false,
  isCampSheetFetching: false,
  errorMessage: undefined,
  doesCampaignSheetExist: true,
  doesUserHavePermission: true,
  arePlayersCharSheetsLoaded: true,
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
    case CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_START:
      return {
        ...state,
        isCampSheetFetching: true,
      }
    case CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_SUCCESS:
      return {
        ...state,
        isCampSheetFetching: false,
        errorMessage: undefined,
        doesCampaignSheetExist: true,
        doesUserHavePermission: true,
        arePlayersCharSheetsLoaded: true,
        currentCampSheet: action.payload,
      }
    case CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_FAILURE_NONE_FOUND:
      console.log(action.payload)
      return {
        ...state,
        isCampSheetFetching: false,
        errorMessage: action.payload,
        doesCampaignSheetExist: false,
      }
    case CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_BY_ID_FAILURE_NO_PERMISSION:
      console.log(action.payload)
      return {
        ...state,
        isCampSheetFetching: false,
        errorMessage: action.payload,
        doesUserHavePermission: false,
      }
    case CampSheetActionTypes.FETCH_CHAR_SHEETS_OF_PLAYERS_FAILURE:
      console.log(action.payload)
      return {
        ...state,
        isCampSheetFetching: false,
        errorMessage: action.payload,
        arePlayersCharSheetsLoaded: false,
      }
    default:
      return state
  }
}

export default campSheetReducer
