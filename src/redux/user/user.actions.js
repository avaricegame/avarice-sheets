import UserActionTypes from "./user.types"

// CHECK TOKEN
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

// USER SIGN IN
export const signInStart = (emailAndPassword) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
})

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

// USER SIGN OUT
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
})

// USER SIGN UP
export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
})

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
})

// FETCH CURRENT USER
export const fetchCurrentUserStart = (token) => ({
  type: UserActionTypes.FETCH_CURRENT_USER_START,
  payload: token,
})

export const fetchCurrentUserSuccess = (currentUser) => ({
  type: UserActionTypes.FETCH_CURRENT_USER_SUCCESS,
  payload: currentUser,
})

export const fetchCurrentUserFailure = (error) => ({
  type: UserActionTypes.FETCH_CURRENT_USER_FAILURE,
  payload: error,
})
