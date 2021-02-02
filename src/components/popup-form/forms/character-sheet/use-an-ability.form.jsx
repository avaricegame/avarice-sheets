import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import CardContainer from "../../../card-container/card-container.component"
import AbilityCardInfo from "../../../character-sheet-components/ability-card-info/ability-card-info.component"

// selectors
import {
  selectAbilities,
  selectWeapons,
  selectWearables,
} from "../../../../redux/character-sheet/character-sheet.selectors"

// util functions
import { findAllEquippedAbilities } from "../../../../pages/character-sheet-pages/utils/abilities.utils"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class MakeACheck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      equippedAbilities: [],
      currentAbility: {},
      currentAbilitySet: false,
    }
  }

  componentDidMount() {
    const {
      abilities: { abilities, startingAbility },
      weapons,
      wearables,
    } = this.props

    this.setState({
      equippedAbilities: findAllEquippedAbilities(abilities, startingAbility, weapons, wearables),
    })
  }

  setCurrentAbility(e) {
    const { equippedAbilities } = this.state

    this.setState({
      currentAbility: equippedAbilities.find((ability) => (ability.name = e.target.value)),
      currentAbilitySet: true,
    })
  }

  render() {
    const {
      equippedAbilities,
      currentAbilitySet,
      currentAbility: {
        name,
        type,
        equipmentName,
        description,
        difficulty,
        effects,
        associatedStat,
      },
    } = this.state
    return (
      <>
        <PopupFormHeading>Use an Ability</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="ability-to-use">Which Ability</label>
            <select name="ability-to-use" onChange={(e) => this.setCurrentAbility(e)}>
              <option value="PLEASE SPECIFY">Please Specify</option>
              {equippedAbilities.map((ability) => (
                <option key={ability.name} value={ability.name}>
                  {ability.name}
                </option>
              ))}
            </select>
            {currentAbilitySet ? (
              <CardContainer
                heading={name}
                subheading={type}
                terheading={`${equipmentName ? `for ${equipmentName}` : ""}`}
              >
                <AbilityCardInfo
                  description={description}
                  difficulty={difficulty}
                  effects={effects}
                  associatedStat={associatedStat}
                />
              </CardContainer>
            ) : null}
          </fieldset>

          <ButtonPanel noSubmit buttonValue={`Done`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  abilities: selectAbilities,
  wearables: selectWearables,
  weapons: selectWeapons,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MakeACheck)
