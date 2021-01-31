import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Button } from "../../components/custom-button/custom-button.component"

import {
  selectCampaignName,
  selectNPCS,
  selectPlayers,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// util functions
import {
  findOnlyActiveInteractables,
  findOnlyFriendNPCS,
  findOnlyEnemyNPCS,
} from "./utils/combat.utils"

// display components
import NPCCombatCard from "../../components/campaign-sheet-components/npc-combat-card/npc-combat-card.component"
import PlayerCombatCard from "../../components/campaign-sheet-components/player-combat-card/player-combat-card.compnent"

class CombatPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      friendNPCS: [],
      enemyNPCS: [],
    }
  }

  componentDidMount() {
    const { campaignName, npcs } = this.props
    document.title = `Combat | ${campaignName} | Avarice Sheets`
    this.setState({
      friendNPCS: findOnlyActiveInteractables(findOnlyFriendNPCS(npcs)),
      enemyNPCS: findOnlyActiveInteractables(findOnlyEnemyNPCS(npcs)),
    })
  }

  componentWillUnmount() {
    this.setState({
      friendNPCS: [],
      enemyNPCS: [],
    })
  }

  render() {
    const { players, togglePopupForm } = this.props
    const { friendNPCS, enemyNPCS } = this.state
    return (
      <>
        <SheetsHeading heading="Combat" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Players">
              {players.map((player, index) => (
                <PlayerCombatCard player={player} key={index} />
              ))}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Enemies">
              {enemyNPCS.map((character, index) => (
                <NPCCombatCard character={character} key={index} />
              ))}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Friends">
              {friendNPCS.map((character, index) => (
                <NPCCombatCard character={character} key={index} />
              ))}
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button onClick={() => togglePopupForm(PopupFormTypes.ATTACK_COMBAT)}>Attack</Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.MAKE_A_CHECK_COMBAT)}>
                Make a Check
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.TAKE_DAMAGE_COMBAT)}>
                Take Damage
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.HEAL_COMBAT)}>Heal</Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.ROLL_DICE)}>Roll Dice</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  npcs: selectNPCS,
  players: selectPlayers,
  campaignName: selectCampaignName,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CombatPage)
