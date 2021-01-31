import React from "react"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"

import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../card-container/card-container.component"
import { default as Button } from "../../custom-button/custom-button.component"

// util functions
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
} from "../../../pages/character-sheet-pages/utils/stats.utils"
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
} from "../../../pages/character-sheet-pages/utils/inventory.utils"
import {
  calculateMaxHPValue,
  calculateDodgeValue,
} from "../../../pages/character-sheet-pages/utils/gameplay.utils"
import { findAllEquippedAbilities } from "../../../pages/character-sheet-pages/utils/abilities.utils"

// display components
import { Point } from "../../character-sheet-components/display-stats-tables/display-energy-points.component"
import DisplayEquippedWeapons from "../../shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"
import DisplayEquippedItems from "../../shared-sheets-components/display-equipped-items/display-equipped-items.component"
import DisplayBasicCharacterInfo from "../../campaign-sheet-components/display-basic-character-info/display-basic-character-info.component"

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
        raceInfo,
        wearables,
        stats,
        weapons,
        items,
      },
    } = this.props
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

  componentWillUnmount() {
    this.setState({
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      equippedWeapons: [],
      equippedItems: [],
      equippedAbilities: [],
      calculatedTransformedStats: [],
    })
  }

  render() {
    const {
      player: { characterName, playerName, raceName, className, currentHP, lifeCredits },
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
      <Card heading={`${playerName} as ${characterName}`} flex>
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
              <table>
                <thead>
                  <tr>
                    <th>Stat</th>
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
                          <td>{name}</td>
                          <td>
                            <Point blue>{proficiencyPoints}</Point>
                          </td>

                          <td>
                            <Point blue>{energyPoints}</Point>
                          </td>

                          <td>
                            <Point blue>{successPoints}</Point>
                          </td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
            </InteriorCardContent>

            <Button>View Character Sheet</Button>
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
            <Button>Open Players S.U.R.O.N.I.S</Button>
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

export default PlayerCard