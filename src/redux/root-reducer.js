import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import userReducer from "./user/user.reducer"
import charSheetReducer from "./character-sheet/character-sheet.reducer"
import campSheetReducer from "./campaign-sheet/campaign-sheet.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["campSheet"],
}

const rootReducer = combineReducers({
  user: userReducer,
  charSheet: charSheetReducer,
  campSheet: campSheetReducer,
})

export default persistReducer(persistConfig, rootReducer)
