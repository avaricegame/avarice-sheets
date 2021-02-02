import { createSelector } from "reselect"

const selectApp = (state) => state.app

export const selectIsPopupFormVisible = createSelector([selectApp], (app) => app.isPopupFormVisible)

export const selectPopupFormType = createSelector([selectApp], (app) => app.popupFormType)

export const selectCharLogToEdit = createSelector([selectApp], (app) => app.charLogToEdit)
export const selectPerLogToEdit = createSelector([selectApp], (app) => app.perLogToEdit)
export const selectCapLogToEdit = createSelector([selectApp], (app) => app.capLogToEdit)
