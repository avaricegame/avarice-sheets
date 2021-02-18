import Axios from "axios"

export function signUserIn(email, password) {
  return Axios.post(`http://localhost:2890/login`, {
    email,
    password,
  })
}

export function signUserUp() {}

export function fetchUser(token) {
  return Axios.get(`http://localhost:2890/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
