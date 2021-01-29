import UserActionTypes from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  isUserFetching: false,
  errorMessage: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_CURRENT_USER_START:
      return {
        ...state,
        isUserFetching: true,
      }
    case UserActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isUserFetching: false,
        errorMessage: undefined,
        currentUser: action.payload,
      }
    case UserActionTypes.FETCH_CURRENT_USER_FAILURE:
      return {
        ...state,
        isUserFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
