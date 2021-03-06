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
  selectCurrentMission,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// util functions
import { findOnlyActiveInteractables, findOnlyInactiveInteractables } from "./utils/combat.utils"
import { findInteractablesOnlyFromCertainMission } from "./utils/plannings.utils"

// display components
import DisplayItems from "../../components/shared-sheets-components/display-items/display-items.component"
import DisplayWearables from "../../components/shared-sheets-components/display-wearables/display-wearables.component"
import DisplayWeapons from "../../components/shared-sheets-components/display-weapons/display-weapons.component"
import DisplayEnvironments from "../../components/campaign-sheet-components/display-environments/display-environments.component"
import DisplayNPCS from "../../components/campaign-sheet-components/display-npcs/display-npcs.component"
import DisplayInactiveItems from "../../components/campaign-sheet-components/display-inactive-interactables/display-inactive-items.component"
import DisplayInactiveWearables from "../../components/campaign-sheet-components/display-inactive-interactables/display-inactive-wearables.component"
import DisplayInactiveWeapons from "../../components/campaign-sheet-components/display-inactive-interactables/display-inactive-weapons.component"
import DisplayInactiveEnvironments from "../../components/campaign-sheet-components/display-inactive-interactables/display-inactive-environments.component"
import DisplayInactiveNPCS from "../../components/campaign-sheet-components/display-inactive-interactables/display-inactive-npcs.component"

class CampaignGameplay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayNPCS: true,
      displayEnvironment: true,
      displayItems: true,
    }

    this.handleInteractableSelect = this.handleInteractableSelect.bind(this)
  }

  componentDidMount() {
    const { campaignName } = this.props
    document.title = `Gameplay | ${campaignName} | Avarice Sheets`
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
    const { npcs, inventoryItems, environment, togglePopupForm, currentMission } = this.props
    const { displayEnvironment, displayItems, displayNPCS } = this.state

    const activeNPCS = findOnlyActiveInteractables(
      findInteractablesOnlyFromCertainMission(npcs, currentMission.id)
    )
    const inactiveNPCS = findOnlyInactiveInteractables(
      findInteractablesOnlyFromCertainMission(npcs, currentMission.id)
    )
    const activeWeapons = findOnlyActiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.weapons, currentMission.id)
    )
    const activeWearables = findOnlyActiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.wearables, currentMission.id)
    )
    const activeItems = findOnlyActiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.items, currentMission.id)
    )
    const inactiveWeapons = findOnlyInactiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.weapons, currentMission.id)
    )
    const inactiveWearables = findOnlyInactiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.wearables, currentMission.id)
    )
    const inactiveItems = findOnlyInactiveInteractables(
      findInteractablesOnlyFromCertainMission(inventoryItems.items, currentMission.id)
    )
    const activeEnvironments = findOnlyActiveInteractables(
      findInteractablesOnlyFromCertainMission(environment, currentMission.id)
    )
    const inactiveEnvironments = findOnlyInactiveInteractables(
      findInteractablesOnlyFromCertainMission(environment, currentMission.id)
    )

    const activeInventoryItems = [...activeItems, ...activeWeapons, ...activeWearables]
    const inactiveInventoryItems = [...inactiveWeapons, ...inactiveWearables, ...inactiveItems]
    const allActiveInteractablesTotal =
      activeInventoryItems.length + activeNPCS.length + activeEnvironments.length
    const allInactiveInteractablesTotal =
      inactiveInventoryItems.length + inactiveNPCS.length + inactiveEnvironments.length

    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Actions">
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.START_COMBAT)}>
                Start Combat
              </Button>
              <Button
                disabled
                onClick={() => togglePopupForm(PopupFormTypes.PERFORM_A_CHECK_CAMPAIGN)}
              >
                Perform a Check
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.DISPENSE_DAMAGE)}>
                Dispense Damage
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.GIVE_OR_TAKE_MONEY)}>
                Give or Take Money
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.BUY_OR_SELL_ITEMS)}>
                Buy or Sell Items
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.GIVE_OR_TAKE_ITEMS)}>
                Give or Take Items
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.REST_PARTY_CAMPAIGN)}>
                Rest Party
              </Button>
              <Button
                disabled
                onClick={() => togglePopupForm(PopupFormTypes.LEVEL_UP_PARTY_CAMPAIGN)}
              >
                Level Up Party
              </Button>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Current Mission">
              <Card heading={`${currentMission.date}: ${currentMission.name}`}>
                {currentMission.details}
                {/* <p onClick={() => togglePopupForm(PopupFormTypes.EDIT_MISSION)} className="actions">
                  EDIT
                </p> */}
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Mission Interactables">
              <Button
                disabled
                onClick={() => togglePopupForm(PopupFormTypes.CREATE_INTERACTABLE_GAMEPLAY)}
              >
                Create Interactable
              </Button>
              <Card heading="View:">
                <select onChange={this.handleInteractableSelect}>
                  <option value="ALL">
                    All Interactables ({allActiveInteractablesTotal} Active)
                  </option>
                  <option value="NPCS">NPCS ({activeNPCS.length} Active)</option>
                  <option value="ITEMS">
                    Inventory Items ({activeInventoryItems.length} Active)
                  </option>
                  <option value="ENVIRONMENT">
                    Environment ({activeEnvironments.length} Active)
                  </option>
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
                <DisplayInactiveNPCS inactiveNPCS={inactiveNPCS} />
                <DisplayInactiveEnvironments inactiveEnvironments={inactiveEnvironments} />
                <DisplayInactiveItems inactiveItems={inactiveItems} />
                <DisplayInactiveWearables inactiveWearables={inactiveWearables} />
                <DisplayInactiveWeapons inactiveWeapons={inactiveWeapons} />
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
  currentMission: selectCurrentMission,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignGameplay)
