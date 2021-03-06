import Axios from "axios"

Axios.defaults.baseURL = process.env.REACT_APP_SHEETS_API_URL

export function getCharSheet(token, charid) {
  return Axios.get(`/character/${charid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export function getCampSheet(token, campid) {
  return Axios.get(`/campaign/${campid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

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
