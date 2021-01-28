import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardContainer from "../card-container/card-container.component"

import { selectCampSheetList } from "../../redux/campaign-sheet/campaign-sheet.selectors"

const findCurrentMissionName = (missionsArray) => {
  const currentMission = missionsArray.filter((mission) => mission.current)
  return currentMission[0].name
}

const findTotalMissionsServed = (missionsArray) => {
  const completedMissions = missionsArray.filter((mission) => mission.complete)
  return completedMissions.length
}

const CampaignSheetCards = ({ campSheetList }) => (
  <>
    {campSheetList.map((campSheet) => {
      const { campaignName, _id, playersNames, charactersNames, missions } = campSheet
      return (
        <Link className="sheets-card-link" to={`/campaign/${_id}/gameplay`} key={_id}>
          <CardContainer blue heading={campaignName} subheading={`ID#${_id}`}>
            <table>
              <tbody>
                <tr>
                  <td>Players:</td>
                  <td>{playersNames.join(", ")}</td>
                </tr>
                <tr>
                  <td>Characters:</td>
                  <td>{charactersNames.join(", ")}</td>
                </tr>
                <tr>
                  <td>Missions Served:</td>
                  <td>{findTotalMissionsServed(missions)}</td>
                </tr>
                <tr>
                  <td>Current Mission:</td>
                  <td>
                    <em>{findCurrentMissionName(missions)}</em>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContainer>
        </Link>
      )
    })}
  </>
)

const mapStateToProps = createStructuredSelector({
  campSheetList: selectCampSheetList,
})

export default connect(mapStateToProps)(CampaignSheetCards)
