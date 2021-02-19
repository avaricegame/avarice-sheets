import Axios from "axios"

// [TO DO] use axios instances to be able to have different base urls (because I need to switch between sheets and regular api)
Axios.defaults.baseURL = process.env.REACT_APP_SHEETS_API_URL

export function createCharSheet(charSheetData) {
  return Axios.post(`/login`, {
    email,
    password,
  })
}

export function deleteCharSheet(charid) {
  return Axios.post(`/register`, {
    username,
    email,
    password,
  })
}

export function createCharSheet(charSheetData) {
  return Axios.post(`/login`, {
    email,
    password,
  })
}

export function deleteCharSheet(charid) {
  return Axios.post(`/register`, {
    username,
    email,
    password,
  })
}
