export const findInteractablesOnlyFromCertainMission = (interacatblesArray, missionID) => {
  return interacatblesArray.filter((interactable) => interactable.missionID === missionID)
}

export const getSingleMissionByID = (missions, missionID) => {
  return missions.find((mission) => mission.id === missionID)
}
