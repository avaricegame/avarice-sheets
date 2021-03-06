import { takeLatest, put, all, call } from "redux-saga/effects"

import CampSheetActionTypes from "./campaign-sheet.types"

import {
  fetchCurrentCampSheetSuccess,
  fetchCurrentCampSheetFailureNoPermission,
  fetchCurrentCampSheetFailureNoneFound,
} from "./campaign-sheet.actions"

import { getCampSheet } from "../api/sheets.api"

// FETCH CURRENT CAMP SHEET
export function* onFetchCurrentCampSheetStart() {
  yield takeLatest(CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_START, fetchCurrentCampSheet)
}

export function* fetchCurrentCampSheet({ payload: { token, campid } }) {
  try {
    const response = yield getCampSheet(token, campid)
    if (response.data) {
      yield put(fetchCurrentCampSheetSuccess(response.data))
    }
  } catch (error) {
    if (error.message === "UNAUTHORIZED") {
      yield put(fetchCurrentCampSheetFailureNoPermission(error.message))
    } else {
      yield put(fetchCurrentCampSheetFailureNoneFound(error.message))
    }
  }
}

// EXPORT CAMP SHEET SAGAS
export function* campSheetSagas() {
  yield all([call(onFetchCurrentCampSheetStart)])
}
