import Axios from "axios"

// [TO DO] use axios instances to be able to have different base urls (because I need to switch between sheets and regular api)
Axios.defaults.baseURL = process.env.REACT_APP_SHEETS_API_URL

export function signUserIn(email, password) {
  return Axios.post(`/login`, {
    email,
    password,
  })
}

export function signUserUp(username, email, password) {
  return Axios.post(`/register`, {
    username,
    email,
    password,
  })
}

export function fetchUser(token) {
  return Axios.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function checkToken(token) {
  return Axios.get(`/checktoken`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
