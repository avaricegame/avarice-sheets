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
        classInfo,
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
            classInfo.stats
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
            classInfo.stats
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
        classInfo.stats
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
      <Card heading={characterName} flex>
        <InteriorCard>
          <Column width={25}>
            <Subheading blue>Overview</Subheading>
            <InteriorCardContent>
              <ul>
                <li>Player Name: {playerName}</li>
                <li>Race: {raceName}</li>
                <li>Class: {className}</li>
                <li>
                  Hit Points: {currentHP} / {maxHP}
                </li>
                <li>Armour Value: {armourValue}</li>
                <li>Dodge Value: {dodgeValue}</li>
                <li>Life Credits: {lifeCredits}</li>
              </ul>
              {calculatedTransformedStats.map(
                ({ name, proficiencyPoints, energyPoints, successPoints }) => {
                  return (
                    <div key={name}>
                      <p>
                        <strong>{name}</strong>
                      </p>
                      <table>
                        <tbody>
                          <tr>
                            <td>Proficiency:</td>
                            <td>
                              <Point blue>{proficiencyPoints}</Point>
                            </td>
                          </tr>
                          <tr>
                            <td>Energy Points:</td>
                            <td>
                              <Point blue>{energyPoints}</Point>
                            </td>
                          </tr>
                          <tr>
                            <td>Success Points:</td>
                            <td>
                              <Point blue>{successPoints}</Point>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )
                }
              )}
            </InteriorCardContent>
            <Button>View Character Sheet</Button>
          </Column>
          <Column width={50}>
            <Subheading blue>Equipped Abilities</Subheading>
            <InteriorCardContent>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Stat</th>
                    <th>Difficulty Level</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {equippedAbilities.map((ability, index) => (
                    <tr key={index}>
                      <td>{ability.name}</td>
                      <td>{ability.associatedStat}</td>
                      <td>{ability.difficulty}</td>
                      <td>{ability.type}</td>
                      <td>{ability.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </InteriorCardContent>
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
        </InteriorCard>
      </Card>
    )
  }
}

export default PlayerCard
