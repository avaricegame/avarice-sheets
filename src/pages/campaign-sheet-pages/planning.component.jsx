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
  getSingleMissionByID,
  findInteractablesOnlyFromCertainMission,
} from "./utils/plannings.utils"
import { getCurrentMission } from "./utils/campaign.utils"

// display components
import MissionCard from "../../components/campaign-sheet-components/mission-card/mission-card.component"
import NPCCard from "../../components/campaign-sheet-components/npc-card/npc-card.component"
import DisplayWeapons from "../../components/shared-sheets-components/display-weapons/display-weapons.component"
import DisplayItems from "../../components/shared-sheets-components/display-items/display-items.component"
import DisplayWearables from "../../components/shared-sheets-components/display-wearables/display-wearables.component"

class PlanningPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMission: {},
    }
  }

  componentDidMount() {
    const { campaignName, missions } = this.props
    document.title = `Planning | ${campaignName} | Avarice Sheets`
    this.setState({
      currentMission: getCurrentMission(missions),
    })
  }

  componentWillUnmount() {
    this.setState({})
  }
  render() {
    const { currentMission } = this.state
    const {
      environment,
      inventoryItems: { weapons, wearables, items },
      npcs,
      missions,
    } = this.props

    const currentEnvironment = findInteractablesOnlyFromCertainMission(
      environment,
      currentMission.id
    )
    const currentWeapons = findInteractablesOnlyFromCertainMission(weapons, currentMission.id)
    const currentWearables = findInteractablesOnlyFromCertainMission(wearables, currentMission.id)
    const currentItems = findInteractablesOnlyFromCertainMission(items, currentMission.id)
    const currentNPCS = findInteractablesOnlyFromCertainMission(npcs, currentMission.id)

    return (
      <>
        <SheetsHeading heading="Planning" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Notes">
              <Button>Create a New Mission</Button>
              <Card heading="Selected Mission:">
                <select>
                  <option>Current Mission</option>
                  {missions.map((mission) => (
                    <option key={mission.id}>
                      {mission.date} | {mission.name}
                    </option>
                  ))}
                </select>
              </Card>
              <MissionCard mission={currentMission} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="NPCS">
              <Button>Generate New NPC</Button>
              {currentNPCS.map((npc, index) => (
                <NPCCard npc={npc} key={index} />
              ))}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Inventory Items">
              <Button>Generate New Inventory Item</Button>

              <DisplayWeapons blue weapons={currentWeapons} quatheading="Weapon" />

              <DisplayItems blue items={currentItems} quatheading="Item" />

              <DisplayWearables blue wearables={currentWearables} quatheading="Wearable" />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Environment">
              <Button>Generate New Environment</Button>
              {currentEnvironment.map((environment) => {
                const { name, hp, description, effects } = environment
                return (
                  <Card blue heading={name} subheading={`Hit Points: ${hp}`}>
                    <p>
                      <strong>Description: </strong>
                      {description}
                    </p>
                    <p>
                      <strong>Effects: </strong>
                      {effects.name ? "yes" : "n/a"}
                    </p>
                  </Card>
                )
              })}
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
