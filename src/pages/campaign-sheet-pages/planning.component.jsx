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

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

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
      currentMissionID: this.props.missions[0].id,
    }
  }

  selectMissionHandler({ target: { value } }) {
    this.setState({
      currentMissionID: value,
    })
  }

  render() {
    const {
      missions,
      togglePopupForm,
      environment,
      inventoryItems: { weapons, wearables, items },
      npcs,
    } = this.props
    const { currentMissionID } = this.state

    const currentMission = getSingleMissionByID(missions, currentMissionID)
    // const currentEnvironment = findInteractablesOnlyFromCertainMission(
    //   environment,
    //   currentMissionID
    // )
    const currentWeapons = findInteractablesOnlyFromCertainMission(weapons, currentMissionID)
    const currentWearables = findInteractablesOnlyFromCertainMission(wearables, currentMissionID)
    const currentItems = findInteractablesOnlyFromCertainMission(items, currentMissionID)
    const currentNPCS = findInteractablesOnlyFromCertainMission(npcs, currentMissionID)

    return (
      <>
        <SheetsHeading heading="Planning" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Notes">
              <Button onClick={() => togglePopupForm(PopupFormTypes.CREATE_A_NEW_MISSION)}>
                Create a New Mission
              </Button>
              <Card heading="Selected Mission:">
                {/* <select onChange={(e) => this.selectMissionHandler(e)}>
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
                </select> */}
              </Card>
              <MissionCard mission={currentMission} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="NPCS">
              <Button onClick={() => togglePopupForm(PopupFormTypes.GENERATE_NEW_NPC)}>
                Generate New NPC
              </Button>
              <DisplayNPCS moveEdit npcs={currentNPCS} whatToEdit="npcToEdit" />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Inventory Items">
              <Button onClick={() => togglePopupForm(PopupFormTypes.GENERATE_NEW_INVENTORY_ITEM)}>
                Generate New Inventory Item
              </Button>
              {/* <DisplayWeapons
                moveEdit
                blue
                weapons={currentWeapons}
                quatheading="Weapon"
                whatToEdit="weaponToEdit"
              /> */}
              <DisplayItems
                moveEdit
                blue
                items={currentItems}
                quatheading="Item"
                whatToEdit="itemToEdit"
              />
              <DisplayWearables
                moveEdit
                blue
                wearables={currentWearables}
                quatheading="Wearable"
                whatToEdit="wearableToEdit"
              />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Environment">
              <Button onClick={() => togglePopupForm(PopupFormTypes.GENERATE_NEW_ENVIRONMENT)}>
                Generate New Environment
              </Button>
              {/* <DisplayEnvironments
                moveEdit
                environments={currentEnvironment}
                whatToEdit="environmentToEdit"
              /> */}
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

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanningPage)
