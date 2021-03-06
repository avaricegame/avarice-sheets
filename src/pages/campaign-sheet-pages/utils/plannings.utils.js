export const findInteractablesOnlyFromCertainMission = (interacatblesArray, missionID) => {
  return interacatblesArray.filter((interactable) => interactable.missionID === missionID)
}
