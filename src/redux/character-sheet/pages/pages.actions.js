import CharPageActionTypes from "./pages.types"

export const makeACheck = (typeAndSuccess) => ({
  type: CharPageActionTypes.MAKE_A_CHECK,
  payload: typeAndSuccess,
})
