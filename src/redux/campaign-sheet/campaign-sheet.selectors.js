import { createSelector } from "reselect"

const selectCampSheet = (state) => state.campSheet

export const selectCurrentCampSheet = createSelector(
  [selectCampSheet],
  (campSheet) => campSheet.currentCampSheet
)

export const selectCampSheetList = createSelector(
  [selectCampSheet],
  (campSheet) => campSheet.campSheetList
)

export const selectIsCampSheetListFetching = createSelector(
  [selectCampSheet],
  (campSheet) => campSheet.isListFetching
)

export const selectIsCampSheetListLoaded = createSelector(
  [selectCampSheet],
  (campSheet) => !!campSheet.campSheetList
)

export const selectIsCurrentCampSheetLoaded = createSelector(
  [selectCampSheet],
  (campSheet) => !!campSheet.currentCampSheet
)
