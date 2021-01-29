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

// selectors for individual pages of the character sheet
export const selectNotes = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.notes
)

export const selectCharacterBackground = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.characterBackground
)

export const selectCharacterDescription = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.characterDescription
)

export const selectCharacterLog = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.characterLog
)

export const selectCharacterName = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.characterName
)
