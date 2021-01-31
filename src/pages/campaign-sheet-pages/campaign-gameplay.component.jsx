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
  selectCampaignName,
  selectMissions,
  selectNPCS,
  selectInventoryItems,
  selectEnvironment,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

// util functions
import { getCurrentMission, getCurrentMissionID } from "./utils/campaign.utils"
import { findOnlyActiveInteractables, findOnlyInactiveInteractables } from "./utils/combat.utils"
import { findInteractablesOnlyFromCertainMission } from "./utils/plannings.utils"

// display components
import DisplayItems from "../../components/shared-sheets-components/display-items/display-items.component"
import DisplayWearables from "../../components/shared-sheets-components/display-wearables/display-wearables.component"
import DisplayWeapons from "../../components/shared-sheets-components/display-weapons/display-weapons.component"
import DisplayEnvironments from "../../components/campaign-sheet-components/display-environments/display-environments.component"
import DisplayNPCS from "../../components/campaign-sheet-components/display-npcs/display-npcs.component"

class CampaignGameplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMission: {},
      activeNPCS: [],
      inactiveNPCS: [],
      activeWeapons: [],
      activeWearables: [],
      activeItems: [],
      inactiveWeapons: [],
      inactiveWearables: [],
      inactiveItems: [],
      activeEnvironments: [],
      inactiveEnvironments: [],
    }
  }

  componentDidMount() {
    const { missions, campaignName, npcs, inventoryItems, environment } = this.props

    document.title = `Gameplay | ${campaignName} | Avarice Sheets`

    this.setState({
      currentMission: getCurrentMission(missions),
      activeNPCS: findOnlyActiveInteractables(
        findInteractablesOnlyFromCertainMission(npcs, getCurrentMissionID(missions))
      ),
      inactiveNPCS: findOnlyInactiveInteractables(
        findInteractablesOnlyFromCertainMission(npcs, getCurrentMissionID(missions))
      ),
      activeWeapons: findOnlyActiveInteractables(
        findInteractablesOnlyFromCertainMission(
          inventoryItems.weapons,
          getCurrentMissionID(missions)
        )
      ),
      activeWearables: findOnlyActiveInteractables(
        findInteractablesOnlyFromCertainMission(
          inventoryItems.wearables,
          getCurrentMissionID(missions)
        )
      ),
      activeItems: findOnlyActiveInteractables(
        findInteractablesOnlyFromCertainMission(inventoryItems.items, getCurrentMissionID(missions))
      ),
      inactiveWeapons: findOnlyInactiveInteractables(
        findInteractablesOnlyFromCertainMission(
          inventoryItems.weapons,
          getCurrentMissionID(missions)
        )
      ),
      inactiveWearables: findOnlyInactiveInteractables(
        findInteractablesOnlyFromCertainMission(
          inventoryItems.wearables,
          getCurrentMissionID(missions)
        )
      ),
      inactiveItems: findOnlyInactiveInteractables(
        findInteractablesOnlyFromCertainMission(inventoryItems.items, getCurrentMissionID(missions))
      ),
      activeEnvironments: findOnlyActiveInteractables(
        findInteractablesOnlyFromCertainMission(environment, getCurrentMissionID(missions))
      ),
      inactiveEnvironments: findOnlyInactiveInteractables(
        findInteractablesOnlyFromCertainMission(environment, getCurrentMissionID(missions))
      ),
    })
  }

  componentWillUnmount() {
    this.setState({
      currentMission: null,
      activeNPCS: [],
      inactiveNPCS: [],
      activeWeapons: [],
      activeWearables: [],
      activeItems: [],
      inactiveWeapons: [],
      inactiveWearables: [],
      inactiveItems: [],
      activeEnvironments: [],
      inactiveEnvironments: [],
    })
  }

  render() {
    const { currentMission } = this.state
    const {
      activeNPCS,
      activeWeapons,
      activeWearables,
      activeItems,
      activeEnvironments,
      inactiveNPCS,
      inactiveWeapons,
      inactiveWearables,
      inactiveItems,
      inactiveEnvironments,
    } = this.state
    const inactiveInventoryItems = [...inactiveWeapons, ...inactiveWearables, ...inactiveItems]
    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Actions">
              <Button>Start Combat</Button>
              <Button>Perform a Check</Button>
              <Button>Dispense Damage</Button>
              <Button>Give or Take Money</Button>
              <Button>Buy or Sell Items</Button>
              <Button>Give or Take Items</Button>
              <Button>Rest Party</Button>
              <Button>Level Up Party</Button>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Current Mission">
              <Card heading={`${currentMission.date}: ${currentMission.name}`}>
                {currentMission.notes}
                <p className="actions">EDIT</p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Mission Interactables">
              <Button>Create Interactable</Button>
              <Card heading="View:">
                <select>
                  <option value="entire-inventory">All Interactables</option>
                  <option value="weapons">NPCS</option>
                  <option value="items">Inventory Items</option>
                  <option value="wearables">Environment</option>
                </select>
              </Card>
              <DisplayNPCS activate npcs={activeNPCS} />
              <DisplayEnvironments activate environments={activeEnvironments} />
              <DisplayItems activate blue items={activeItems} />
              <DisplayWearables activate blue wearables={activeWearables} />
              <DisplayWeapons activate blue weapons={activeWeapons} />

              <Card blue heading="Inactive">
                {inactiveInventoryItems.map((inventoryItem, index) => (
                  <div key={index}>
                    <p>
                      <strong>{inventoryItem.name}: </strong> {inventoryItem.description}
                      <span>see more</span>
                    </p>
                    <p className="actions">SHOW MORE | ACTIVATE</p>
                  </div>
                ))}
                {inactiveNPCS.map((npc, index) => (
                  <div key={index}>
                    <p>
                      <strong>{npc.characterName}: </strong> {npc.enemy ? "Enemy" : "Friend"}
                      <span>see more</span>
                    </p>
                    <p className="actions">SHOW MORE | ACTIVATE</p>
                  </div>
                ))}
                {inactiveEnvironments.map((environment, index) => (
                  <div key={index}>
                    <p>
                      <strong>{environment.name}: </strong> {environment.description}
                      <span>see more</span>
                    </p>
                    <p className="actions">SHOW MORE | ACTIVATE</p>
                  </div>
                ))}
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  missions: selectMissions,
  campaignName: selectCampaignName,
  npcs: selectNPCS,
  inventoryItems: selectInventoryItems,
  environment: selectEnvironment,
})

export default connect(mapStateToProps)(CampaignGameplay)
