export const getOnlyFutureMissions = (missions) => {
  return missions.filter((mission) => !mission.complete)
}

export const getOnlyCompletedMissions = (missions) => {
  return missions.filter((mission) => mission.complete)
}
