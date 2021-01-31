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
  selectEnvironment,
  selectInventoryItems,
  selectNPCS,
  selectMissions,
  selectCampaignName,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

// util functions
import {
  findInteractablesOnlyFromCertainMission,
  getSingleMissionByID,
} from "./utils/plannings.utils"
import { getCurrentMissionID, getCurrentMissionNameAndStatus } from "./utils/campaign.utils"

// display components
import MissionCard from "../../components/campaign-sheet-components/mission-card/mission-card.component"
import DisplayWeapons from "../../components/shared-sheets-components/display-weapons/display-weapons.component"
import DisplayItems from "../../components/shared-sheets-components/display-items/display-items.component"
import DisplayWearables from "../../components/shared-sheets-components/display-wearables/display-wearables.component"
import DisplayEnvironments from "../../components/campaign-sheet-components/display-environments/display-environments.component"
import DisplayNPCS from "../../components/campaign-sheet-components/display-npcs/display-npcs.component"

class PlanningPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMission: false,
      currentWeapons: [],
      currentWearables: [],
      currentItems: [],
      currentNPCS: [],
      currentEnvironment: [],
    }
  }

  componentDidMount() {
    const {
      missions,
      environment,
      inventoryItems: { weapons, wearables, items },
      npcs,
    } = this.props

    const currentMissionID = getCurrentMissionID(missions)

    this.setState({
      currentMission: getSingleMissionByID(missions, currentMissionID),
      currentEnvironment: findInteractablesOnlyFromCertainMission(environment, currentMissionID),
      currentWeapons: findInteractablesOnlyFromCertainMission(weapons, currentMissionID),
      currentWearables: findInteractablesOnlyFromCertainMission(wearables, currentMissionID),
      currentItems: findInteractablesOnlyFromCertainMission(items, currentMissionID),
      currentNPCS: findInteractablesOnlyFromCertainMission(npcs, currentMissionID),
    })
  }

  componentWillUnmount() {
    this.setState({
      currentMission: false,
      currentWeapons: [],
      currentWearables: [],
      currentItems: [],
      currentNPCS: [],
      currentEnvironment: [],
    })
  }

  selectMissionHandler({ target: { value } }) {
    const {
      missions,
      environment,
      inventoryItems: { weapons, wearables, items },
      npcs,
    } = this.props

    this.setState({
      currentMission: getSingleMissionByID(missions, value),
      currentEnvironment: findInteractablesOnlyFromCertainMission(environment, value),
      currentWeapons: findInteractablesOnlyFromCertainMission(weapons, value),
      currentWearables: findInteractablesOnlyFromCertainMission(wearables, value),
      currentItems: findInteractablesOnlyFromCertainMission(items, value),
      currentNPCS: findInteractablesOnlyFromCertainMission(npcs, value),
    })
  }

  render() {
    const {
      currentMission,
      currentWeapons,
      currentWearables,
      currentItems,
      currentNPCS,
      currentEnvironment,
    } = this.state

    const { missions } = this.props

    console.log(currentMission)

    return (
      <>
        <SheetsHeading heading="Planning" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Notes">
              <Button>Create a New Mission</Button>
              <Card heading="Selected Mission:">
                <select onChange={(e) => this.selectMissionHandler(e)}>
                  <option value={getCurrentMissionID(missions)}>
                    {getCurrentMissionNameAndStatus(missions)}
                  </option>
                  {missions.map((mission) => {
                    if (!mission.current) {
                      return (
                        <option value={mission.id} key={mission.id}>
                          {mission.name} (
                          {mission.complete
                            ? "Complete"
                            : mission.planned
                            ? "Planned"
                            : mission.date}
                          )
                        </option>
                      )
                    } else {
                      return null
                    }
                  })}
                </select>
              </Card>
              <MissionCard mission={currentMission} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="NPCS">
              <Button>Generate New NPC</Button>
              <DisplayNPCS moveEdit npcs={currentNPCS} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Inventory Items">
              <Button>Generate New Inventory Item</Button>
              <DisplayWeapons moveEdit blue weapons={currentWeapons} quatheading="Weapon" />
              <DisplayItems moveEdit blue items={currentItems} quatheading="Item" />
              <DisplayWearables moveEdit blue wearables={currentWearables} quatheading="Wearable" />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Environment">
              <Button>Generate New Environment</Button>
              <DisplayEnvironments moveEdit environments={currentEnvironment} />
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  environment: selectEnvironment,
  inventoryItems: selectInventoryItems,
  npcs: selectNPCS,
  missions: selectMissions,
  campaignName: selectCampaignName,
})

export default connect(mapStateToProps)(PlanningPage)
