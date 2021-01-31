export const findInteractablesOnlyFromCertainMission = (interacatblesArray, missionID) => {
  return interacatblesArray.filter((interactable) => interactable.missionID === missionID)
}

export const getSingleMissionByID = (missions, missionID) => {
  return missions.filter((mission) => mission.id === missionID)
}
