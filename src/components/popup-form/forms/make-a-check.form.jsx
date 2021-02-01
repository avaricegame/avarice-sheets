import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./forms.styles.scss"

// display components
import { PopupFormHeading } from "../popup-form.component"
import { default as ButtonPanel } from "../../popup-form-button-panel/popup-form-button-panel.component"
import { default as Button } from "../../custom-button/custom-button.component"

// selectors
import {
  selectStats,
  selectWearables,
  selectRaceInfo,
} from "../../../redux/character-sheet/character-sheet.selectors"

// util functions
import { calculateActualStatValuesAndTransform } from "../../../pages/character-sheet-pages/utils/stats.utils"
import { findEquippedInventoryItems } from "../../../pages/character-sheet-pages/utils/inventory.utils"
import {
  mapDifficultyToValueToBeat,
  findStatBeingChecked,
  addOrSubtractAdvantageToValueToBeat,
  determineAdvantageBonus,
} from "../utils/make-a-check.utils"

// actions
import { makeACheck } from "../../../redux/character-sheet/pages/pages.actions"

class MakeACheck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transformedCalculatedStatValues: [],
      advantage: 0,
      difficulty: null,
    }
  }

  componentDidMount() {
    const { stats, wearables, raceInfo } = this.props

    this.setState({
      transformedCalculatedStatValues: calculateActualStatValuesAndTransform(
        stats,
        findEquippedInventoryItems(wearables),
        raceInfo.stats
      ),
    })
  }

  makeCheck(type) {
    const { makeACheck } = this.props
    const { transformedCalculatedStatValues, difficulty, advantage } = this.state
    console.log(type)
    console.log(difficulty)
    console.log(advantage)

    if (difficulty === "RISK") {
      const roll1 = Math.ceil(Math.random() * 20)
      const roll2 = Math.ceil(Math.random() * 20)

      return window.alert(`You rolled: ${roll1} and ${roll2}. `)
    }

    const valueToBeat = mapDifficultyToValueToBeat(difficulty)
    console.log(valueToBeat)
    const statChecking = findStatBeingChecked(transformedCalculatedStatValues, type)
    console.log(statChecking)
    const newValueToBeat = addOrSubtractAdvantageToValueToBeat(valueToBeat, parseInt(advantage))
    console.log(newValueToBeat)

    if (statChecking.proficiencyPoints >= newValueToBeat) {
      return window.alert(`Your check automatically succeeds, no further actions neccessary.`)
    }

    const roll = Math.ceil(Math.random() * 20)

    if (roll === 20) {
      makeACheck({ type, success: true, critFail: false, critSuccess: true })
      return window.alert(
        `You rolled a ${roll}, and needed a(n) ${newValueToBeat} to succeed. You have gained 2 success points and used 1 energy point for ${type} and critically succeeded in your check.`
      )
    }

    if (roll === 1) {
      makeACheck({ type, success: false, critFail: true, critSuccess: false })
      return window.alert(
        `You rolled a ${roll}, and needed a(n) ${newValueToBeat} to succeed. You have gained 0 success points and used 2 energy points for ${type} and critically failed in your check.`
      )
    }

    if (roll > newValueToBeat) {
      makeACheck({ type, success: true, critFail: false, critSuccess: false })
      return window.alert(
        `You rolled a(n) ${roll}, and needed a(n) ${newValueToBeat} to succeed. You have gained 1 success point and used 1 energy point for ${type} and succeeded in your check.`
      )
    } else {
      makeACheck({ type, success: false, critFail: false, critSuccess: false })
      return window.alert(
        `You rolled a(n) ${roll}, and needed a(n) ${newValueToBeat} to succeed. You have gained 0 success points and used 1 energy points for ${type} and failed in your check.`
      )
    }
  }

  componentWillUnmount() {
    this.setState({
      transformedCalculatedStatValues: [],
    })
  }

  render() {
    return (
      <>
        <PopupFormHeading>Make a Check</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              onChange={(e) => this.setState({ difficulty: e.target.value })}
            >
              <option value={null}>Select Difficulty</option>
              <option value="RISK">Roll with Risk</option>
              <option value={1}>1 (Easy)</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5 (Medium)</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10 (Hard)</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15 (Impossible)</option>
            </select>

            <label htmlFor="advantage">Advantage</label>
            <input
              type="number"
              name="advantage"
              value={this.state.advantage}
              onChange={(e) => this.setState({ advantage: e.target.value })}
            />
            {/* <p>
              <span>&#8249;</span>
              <span>0</span>
              <span>&#8250;</span>
            </p> */}
          </fieldset>
          <fieldset>
            <Button onClick={() => this.makeCheck("STRENGTH")} type="button">
              Strength
            </Button>
            <Button onClick={() => this.makeCheck("CONSTITUTION")} type="button">
              Constitution
            </Button>
            <Button onClick={() => this.makeCheck("REFLEX")} type="button">
              Reflex
            </Button>
            <Button onClick={() => this.makeCheck("SPEED")} type="button">
              Speed
            </Button>
            <Button onClick={() => this.makeCheck("TECHNICAL")} type="button">
              Technical
            </Button>
            <Button onClick={() => this.makeCheck("PRACTICAL")} type="button">
              Practical
            </Button>
            <Button onClick={() => this.makeCheck("SPEECH")} type="button">
              Speech
            </Button>
            <Button onClick={() => this.makeCheck("PERFORM")} type="button">
              Perform
            </Button>

            <p>
              Why can't I make a Ranged or Melee check? Ranged and Melee checks are made when you
              attack.
            </p>
          </fieldset>

          <ButtonPanel noSubmit />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  stats: selectStats,
  wearables: selectWearables,
  raceInfo: selectRaceInfo,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MakeACheck)
