import AppActionTypes from "./app.types"

export const togglePopupForm = (popupFormType) => ({
  type: AppActionTypes.TOGGLE_POPUP,
  payload: popupFormType,
})

export const togglePopupFormForEdit = (object) => ({
  type: AppActionTypes.TOGGLE_POPUP_FOR_EDIT,
  payload: object,
})

// FLASH MESSAGE TYPES ARE 'ALERT', 'SUCCESS', 'INFO'
export const addFlashMessage = (message, type) => ({
  type: AppActionTypes.ADD_FLASH_MESSAGE,
  payload: { message, type },
})

export const fetchAdditionalResourcesStart = () => ({
  type: AppActionTypes.FETCH_ADDITIONAL_RESOURCES_START,
})

export const fetchAdditionalResourcesSuccess = (additionalResources) => ({
  type: AppActionTypes.FETCH_ADDITIONAL_RESOURCES_SUCCESS,
  payload: additionalResources,
})

export const fetchAdditionalResourcesFailure = (errorMessage) => ({
  type: AppActionTypes.FETCH_ADDITIONAL_RESOURCES_FAILURE,
  payload: errorMessage,
})
