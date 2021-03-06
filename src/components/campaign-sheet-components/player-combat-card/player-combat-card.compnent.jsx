import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// util functions
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
  calculateMaxHPValue,
  calculateDodgeValue,
} from "../../../redux/character-sheet/utils/selector.utils"

// display components
import { Point } from "../../character-sheet-components/display-stats-tables/display-energy-points.component"
import DisplayEquippedWeapons from "../../shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"

class PlayerCombatCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      equippedWeapons: [],
      calculatedTransformedStats: [],
    }
  }

  componentDidMount() {
    const {
      player: { level, raceInfo, wearables, stats, weapons },
    } = this.props
    this.setState({
      armourValue: calculateArmourValueFromEquippedWearables(findEquippedInventoryItems(wearables)),
      // dodgeValue: calculateDodgeValue(
      //   findStatProficiencyValue(
      //     calculateActualStatValuesAndTransform(
      //       stats,
      //       findEquippedInventoryItems(wearables),
      //       raceInfo.stats
      //     ),
      //     "reflex"
      //   ),
      //   raceInfo.size
      // ),
      // maxHP: calculateMaxHPValue(
      //   level,
      //   findStatProficiencyValue(
      //     calculateActualStatValuesAndTransform(
      //       stats,
      //       findEquippedInventoryItems(wearables),
      //       raceInfo.stats
      //     ),
      //     "constitution"
      //   )
      // ),
      equippedWeapons: findEquippedInventoryItems(weapons),
      // calculatedTransformedStats: calculateActualStatValuesAndTransform(
      //   stats,
      //   findEquippedInventoryItems(wearables),
      //   raceInfo.stats
      // ),
    })
  }

  componentWillUnmount() {
    this.setState({
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      equippedWeapons: [],
      calculatedTransformedStats: [],
    })
  }

  render() {
    const {
      player: { characterName, currentHP, weapons },
    } = this.props
    const { armourValue, dodgeValue, maxHP, calculatedTransformedStats } = this.state

    return (
      <Card
        blue
        heading={characterName}
        subheading={`Hit Points: ${currentHP} / ${maxHP}`}
        terheading={`Armour Value: ${armourValue}`}
        quatheading={`Dodge Value: ${dodgeValue}`}
      >
        <DisplayEquippedWeapons equippedWeapons={weapons} />
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
                if (name.toLowerCase() === "ranged" || name.toLowerCase() === "melee") {
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
                } else {
                  return null
                }
              }
            )}
          </tbody>
        </table>
      </Card>
    )
  }
}

export default PlayerCombatCard
