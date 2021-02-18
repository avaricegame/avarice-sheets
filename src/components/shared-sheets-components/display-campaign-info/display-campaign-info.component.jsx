import React from "react"

// const findCurrentMissionName = (missionsArray) => {
//   const currentMission = missionsArray.filter((mission) => mission.current)
//   return currentMission[0].name
// }

// const findTotalMissionsServed = (missionsArray) => {
//   const completedMissions = missionsArray.filter((mission) => mission.complete)
//   return completedMissions.length
// }

const DisplayCampaignInfo = ({ players, missions, background, creatorName }) => (
  <>
    <table>
      <tbody>
        {creatorName ? (
          <tr>
            <td>Created By: </td>
            <td>{creatorName}</td>
          </tr>
        ) : null}
        <tr>
          <td>Players:</td>
          <td>{players.join(", ")}</td>
        </tr>
        <tr>
          <td>Characters:</td>
          <td>{players.join(", ")}</td>
        </tr>
        <tr>
          <td>Missions Served:</td>
          {/* <td>{findTotalMissionsServed(missions)}</td> */}
        </tr>
        <tr>
          <td>Current Mission:</td>
          <td>{/* <em>{findCurrentMissionName(missions)}</em> */}</td>
        </tr>
      </tbody>
    </table>
    {background ? (
      <p>
        <strong>Background: </strong>
        {background}
      </p>
    ) : null}
  </>
)

export default DisplayCampaignInfo
