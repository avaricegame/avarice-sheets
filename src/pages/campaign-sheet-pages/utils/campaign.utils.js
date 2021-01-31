export const getOnlyFutureMissions = (missions) => {
  return missions.filter((mission) => !mission.complete)
}

export const getOnlyCompletedMissions = (missions) => {
  return missions.filter((mission) => mission.complete)
}

export const getCurrentMission = (missions) => {
  return missions.find((mission) => mission.current)
}

export const getCurrentMissionID = (missions) => {
  const currentMission = getCurrentMission(missions)
  return currentMission.id
}

export const getCurrentMissionNameAndStatus = (missions) => {
  const currentMission = getCurrentMission(missions)
  return `${currentMission.name} (Current)`
}
