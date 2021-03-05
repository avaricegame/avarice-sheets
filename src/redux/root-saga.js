import { all, call } from "redux-saga/effects"

import { userSagas } from "./user/user.sagas"
import { charSheetSagas } from "./character-sheet/character-sheet.sagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(charSheetSagas)])
}
