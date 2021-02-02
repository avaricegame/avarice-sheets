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
  selectCharacterName,
  selectCurrentHP,
  selectLifeCredits,
  selectWearables,
  selectLevel,
  selectStats,
  selectClassInfo,
  selectRaceInfo,
} from "../../redux/character-sheet/character-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// util functions
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
} from "./utils/inventory.utils"
import { calculateMaxHPValue, calculateDodgeValue } from "./utils/gameplay.utils"
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
} from "./utils/stats.utils"

// display components
import DisplayEnergyPoints from "../../components/character-sheet-components/display-stats-tables/display-energy-points.component"
import DisplayStatsOverview from "../../components/character-sheet-components/display-stats-tables/display-stats-overview.component"

class CharacterGameplayPage extends React.Component {
  componentDidMount() {
    const { characterName } = this.props
    document.title = `Gameplay | ${characterName} | Avarice Sheets`
  }

  render() {
    const {
      currentHP,
      lifeCredits,
      togglePopupForm,
      raceInfo,
      stats,
      wearables,
      level,
    } = this.props

    const equippedWearables = findEquippedInventoryItems(wearables)
    const armourValue = calculateArmourValueFromEquippedWearables(
      findEquippedInventoryItems(wearables)
    )
    const maxHP = calculateMaxHPValue(level, findStatProficiencyValue(stats, "constitution"))
    const dodgeValue = calculateDodgeValue(findStatProficiencyValue(stats, "reflex"), raceInfo.size)
    const transformedCalculatedStatValues = calculateActualStatValuesAndTransform(
      stats,
      equippedWearables,
      raceInfo.stats
    )

    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Hit Points">
              <Card
                heading={`Hit Points Max: ${maxHP}`}
                subheading={`Armour Value: ${armourValue}`}
                terheading={`Dodge Value: ${dodgeValue}`}
                quatheading={`Current Hit Points: ${currentHP}`}
                purpleTerheading
              >
                <Button onClick={() => togglePopupForm(PopupFormTypes.TAKE_OR_HEAL_DAMAGE)}>
                  Take Damage
                </Button>
                <Button onClick={() => togglePopupForm(PopupFormTypes.TAKE_OR_HEAL_DAMAGE)}>
                  Heal Damage
                </Button>
              </Card>
            </Section>
            <Section heading="Money">
              <Card heading="Life Credits" terheading={`Current Savings: ${lifeCredits} LC`}>
                <Button onClick={() => togglePopupForm(PopupFormTypes.PAY_OR_RECIEVE_MONEY)}>
                  Pay Money
                </Button>
                <Button onClick={() => togglePopupForm(PopupFormTypes.PAY_OR_RECIEVE_MONEY)}>
                  Recieve Money
                </Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button onClick={() => togglePopupForm(PopupFormTypes.ATTACK)}>Attack</Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.MAKE_A_CHECK)}>
                Make a Check
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.USE_AN_ITEM)}>
                Use an Item
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.USE_AN_ABILITY)}>
                Use an Ability
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.EQUIP_AND_UNEQUIP)}>
                Equip / Unequip
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.TAKE_A_REST)}>
                Take a Rest
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.ROLL_DICE)}>Roll Dice</Button>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Stats Overview">
              <Card
                heading="Stats Overview Table"
                subheading="More Stats can be seen on Stats Page"
              >
                <DisplayStatsOverview
                  transformedCalculatedStatValues={transformedCalculatedStatValues}
                />
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Energy Points">
              <Card heading="Energy Points Table" subheading="Used When You Make a Stat Check">
                <DisplayEnergyPoints
                  transformedCalculatedStatValues={transformedCalculatedStatValues}
                />
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentHP: selectCurrentHP,
  lifeCredits: selectLifeCredits,
  wearables: selectWearables,
  level: selectLevel,
  stats: selectStats,
  classInfo: selectClassInfo,
  raceInfo: selectRaceInfo,
  characterName: selectCharacterName,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterGameplayPage)
