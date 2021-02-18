import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types"

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
} from "./user.actions"

import { signUserIn, fetchUser } from "../api/api"

// FETCH CURRENT USER
export function* onFetchCurrentUserStart() {
  yield takeLatest(UserActionTypes.FETCH_CURRENT_USER_START, fetchCurrentUser)
}

export function* fetchCurrentUser({ payload: { token } }) {
  try {
    const response = yield fetchUser(token)
    yield put(fetchCurrentUserSuccess(response.data))
  } catch (error) {
    window.alert("You have been signed out.")
    // since token is invalid or expired, remove from local storage
    localStorage.removeItem("token")
    yield put(fetchCurrentUserFailure(error.response.data))
  }
}

// SIGN IN A USER
export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn)
}

export function* signIn({ payload: { email, password } }) {
  try {
    const response = yield signUserIn(email, password)

    if (response.data.token) {
      // add token to local storage to persist sign ins
      localStorage.setItem("token", response.data.token)
      // add item to local storage to save whether to load sign in or sign up
      localStorage.setItem("hasAccount", true)
      // dispatch the sign in success
      yield put(signInSuccess({ token: response.data.token }))
      // if sign in was successful, then fetch the current user
      const fetchUserResponse = yield fetchUser(response.data.token)
      yield put(fetchCurrentUserSuccess(fetchUserResponse.data))
    } else {
      window.alert(response.data.error)
      yield put(signInFailure(response.data.error))
    }
  } catch (error) {
    window.alert("Oops, something went wrong on our end. Please try again later.")
    yield put(signInFailure(error))
  }
}

// SIGN A USER UP
// export function* onSignUpStart() {
//   yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
// }

// export function* signUp({ payload: { email, password, displayName } }) {
//   try {
//     const user = yield auth.createUserWithEmailAndPassword(email, password)
//     yield put(signUpSuccess({ user, additionalData: { displayName } }))
//   } catch (error) {
//     yield put(signUpFailure(error))
//   }
// }

// export function* onSignUpSuccess() {
//   yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
// }

// export function* signInAfterSignUp({ payload: { user, additionalData } }) {
//   yield getSnapshotFromUserAuth(user, additionalData)
// }

// EXPORT USER SAGAS
export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onFetchCurrentUserStart),
    // call(onSignUpStart),
  ])
}
