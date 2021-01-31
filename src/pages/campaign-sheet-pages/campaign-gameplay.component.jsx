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

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

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
      displayNPCS: true,
      displayEnvironment: true,
      displayItems: true,
    }

    this.handleInteractableSelect = this.handleInteractableSelect.bind(this)
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

  handleInteractableSelect(e) {
    console.log(e.target.value)
    if (e.target.value === "NPCS") {
      this.setState({
        displayNPCS: true,
        displayEnvironment: false,
        displayItems: false,
      })
    } else if (e.target.value === "ENVIRONMENT") {
      this.setState({
        displayNPCS: false,
        displayEnvironment: true,
        displayItems: false,
      })
    } else if (e.target.value === "ITEMS") {
      this.setState({
        displayNPCS: false,
        displayEnvironment: false,
        displayItems: true,
      })
    } else if (e.target.value === "ALL") {
      this.setState({
        displayNPCS: true,
        displayEnvironment: true,
        displayItems: true,
      })
    } else {
      this.setState({
        displayNPCS: false,
        displayEnvironment: false,
        displayItems: false,
      })
    }
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
      displayEnvironment,
      displayItems,
      displayNPCS,
    } = this.state
    const activeInventoryItems = [...activeItems, ...activeWeapons, ...activeWearables]
    const inactiveInventoryItems = [...inactiveWeapons, ...inactiveWearables, ...inactiveItems]
    const allActiveInteractablesTotal =
      activeInventoryItems.length + activeNPCS.length + activeEnvironments.length
    const allInactiveInteractablesTotal =
      inactiveInventoryItems.length + inactiveNPCS.length + inactiveEnvironments.length

    const { togglePopupForm } = this.props
    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Actions">
              <Button onClick={() => togglePopupForm(PopupFormTypes.START_COMBAT)}>
                Start Combat
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.PERFORM_A_CHECK_CAMPAIGN)}>
                Perform a Check
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.DISPENSE_DAMAGE)}>
                Dispense Damage
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.GIVE_OR_TAKE_MONEY)}>
                Give or Take Money
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.BUY_OR_SELL_ITEMS)}>
                Buy or Sell Items
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.GIVE_OR_TAKE_ITEMS)}>
                Give or Take Items
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.REST_PARTY_CAMPAIGN)}>
                Rest Party
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.LEVEL_UP_PARTY_CAMPAIGN)}>
                Level Up Party
              </Button>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Current Mission">
              <Card heading={`${currentMission.date}: ${currentMission.name}`}>
                {currentMission.notes}
                <p onClick={() => togglePopupForm(PopupFormTypes.EDIT_MISSION)} className="actions">
                  EDIT
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Mission Interactables">
              <Button onClick={() => togglePopupForm(PopupFormTypes.CREATE_INTERACTABLE_GAMEPLAY)}>
                Create Interactable
              </Button>
              <Card heading="View:">
                <select onChange={this.handleInteractableSelect}>
                  <option value="ALL">All Interactables ({allActiveInteractablesTotal})</option>
                  <option value="NPCS">NPCS ({activeNPCS.length})</option>
                  <option value="ITEMS">Inventory Items ({activeInventoryItems.length})</option>
                  <option value="ENVIRONMENT">Environment ({activeEnvironments.length})</option>
                  <option value="NONE">None</option>
                </select>
              </Card>
              {displayNPCS ? <DisplayNPCS activate npcs={activeNPCS} /> : null}
              {displayEnvironment ? (
                <DisplayEnvironments activate environments={activeEnvironments} />
              ) : null}
              {displayItems ? <DisplayItems activate blue items={activeItems} /> : null}
              {displayItems ? <DisplayWearables activate blue wearables={activeWearables} /> : null}
              {displayItems ? <DisplayWeapons activate blue weapons={activeWeapons} /> : null}

              <Card blue heading={`Inactive (${allInactiveInteractablesTotal})`}>
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

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignGameplay)
