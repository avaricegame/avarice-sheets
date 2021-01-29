import { createSelector } from "reselect"

const selectCharSheet = (state) => state.charSheet

export const selectCurrentCharSheet = createSelector(
  [selectCharSheet],
  (charSheet) => charSheet.currentCharSheet
)

export const selectCharSheetList = createSelector(
  [selectCharSheet],
  (charSheet) => charSheet.charSheetList
)

export const selectIsCharSheetListFetching = createSelector(
  [selectCharSheet],
  (charSheet) => charSheet.isListFetching
)

export const selectIsCharSheetListLoaded = createSelector(
  [selectCharSheet],
  (charSheet) => !!charSheet.charSheetList
)

export const selectIsCurrentCharSheetLoaded = createSelector(
  [selectCharSheet],
  (charSheet) => !!charSheet.currentCharSheet
)
