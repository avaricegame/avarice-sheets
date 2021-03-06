import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// util functions
import {
  calculateActualStatValuesAndTransform,
  findStatProficiencyValue,
  calculateArmourValueFromEquippedWearables,
  calculateMaxHPValue,
  calculateDodgeValue,
} from "../../../redux/character-sheet/utils/selector.utils"

// display components
import DisplayBasicCharacterInfo from "../display-basic-character-info/display-basic-character-info.component"
import EditAndDeleteActions from "../../shared-sheets-components/card-actions/edit-and-delete-actions.component"
import FriendEnemyActions from "../card-actions/friend-enemy-actions.component"
import ActivateDeactivateActions from "../card-actions/activate-deactivate-actions.component"

import PopupFormTypes from "../../popup-form/popup-form.types"

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
        id,
      },
      moveEdit,
      whatToEdit,
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
        <div className="actions-div">
          <FriendEnemyActions id={id} enemy={enemy} />
          {this.props.activate ? (
            <ActivateDeactivateActions type="NPC" id={id} active={active} />
          ) : null}
          {this.props.moveEdit ? (
            <EditAndDeleteActions
              moveEdit={moveEdit}
              whatToEdit={whatToEdit}
              objToEdit={this.props.npc}
              popupFormType={PopupFormTypes.ADD_A_NEW_NPC}
            />
          ) : null}
        </div>
      </Card>
    )
  }
}

export default NPCCard
