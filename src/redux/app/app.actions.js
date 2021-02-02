import AppActionTypes from "./app.types"

export const togglePopupForm = (popupFormType) => ({
  type: AppActionTypes.TOGGLE_POPUP,
  payload: popupFormType,
})

export const togglePopupFormForEdit = (object) => ({
  type: AppActionTypes.TOGGLE_POPUP_FOR_EDIT,
  payload: object,
})

export const fetchRacesSuccess = (theRaces) => ({
  type: AppActionTypes.FETCH_RACES,
  payload: theRaces,
})

export const fetchClassesSuccess = (theClasses) => ({
  type: AppActionTypes.FETCH_CLASSES,
  payload: theClasses,
})

export const fetchWeaponsSuccess = (theWeapons) => ({
  type: AppActionTypes.FETCH_WEAPONS,
  payload: theWeapons,
})

export const fetchWearablesSuccess = (theWearables) => ({
  type: AppActionTypes.FETCH_WEARABLES,
  payload: theWearables,
})

export const fetchItemsSuccess = (theItems) => ({
  type: AppActionTypes.FETCH_ITEMS,
  payload: theItems,
})

export const fetchAdditionalResourcesFailure = (errorMessage) => ({
  type: AppActionTypes.FETCH_ADDITIONAL_RESOURCES_FAILURE,
  payload: errorMessage,
})

export const fetchAdditionalResourcesStartAsync = () => {
  return (dispatch) => {
    const RACES = require("../json/data/races.json")
    if (RACES.length) {
      dispatch(fetchRacesSuccess(RACES))
    } else {
      return dispatch(fetchAdditionalResourcesFailure("There was a problem fetching the races."))
    }

    const CLASSES = require("../json/data/classes.json")
    if (CLASSES.length) {
      dispatch(fetchClassesSuccess(CLASSES))
    } else {
      return dispatch(fetchAdditionalResourcesFailure("There was a problem fetching the classes."))
    }

    const WEAPONS = require("../json/inventory/weapons.json")
    if (WEAPONS.length) {
      dispatch(fetchWeaponsSuccess(WEAPONS))
    } else {
      return dispatch(fetchAdditionalResourcesFailure("There was a problem fetching the weapons."))
    }

    const WEARABLES = require("../json/inventory/wearables.json")
    if (WEARABLES.length) {
      dispatch(fetchWearablesSuccess(WEARABLES))
    } else {
      return dispatch(
        fetchAdditionalResourcesFailure("There was a problem fetching the wearables.")
      )
    }

    const ITEMS = require("../json/inventory/items.json")
    if (ITEMS.length) {
      dispatch(fetchItemsSuccess(ITEMS))
    } else {
      return dispatch(fetchAdditionalResourcesFailure("There was a problem fetching the items."))
    }
  }
}
