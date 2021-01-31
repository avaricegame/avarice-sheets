import React from "react"

import { default as Card } from "../../card-container/card-container.component"
import { default as Button } from "../../custom-button/custom-button.component"

// util functions
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
} from "../../../pages/character-sheet-pages/utils/stats.utils"
import {
  calculateMaxHPValue,
  calculateDodgeValue,
} from "../../../pages/character-sheet-pages/utils/gameplay.utils"
import { calculateArmourValueFromEquippedWearables } from "../../../pages/character-sheet-pages/utils/inventory.utils"

// display components
import DisplayBasicCharacterInfo from "../display-basic-character-info/display-basic-character-info.component"

class NPCCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      calculatedTransformedStats: [],
    }
  }

  componentDidMount() {
    const {
      npc: { level, raceInfo, wearables, stats },
    } = this.props
    this.setState({
      armourValue: calculateArmourValueFromEquippedWearables(wearables),
      dodgeValue: calculateDodgeValue(
        findStatProficiencyValue(
          calculateActualStatValuesAndTransform(stats, wearables, raceInfo.stats),
          "reflex"
        ),
        raceInfo.size
      ),
      maxHP: calculateMaxHPValue(
        level,
        findStatProficiencyValue(
          calculateActualStatValuesAndTransform(stats, wearables, raceInfo.stats),
          "constitution"
        )
      ),
      calculatedTransformedStats: calculateActualStatValuesAndTransform(
        stats,
        wearables,
        raceInfo.stats
      ),
    })
  }

  componentWillUnmount() {
    this.setState({
      armourValue: null,
      dodgeValue: null,
      maxHP: null,
      calculatedTransformedStats: [],
    })
  }
  render() {
    const {
      npc: {
        characterName,
        raceInfo,
        currentHP,
        lifeCredits,
        active,
        enemy,
        showActive,
        weapons,
        wearables,
        items,
      },
    } = this.props
    const { maxHP, armourValue, dodgeValue } = this.state

    return (
      <Card blue heading={characterName} subheading={enemy ? "Enemy" : "Friend"}>
        {showActive ? (
          <p>
            <strong>Active: </strong>
            {active ? "Yes" : "No"}
          </p>
        ) : null}
        <p></p>
        <DisplayBasicCharacterInfo
          raceName={raceInfo.name}
          currentHP={currentHP}
          maxHP={maxHP}
          armourValue={armourValue}
          dodgeValue={dodgeValue}
          lifeCredits={lifeCredits}
        />
        <p>
          <strong>Weapons: </strong>
          {weapons.map((weapon) => (
            <span key={weapon.id}>
              {weapon.name} {weapons.length > 1 ? "," : ""}{" "}
            </span>
          ))}
        </p>
        <p>
          <strong>Item: </strong>
          {items.map((item) => (
            <span key={item.id}>
              {item.name}
              {items.length > 1 ? "," : ""}{" "}
            </span>
          ))}
        </p>
        <p>
          <strong>Wearables: </strong>
          {wearables.map((wearable) => (
            <span key={wearable.id}>
              {wearable.name} {wearables.length > 1 ? "," : ""}{" "}
            </span>
          ))}
        </p>
        <Button>Change Diplomacy</Button>
        <Button>Copy to a mission</Button>
        <Button>Move to a mission</Button>
      </Card>
    )
  }
}

export default NPCCard
