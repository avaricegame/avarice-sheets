import { createSelector } from "reselect"

const selectApp = (state) => state.app

export const selectIsPopupFormVisible = createSelector([selectApp], (app) => app.isPopupFormVisible)

export const selectPopupFormType = createSelector([selectApp], (app) => app.popupFormType)

export const selectFlashMessages = createSelector([selectApp], (app) => app.flashMessages)

export const selectCharLogToEdit = createSelector([selectApp], (app) => app.charLogToEdit)
export const selectPerLogToEdit = createSelector([selectApp], (app) => app.perLogToEdit)
export const selectCapLogToEdit = createSelector([selectApp], (app) => app.capLogToEdit)
export const selectNPCToEdit = createSelector([selectApp], (app) => app.npcToEdit)
export const selectWeaponToEdit = createSelector([selectApp], (app) => app.weaponToEdit)
export const selectItemToEdit = createSelector([selectApp], (app) => app.itemToEdit)
export const selectWearableToEdit = createSelector([selectApp], (app) => app.wearableToEdit)
export const selectEnvironmentToEdit = createSelector([selectApp], (app) => app.environmentToEdit)

export const selectWeapons = createSelector([selectApp], (app) => app.weapons)
export const selectWearables = createSelector([selectApp], (app) => app.wearables)
export const selectItems = createSelector([selectApp], (app) => app.items)
export const selectRaces = createSelector([selectApp], (app) => app.races)
export const selectClasses = createSelector([selectApp], (app) => app.classes)
