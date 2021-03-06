import { createSelector } from "reselect"

const selectApp = (state) => state.app

export const selectIsPopupFormVisible = createSelector([selectApp], (app) => app.isPopupFormVisible)

export const selectPopupFormType = createSelector([selectApp], (app) => app.popupFormType)

export const selectFlashMessages = createSelector([selectApp], (app) => app.flashMessages)

export const selectAreAdditionalResourcesLoaded = createSelector(
  [selectApp],
  (app) => !!app.additionalResourcesLoaded
)

// TO EDIT
export const selectToEdit = createSelector([selectApp], (app) => app.toEdit)
export const selectCharLogToEdit = createSelector([selectToEdit], (toEdit) => toEdit.charLogToEdit)
export const selectPerLogToEdit = createSelector([selectToEdit], (toEdit) => toEdit.perLogToEdit)
export const selectCapLogToEdit = createSelector([selectToEdit], (toEdit) => toEdit.capLogToEdit)
export const selectNPCToEdit = createSelector([selectToEdit], (toEdit) => toEdit.npcToEdit)
export const selectWeaponToEdit = createSelector([selectToEdit], (toEdit) => toEdit.weaponToEdit)
export const selectItemToEdit = createSelector([selectToEdit], (toEdit) => toEdit.itemToEdit)
export const selectWearableToEdit = createSelector(
  [selectToEdit],
  (toEdit) => toEdit.wearableToEdit
)
export const selectEnvironmentToEdit = createSelector(
  [selectToEdit],
  (toEdit) => toEdit.environmentToEdit
)

// ADDITIONAL RESOURCES
export const selectAdditionalResources = createSelector(
  [selectApp],
  (app) => app.additionalResources
)
export const selectWeapons = createSelector(
  [selectAdditionalResources],
  (additionalResources) => additionalResources.weapons
)
export const selectWearables = createSelector(
  [selectAdditionalResources],
  (additionalResources) => additionalResources.wearables
)
export const selectItems = createSelector(
  [selectAdditionalResources],
  (additionalResources) => additionalResources.items
)
export const selectRaces = createSelector(
  [selectAdditionalResources],
  (additionalResources) => additionalResources.races
)
export const selectClasses = createSelector(
  [selectAdditionalResources],
  (additionalResources) => additionalResources.classes
)
