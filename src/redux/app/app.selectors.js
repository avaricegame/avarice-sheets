import { createSelector } from "reselect"

const selectApp = (state) => state.app

export const selectIsPopupFormVisible = createSelector([selectApp], (app) => app.isPopupFormVisible)

export const selectPopupFormType = createSelector([selectApp], (app) => app.popupFormType)
