import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import {
  selectCharacterName,
  selectAbilities,
  selectEquippedWeapons,
  selectEquippedWearables,
} from "../../redux/character-sheet/character-sheet.selectors"

// display components
import { default as DisplayAbility } from "../../components/character-sheet-components/display-ability-in-column/display-ability-in-column.component"
import { default as AbilityCard } from "../../components/character-sheet-components/ability-card-in-column/ability-card-in-column.component"

// util functions
import { findAllEquippedAbilities } from "./utils/abilities.utils"

class AbilitiesPage extends React.Component {
  componentDidMount() {
    const { characterName } = this.props
    document.title = `Abilities | ${characterName} | Avarice Sheets`
  }

  render() {
    const {
      abilities: { abilities, startingAbility },
      equippedWeapons,
      equippedWearables,
    } = this.props

    const equippedAbilities = findAllEquippedAbilities(
      abilities,
      startingAbility,
      equippedWeapons,
      equippedWearables
    )

    return (
      <>
        <SheetsHeading heading="Abilities" />
        <SheetsPageContainer>
          <Column width={100}>
            <Section heading="Abilities Loadout (Your Current Equipped Abilities)" flex>
              {equippedAbilities.map((ability, index) => (
                <AbilityCard ability={ability} key={index} />
              ))}
            </Section>
          </Column>

          <Column width={100}>
            <Section heading="Your Class Abilities Library">
              {abilities.map((ability, index) => (
                <DisplayAbility key={index} ability={ability} />
              ))}
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  abilities: selectAbilities,
  characterName: selectCharacterName,
  equippedWeapons: selectEquippedWeapons,
  equippedWearables: selectEquippedWearables,
})

export default connect(mapStateToProps)(AbilitiesPage)
