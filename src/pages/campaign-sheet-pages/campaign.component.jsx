import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../components/card-container/card-container.component"
import { default as Button } from "../../components/custom-button/custom-button.component"

import {
  selectPersonalLog,
  selectMissions,
  selectCaptainsLog,
  selectCampaignName,
  selectBackground,
  selectCampaignID,
  selectPlayersNames,
  selectCharactersNames,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

// util functions
import { getOnlyFutureMissions, getOnlyCompletedMissions } from "./utils/campaign.utils"

// display components
import DisplayCampaignInfo from "../../components/shared-sheets-components/display-campaign-info/display-campaign-info.component"
import { default as Log } from "../../components/shared-sheets-components/display-log/display-log.component"
import MissionCard from "../../components/campaign-sheet-components/mission-card/mission-card.component"

class CampaignPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      futureMissions: [],
      completedMissions: [],
    }
  }

  componentDidMount() {
    const { missions, campaignName } = this.props

    document.title = `Campaign | ${campaignName} | Avarice Sheets`

    this.setState({
      futureMissions: getOnlyFutureMissions(missions),
      completedMissions: getOnlyCompletedMissions(missions),
    })
  }

  componentWillUnmount() {
    this.setState({
      futureMissions: [],
      completedMissions: [],
    })
  }

  render() {
    const {
      personalLog,
      missions,
      captainsLog,
      campaignName,
      campaignBackground,
      campaignID,
      playersNames,
      charactersNames,
    } = this.props
    const { futureMissions, completedMissions } = this.state
    return (
      <>
        <SheetsHeading heading="Campaign" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Details">
              <Button>Edit Campaign Details</Button>
              <Card
                blue
                heading="Campaign Details"
                subheading={`For ${campaignName}`}
                terheading={`ID#${campaignID}`}
              >
                <DisplayCampaignInfo
                  playersNames={playersNames}
                  charactersNames={charactersNames}
                  missions={missions}
                  background={campaignBackground}
                />
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Campaign Logs">
              <Button>Add a New Captain's Log</Button>
              <Card blue heading="Captain's Logs" subheading={`For ${campaignName}`}>
                {captainsLog.map(({ id, title, details }) => (
                  <Log id={id} title={title} details={details} key={id} />
                ))}
              </Card>
              <p>
                * Note: All characters who have joined your campaign will see your Captain's Logs.
              </p>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Future Missions">
              {futureMissions.map((mission) => (
                <MissionCard mission={mission} key={mission.id} />
              ))}
            </Section>
            <Section heading="Completed Missions">
              {completedMissions.map((mission) => (
                <MissionCard mission={mission} key={mission.id} />
              ))}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Personal Logs">
              <Button>Add a New Personal Log</Button>
              <Card blue heading="Personal Mission Logs" subheading={`For ${campaignName}`}>
                {personalLog.map(({ id, title, details }) => (
                  <Log id={id} title={title} details={details} key={id} />
                ))}
              </Card>
              <p>* Note: ONLY YOU can see these logs.</p>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  personalLog: selectPersonalLog,
  missions: selectMissions,
  captainsLog: selectCaptainsLog,
  campaignName: selectCampaignName,
  campaignBackground: selectBackground,
  campaignID: selectCampaignID,
  playersNames: selectPlayersNames,
  charactersNames: selectCharactersNames,
})

export default connect(mapStateToProps)(CampaignPage)
