export const findPlayersRace = (races, raceID) => {
  return races.filter((race) => race._id === raceID)[0]
}
