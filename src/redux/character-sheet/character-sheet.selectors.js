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

export const selectAbilities = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.abilities
)

export const selectWeapons = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.weapons
)

export const selectWearables = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.wearables
)

export const selectItems = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.items
)

export const selectLevel = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.level
)

export const selectStats = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.stats
)

export const selectLifeCredits = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.lifeCredits
)

export const selectCurrentHP = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.currentHP
)

// select character sheet additional resources
export const selectRaceInfo = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.raceInfo
)

export const selectClassInfo = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.classInfo
)

export const selectCampaignInfo = createSelector(
  [selectCurrentCharSheet],
  (currentCharSheet) => currentCharSheet.campaignInfo
)

export const selectCaptainsLog = createSelector(
  [selectCampaignInfo],
  (currentCampaignInfo) => currentCampaignInfo.captainsLog
)
