import { combineReducers } from "redux"

import userReducer from "./user/user.reducer"
import charSheetReducer from "./character-sheet/character-sheet.reducer"
import campSheetReducer from "./campaign-sheet/campaign-sheet.reducer"

const rootReducer = combineReducers({
  user: userReducer,
  charSheet: charSheetReducer,
  campSheet: campSheetReducer,
})

export default rootReducer
