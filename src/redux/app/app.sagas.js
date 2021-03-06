import { takeLatest, put, all, call } from "redux-saga/effects"

import AppActionTypes from "./app.types"

import { fetchAdditionalResourcesSuccess, fetchAdditionalResourcesFailure } from "./app.actions"

import { getRaces, getClasses, getWeapons, getWearables, getItems } from "../api/resources.api"

// FETCH ADDITIONAL RESOURCES
export function* onFetchAdditionalResources() {
  yield takeLatest(AppActionTypes.FETCH_ADDITIONAL_RESOURCES_START, fetchAdditionalResources)
}

export function* fetchAdditionalResources() {
  try {
    // make sure that all five promises return the data with no errors
    const additionalResourcesArray = yield Promise.all([
      getRaces(),
      getClasses(),
      getWeapons(),
      getWearables(),
      getItems(),
    ])

    // create object to format the returned data into
    const additionalResources = {
      races: [],
      classes: [],
      weapons: [],
      wearables: [],
      items: [],
    }

    // format the returned data using object created above
    additionalResourcesArray.forEach((resource) => {
      switch (resource.config.url) {
        case "/races":
          additionalResources.races = resource.data
          break
        case "/classes":
          additionalResources.classes = resource.data
          break
        case "/weapons":
          additionalResources.weapons = resource.data
          break
        case "/wearables":
          additionalResources.wearables = resource.data
          break
        case "/items":
          additionalResources.items = resource.data
          break
        default:
          break
      }
    })
    // save all loaded resources into the state
    yield put(fetchAdditionalResourcesSuccess(additionalResources))
  } catch (error) {
    yield put(fetchAdditionalResourcesFailure(error.message))
  }
}

// EXPORT APP SAGAS
export function* appSagas() {
  yield all([call(onFetchAdditionalResources)])
}
