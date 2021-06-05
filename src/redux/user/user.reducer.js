import UserActionTypes from "./user.types"

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  currentUser: null,
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      }
    case UserActionTypes.SIGN_OUT:
      // remove the token from local storage as well
      localStorage.removeItem("token")
      // temporarily alert
      window.alert("You have successfully logged out.")
      return {
        ...state,
        currentUser: null,
        token: null,
        error: null,
      }
    case UserActionTypes.FETCH_CURRENT_USER_START:
      return {
        ...state,
        token: action.payload.token,
      }
    case UserActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
