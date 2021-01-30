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
  selectCurrentHP,
  selectLifeCredits,
  selectWearables,
  selectLevel,
  selectStats,
  selectClassInfo,
  selectRaceInfo,
} from "../../redux/character-sheet/character-sheet.selectors"

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
  constructor(props) {
    super(props)
    this.state = {
      armourValue: null,
      maxHP: null,
      dodgeValue: null,
      reflexProficiencyValue: null,
      constitutionProficiencyValue: null,
      transformedCalculatedStatValues: [],
    }
  }

  componentDidMount() {
    const { wearables, level, stats, classInfo, raceInfo } = this.props

    this.setState({
      armourValue: calculateArmourValueFromEquippedWearables(findEquippedInventoryItems(wearables)),
      maxHP: calculateMaxHPValue(level, findStatProficiencyValue(stats, "constitution")),
      dodgeValue: calculateDodgeValue(findStatProficiencyValue(stats, "reflex"), raceInfo.size),
      transformedCalculatedStatValues: calculateActualStatValuesAndTransform(
        stats,
        findEquippedInventoryItems(wearables),
        classInfo.stats
      ),
    })
  }

  componentWillUnmount() {
    this.setState({
      armourValue: null,
      maxHP: null,
      dodgeValue: null,
      transformedCalculatedStatValues: [],
    })
  }

  render() {
    const { currentHP, lifeCredits } = this.props
    const { armourValue, transformedCalculatedStatValues, maxHP, dodgeValue } = this.state
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
                <Button>Take Damage</Button>
                <Button>Heal HP</Button>
              </Card>
            </Section>
            <Section heading="Money">
              <Card heading="Life Credits" terheading={`Current Savings: ${lifeCredits} LC`}>
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button>Attack</Button>
              <Button>Make a Check</Button>
              <Button>Use an Item</Button>
              <Button>Use an Ability</Button>
              <Button>Equip / Unequip</Button>
              <Button>Take a Rest</Button>
              <Button>Roll Dice</Button>
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
})

export default connect(mapStateToProps)(CharacterGameplayPage)
