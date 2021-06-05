import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"

import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../card-container/card-container.component"
import { default as Button } from "../../custom-button/custom-button.component"

import { togglePopupForm } from "../../../redux/app/app.actions"
import PopupFormTypes from "../../popup-form/popup-form.types"

// util functions
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
  calculateMaxHPValue,
  calculateDodgeValue,
} from "../../../redux/character-sheet/utils/selector.utils"
import { findAllEquippedAbilities } from "../../../pages/character-sheet-pages/utils/abilities.utils"
import { findPlayersRace } from "../../../pages/campaign-sheet-pages/utils/players.utils"

// selectors
import { selectRaces } from "../../../redux/app/app.selectors"

// display components
import DisplayEquippedWeapons from "../../shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"
import DisplayEquippedItems from "../../shared-sheets-components/display-equipped-items/display-equipped-items.component"
import DisplayBasicCharacterInfo from "../../campaign-sheet-components/display-basic-character-info/display-basic-character-info.component"

// import to display the points, and import to style the points
// [TO DO] make this a litte easier to reuse in the future
import { Point } from "../../character-sheet-components/display-stats-tables/display-energy-points.component"
import "../../character-sheet-components/display-stats-tables/display-stats-tables.styles.scss"

class PlayerCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      equippedWeapons: [],
      equippedItems: [],
      equippedAbilities: [],
      calculatedTransformedStats: [],
    }
  }

  componentDidMount() {
    const {
      player: {
        level,
        abilities: { abilities, startingAbility },
        wearables,
        raceID,
        stats,
        weapons,
        items,
      },
      races,
    } = this.props
    const raceInfo = findPlayersRace(races, raceID)
    console.log(raceInfo)
    this.setState({
      armourValue: calculateArmourValueFromEquippedWearables(findEquippedInventoryItems(wearables)),
      dodgeValue: calculateDodgeValue(
        findStatProficiencyValue(
          calculateActualStatValuesAndTransform(
            stats,
            findEquippedInventoryItems(wearables),
            raceInfo.stats
          ),
          "reflex"
        ),
        raceInfo.size
      ),
      maxHP: calculateMaxHPValue(
        level,
        findStatProficiencyValue(
          calculateActualStatValuesAndTransform(
            stats,
            findEquippedInventoryItems(wearables),
            raceInfo.stats
          ),
          "constitution"
        )
      ),
      equippedWeapons: findEquippedInventoryItems(weapons),
      equippedItems: findEquippedInventoryItems(items),
      equippedAbilities: findAllEquippedAbilities(
        abilities,
        startingAbility,
        findEquippedInventoryItems(weapons),
        findEquippedInventoryItems(wearables)
      ),
      calculatedTransformedStats: calculateActualStatValuesAndTransform(
        stats,
        findEquippedInventoryItems(wearables),
        raceInfo.stats
      ),
    })
  }

  render() {
    const {
      player: { _id, characterName, playerUsername, raceName, className, currentHP, lifeCredits },
      togglePopupForm,
    } = this.props
    const {
      armourValue,
      dodgeValue,
      maxHP,
      equippedWeapons,
      equippedItems,
      equippedAbilities,
      calculatedTransformedStats,
    } = this.state

    return (
      <Card heading={`${playerUsername} as ${characterName}`} flex>
        <InteriorCard>
          <Column width={25}>
            <Subheading blue>Overview</Subheading>
            <InteriorCardContent>
              <DisplayBasicCharacterInfo
                characterName={characterName}
                raceName={raceName}
                className={className}
                currentHP={currentHP}
                maxHP={maxHP}
                armourValue={armourValue}
                dodgeValue={dodgeValue}
                lifeCredits={lifeCredits}
              />
            </InteriorCardContent>
            <Subheading blue>Stats Overview</Subheading>
            <InteriorCardContent>
              <table className="stats-table">
                <thead>
                  <tr>
                    <th className="left">Stat</th>
                    <th>Proficiency</th>
                    <th>Energy</th>
                    <th>Success</th>
                  </tr>
                </thead>
                <tbody>
                  {calculatedTransformedStats.map(
                    ({ name, proficiencyPoints, energyPoints, successPoints }) => {
                      return (
                        <tr key={name}>
                          <td className="left">{name}</td>
                          <td>
                            <Point purple>{proficiencyPoints}</Point>
                          </td>
                          <td>
                            <Point yellow>{energyPoints}</Point>
                          </td>
                          <td>
                            <Point green>{successPoints}</Point>
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
            </InteriorCardContent>
            <a href={`/character/${_id}`} target="_blank" rel="noreferrer">
              <Button>View Character Sheet</Button>
            </a>
          </Column>

          <Column width={25}>
            <Subheading blue>Equipped Weapons</Subheading>
            <InteriorCardContent>
              <DisplayEquippedWeapons equippedWeapons={equippedWeapons} />
            </InteriorCardContent>

            <Subheading blue>Equipped Items</Subheading>
            <InteriorCardContent>
              <DisplayEquippedItems equippedItems={equippedItems} />
            </InteriorCardContent>
            <Button disabled onClick={() => togglePopupForm(PopupFormTypes.OPEN_PLAYERS_SURONIS)}>
              Open Players S.U.R.O.N.I.S
            </Button>
          </Column>

          <Column width={50}>
            <Subheading blue>Equipped Abilities</Subheading>
            <InteriorCardContent>
              {equippedAbilities.map(
                ({ name, associatedStat, difficulty, type, description }, index) => (
                  <div key={index}>
                    <p>
                      <strong>{name}</strong>
                    </p>
                    <ul>
                      <li>
                        <em>Type: </em>
                        {type}
                      </li>
                      <li>
                        <em>Associated Stat:</em> {associatedStat}
                      </li>
                      <li>
                        <em>Difficulty: </em>
                        {difficulty}
                      </li>
                      <li>
                        <em>Details: </em>
                        {description}
                      </li>
                    </ul>
                  </div>
                )
              )}
            </InteriorCardContent>
          </Column>
        </InteriorCard>
      </Card>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  races: selectRaces,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard)
