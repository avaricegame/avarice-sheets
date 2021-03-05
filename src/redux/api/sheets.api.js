import Axios from "axios"

// [TO DO] use axios instances to be able to have different base urls (because I need to switch between sheets and regular api)
Axios.defaults.baseURL = process.env.REACT_APP_SHEETS_API_URL

// export function createCharSheet(charSheetData, token) {
//   return Axios.post(
//     `/character/create`,
//     {
//       email,
//       password,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
// }

export function getCharSheet(token, charid) {
  return Axios.get(`/character/${charid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// export function deleteCharSheet(charid, token) {
//   return Axios.post(
//     `/register`,
//     {
//       username,
//       email,
//       password,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )
// }
