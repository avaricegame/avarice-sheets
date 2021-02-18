import { createSelector } from "reselect"

const selectUser = (state) => state.user

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser)

export const selectToken = createSelector([selectUser], (user) => user.token)

export const selectIsCurrentUserLoaded = createSelector([selectUser], (user) => !!user.currentUser)

export const selectUsersCharSheets = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.characterSheets
)

export const selectUsersCampSheets = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.campaignSheets
)
