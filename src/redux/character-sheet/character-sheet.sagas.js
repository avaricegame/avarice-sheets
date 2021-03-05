import { takeLatest, put, all, call } from "redux-saga/effects"

import CharSheetActionTypes from "./character-sheet.types"

import {
  fetchCurrentCharSheetSuccess,
  fetchCurrentCharSheetFailureNoPermission,
  fetchCurrentCharSheetFailureNoneFound,
} from "./character-sheet.actions"

import { getCharSheet } from "../api/sheets.api"

// FETCH CURRENT CHAR SHEET
export function* onFetchCurrentCharSheetStart() {
  yield takeLatest(CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_START, fetchCurrentCharSheet)
}

export function* fetchCurrentCharSheet({ payload: { token, charid } }) {
  try {
    const response = yield getCharSheet(token, charid)

    if (response.data) {
      yield put(fetchCurrentCharSheetSuccess(response.data))
    }
  } catch (error) {
    if (error.message === "UNAUTHORIZED") {
      yield put(fetchCurrentCharSheetFailureNoPermission(error.message))
    } else {
      yield put(fetchCurrentCharSheetFailureNoneFound(error.message))
    }
  }
}

// EXPORT CHAR SHEET SAGAS
export function* charSheetSagas() {
  yield all([call(onFetchCurrentCharSheetStart)])
}
