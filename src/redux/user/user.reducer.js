import UserActionTypes from "./user.types"

const INITIAL_STATE = {
  token: null,
  currentUser: null,
  error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
