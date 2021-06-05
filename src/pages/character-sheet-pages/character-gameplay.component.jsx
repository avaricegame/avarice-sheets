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
  selectArmourValue,
  selectCalculatedTransformedStats,
  selectMaxHP,
  selectDodgeValue,
} from "../../redux/character-sheet/character-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

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
      armourValue,
      calculatedTransformedStats,
      maxHP,
      dodgeValue,
    } = this.props

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
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.ATTACK)}>
                Attack
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.MAKE_A_CHECK)}>
                Make a Check
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.USE_AN_ITEM)}>
                Use an Item
              </Button>
              <Button onClick={() => togglePopupForm(PopupFormTypes.USE_AN_ABILITY)}>
                Use an Ability
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.EQUIP_AND_UNEQUIP)}>
                Equip / Unequip
              </Button>
              <Button disabled onClick={() => togglePopupForm(PopupFormTypes.TAKE_A_REST)}>
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
                  transformedCalculatedStatValues={calculatedTransformedStats}
                />
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Energy Points">
              <Card heading="Energy Points Table" subheading="Used When You Make a Stat Check">
                <DisplayEnergyPoints transformedCalculatedStatValues={calculatedTransformedStats} />
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
  characterName: selectCharacterName,
  armourValue: selectArmourValue,
  calculatedTransformedStats: selectCalculatedTransformedStats,
  maxHP: selectMaxHP,
  dodgeValue: selectDodgeValue,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterGameplayPage)
