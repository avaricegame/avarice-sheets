import UserActionTypes from "./user.types"

export const fetchCurrentUserStart = () => ({
  type: UserActionTypes.FETCH_CURRENT_USER_START,
})

export const fetchCurrentUserSuccess = (currentUser) => ({
  type: UserActionTypes.FETCH_CURRENT_USER_SUCCESS,
  payload: currentUser,
})

export const fetchCurrentUserFailure = (errorMessage) => ({
  type: UserActionTypes.FETCH_CURRENT_USER_FAILURE,
  payload: errorMessage,
})

export const fetchCurrentUserStartAsync = (userNameOrEmail, userPassword) => {
  return (dispatch) => {
    const USERS = require("../json/users.json")

    const requestedUser = USERS.find(
      (user) => user.email === userNameOrEmail || user.username === userNameOrEmail
    )

    if (!requestedUser) {
      return dispatch(
        fetchCurrentUserFailure("There is no account associated with those credentials.")
      )
    }

    if (requestedUser.password === userPassword) {
      return dispatch(fetchCurrentUserSuccess(requestedUser))
    }

    return dispatch(fetchCurrentUserFailure("Provided credentials do not match."))
  }
}
