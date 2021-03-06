import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

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
import { findPlayersRace } from "../../../pages/campaign-sheet-pages/utils/players.utils"

// selectors
import { selectRaces } from "../../../redux/app/app.selectors"

// display components
import DisplayEquippedWeapons from "../../shared-sheets-components/display-equipped-weapons/display-equipped-weapons.component"

// import to display the points, and import to style the points
// [TO DO] make this a litte easier to reuse in the future
import { Point } from "../../character-sheet-components/display-stats-tables/display-energy-points.component"
import "../../character-sheet-components/display-stats-tables/display-stats-tables.styles.scss"

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
      player: { level, wearables, stats, weapons, raceID },
      races,
    } = this.props
    const raceInfo = findPlayersRace(races, raceID)
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
      calculatedTransformedStats: calculateActualStatValuesAndTransform(
        stats,
        findEquippedInventoryItems(wearables),
        raceInfo.stats
      ),
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
                if (name.toLowerCase() === "ranged" || name.toLowerCase() === "melee") {
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

const mapStateToProps = createStructuredSelector({
  races: selectRaces,
})

export default connect(mapStateToProps)(PlayerCombatCard)
