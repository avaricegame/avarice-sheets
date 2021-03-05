import CampSheetActionTypes from "./campaign-sheet.types"

export const fetchCurrentCampSheetStart = (TokenAndID) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_START,
  payload: TokenAndID,
})

export const fetchCurrentCampSheetSuccess = (currentCampSheet) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_SUCCESS,
  payload: currentCampSheet,
})

export const fetchCurrentCampSheetFailureNoneFound = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_FAILURE_NONE_FOUND,
  payload: errorMessage,
})

export const fetchCurrentCampSheetFailureNoPermission = (errorMessage) => ({
  type: CampSheetActionTypes.FETCH_CURRENT_CAMP_SHEET_FAILURE_NO_PERMISSION,
  payload: errorMessage,
})

// fetching all the character sheet information for the sheets who've joined the campaign
// export const fetchCharSheetsOfPlayersFailure = (errorMessage) => ({
//   type: CampSheetActionTypes.FETCH_CHAR_SHEETS_OF_PLAYERS_FAILURE,
//   payload: errorMessage,
// })

// export const fetchCharSheetsOfPlayersStartAsync = (currentCampSheet) => {
//   return (dispatch) => {
//     const { playersIDS } = currentCampSheet

//     const CHARACTER_SHEETS = require("../json/character-sheets.json")

//     let playersCharSheets = []

//     playersIDS.forEach((playerID) => {
//       // find all the character sheets from the playersIDS array and add them to playersCharSheets
//       let charSheet = CHARACTER_SHEETS.filter((charSheet) => charSheet._id === playerID)
//       if (!charSheet.length) {
//         return dispatch(
//           fetchCharSheetsOfPlayersFailure("Could not fetch a Character Sheet with the provided ID.")
//         )
//       }
//       playersCharSheets = [...playersCharSheets, charSheet[0]]
//     })

//     // add the array of players character sheets to the main current campaign sheet object
//     currentCampSheet.players = playersCharSheets

//     return dispatch(fetchRaceAndClassOfPlayersCharSheets(currentCampSheet))
//   }
// }

// export const fetchRaceAndClassOfPlayersCharSheets = (currentCampSheet) => {
//   return (dispatch) => {
//     currentCampSheet.players.forEach((playersCharSheet) => {
//       const { classID, raceID } = playersCharSheet

//       const CLASSES = require("../json/data/classes.json")
//       const RACES = require("../json/data/races.json")

//       // fetch the right class
//       const requestedClass = CLASSES.filter((theClass) => theClass._id === classID)
//       if (!requestedClass.length) {
//         return dispatch(
//           fetchCharSheetsOfPlayersFailure(
//             "Could not fetch a Class with the provided ID for Character Sheet " +
//               playersCharSheet._id +
//               "."
//           )
//         )
//       }

//       playersCharSheet.classInfo = requestedClass[0]

//       // fetch the right race
//       const requestedRace = RACES.filter((theRace) => theRace._id === raceID)
//       if (!requestedRace.length) {
//         return dispatch(
//           fetchCharSheetsOfPlayersFailure(
//             "Could not fetch a Race with the provided ID for Character Sheet " +
//               playersCharSheet._id +
//               "."
//           )
//         )
//       }

//       playersCharSheet.raceInfo = requestedRace[0]
//     })

//     return dispatch(fetchCurrentCampSheetByIDSuccess(currentCampSheet))
//   }
// }
