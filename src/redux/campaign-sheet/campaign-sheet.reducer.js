import CampSheetActionTypes from "./campaign-sheet.types"
import CampPageActionTypes from "./pages/pages.types"

import { setCurrentMission } from "./utils/missions.utils"

const INITIAL_STATE = {
  currentCampSheet: null,
  campSheetList: null,
  isListFetching: false,
  isCampSheetFetching: false,
  errorMessage: undefined,
  doesCampaignSheetExist: true,
  doesUserHavePermission: true,
  arePlayersCharSheetsLoaded: true,
  background: null,
  campaignName: null,
  captainsLog: null,
  characterSheetsIDS: null,
  charactersNames: null,
  creatorID: null,
  creatorName: null,
  environment: null,
  inventoryItems: null,
  missions: null,
  notes: null,
  npcs: null,
  personalLog: null,
  players: null,
  playersIDS: null,
  playersNames: null,
  _id: null,
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
      console.log(action.payload)
      return {
        ...state,
        isCampSheetFetching: false,
        errorMessage: undefined,
        doesCampaignSheetExist: true,
        doesUserHavePermission: true,
        arePlayersCharSheetsLoaded: true,
        currentCampSheet: action.payload,
        background: action.payload.background,
        campaignName: action.payload.campaignName,
        captainsLog: action.payload.captainsLog,
        characterSheetsIDS: action.payload.characterSheetsIDS,
        charactersNames: action.payload.charactersNames,
        creatorID: action.payload.creatorID,
        creatorName: action.payload.creatorName,
        environment: action.payload.environment,
        inventoryItems: action.payload.inventoryItems,
        missions: action.payload.missions,
        notes: action.payload.notes,
        npcs: action.payload.npcs,
        personalLog: action.payload.personalLog,
        players: action.payload.players,
        playersIDS: action.payload.playersIDS,
        playersNames: action.payload.playersNames,
        _id: action.payload._id,
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
    case CampSheetActionTypes.SET_CURRENT_MISSION:
      console.log(action.payload)
      return {
        ...state,
        currentCampSheet: {
          ...state.currentCampSheet,
          missions: setCurrentMission(state.currentCampSheet.missions, action.payload),
        },
      }
    default:
      return state
  }
}

export default campSheetReducer
