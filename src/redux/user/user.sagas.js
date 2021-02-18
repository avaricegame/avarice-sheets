import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types"

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
} from "./user.actions"

import { signUserIn, fetchUser, checkToken } from "../api/api"

// FETCH CURRENT USER
export function* onFetchCurrentUserStart() {
  yield takeLatest(UserActionTypes.FETCH_CURRENT_USER_START, fetchCurrentUser)
}

export function* fetchCurrentUser({ payload: { token } }) {
  try {
    const response = yield fetchUser(token)
    yield put(fetchCurrentUserSuccess(response.data))
  } catch (error) {
    yield put(fetchCurrentUserFailure(error))
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
      localStorage.setItem("token", response.data.token)
      yield put(signInSuccess(response.data.token))
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

// // SIGN OUT A USER
// export function* onSignOutStart() {
//   yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
// }

// export function* signOut() {
//   try {
//     yield auth.signOut()
//     yield put(signOutSuccess())
//   } catch (error) {
//     yield put(signOutFailure(error))
//   }
// }

// // CHECK USER SESSION
// export function* onCheckUserSession() {
//   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
// }

// export function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser()
//     if (!userAuth) return

//     yield getSnapshotFromUserAuth(userAuth)
//   } catch (error) {
//     yield put(signInFailure(error))
//   }
// }

// EXPORT USER SAGAS
export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onFetchCurrentUserStart),
    // call(onCheckUserSession),
    // call(onSignOutStart),
    // call(onSignUpStart),
    // call(onSignUpSuccess),
  ])
}
