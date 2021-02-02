import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import { default as Button } from "../../../custom-button/custom-button.component"

// selectors
import {
  selectStats,
  selectWearables,
  selectRaceInfo,
} from "../../../../redux/character-sheet/character-sheet.selectors"

// util functions
import { calculateActualStatValuesAndTransform } from "../../../../pages/character-sheet-pages/utils/stats.utils"
import { findEquippedInventoryItems } from "../../../../pages/character-sheet-pages/utils/inventory.utils"
import {
  mapDifficultyToValueToBeat,
  findStatBeingChecked,
  determineAdvantageBonus,
} from "../../utils/make-a-check.utils"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class MakeACheck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transformedCalculatedStatValues: [],
      advantage: 0,
      difficulty: "SELECT DIFFICULTY",
      risk: "NO",
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
    const { transformedCalculatedStatValues, difficulty, advantage, risk } = this.state

    if (difficulty === "SELECT DIFFICULTY")
      return window.alert("You must set the difficulty of the check.")

    const valueToBeat = mapDifficultyToValueToBeat(difficulty)
    console.log("VALUE TO BEAT " + valueToBeat)
    const statChecking = findStatBeingChecked(transformedCalculatedStatValues, type)
    console.log(statChecking)
    const advantageBonus = determineAdvantageBonus(parseInt(advantage))
    console.log("ADVANTAGE BONUS " + advantageBonus)

    const valueToBeatTotal = valueToBeat + -advantageBonus
    console.log("VALUE TO BEAT TOTAL " + valueToBeatTotal)

    if (statChecking.proficiencyPoints >= valueToBeatTotal) {
      return window.alert(`Your check automatically succeeds, no further actions neccessary.`)
    }

    let roll
    let roll1
    let roll2

    if (risk === "NO") {
      if (advantage > 0) {
        roll1 = Math.ceil(Math.random() * 20)
        roll2 = Math.ceil(Math.random() * 20)

        if (roll1 > roll2) {
          roll = roll1
        } else {
          roll = roll2
        }
      }

      if (advantage < 0) {
        roll1 = Math.ceil(Math.random() * 20)
        roll2 = Math.ceil(Math.random() * 20)

        if (roll1 < roll2) {
          roll = roll1
        } else {
          roll = roll2
        }
      }

      if (advantage === 0) {
        roll = Math.ceil(Math.random() * 20)
        roll1 = roll
        roll2 = "none"
      }
    } else {
      roll1 = Math.ceil(Math.random() * 20)
      roll2 = Math.ceil(Math.random() * 20)

      let diff1
      let diff2

      if (roll1 > 10) {
        diff1 = roll1 - 10
      } else {
        diff1 = 10 - roll1
      }

      if (roll2 > 10) {
        diff2 = roll2 - 10
      } else {
        diff2 = 10 - roll2
      }

      console.log(diff1, diff2)

      if (diff1 > diff2) {
        roll = roll1
      } else {
        roll = roll2
      }
    }

    if (roll === 20) {
      makeACheck({ type, success: true, critFail: false, critSuccess: true })
      return window.alert(
        `CRITICAL SUCCESS!! You rolled a ${roll}, and had an advantage bonus of ${advantageBonus}, which totals ${
          roll + advantageBonus
        }. You needed a(n) ${valueToBeat} to succeed. You have gained 2 success points and used 1 energy point for ${type} and critically succeeded in your check. ROLL1: ${roll1}. ROLL2: ${roll2}.`
      )
    }

    if (roll === 1) {
      makeACheck({ type, success: false, critFail: true, critSuccess: false })
      return window.alert(
        `CRITICAL FAIL!! You rolled a ${roll}, and had an advantage bonus of ${advantageBonus}, which totals ${
          roll + advantageBonus
        }. You needed a(n) ${valueToBeat} to succeed. You have gained 0 success points and used 2 energy points for ${type} and critically failed in your check. ROLL1: ${roll1}. ROLL2: ${roll2}.`
      )
    }

    if (roll >= valueToBeatTotal) {
      makeACheck({ type, success: true, critFail: false, critSuccess: false })
      return window.alert(
        `SUCCESS!! You rolled a(n) ${roll}, and had an advantage bonus of ${advantageBonus}, which totals ${
          roll + advantageBonus
        }. You needed a(n) ${valueToBeat} to succeed. You have gained 1 success point and used 1 energy point for ${type} and succeeded in your check. ROLL1: ${roll1}. ROLL2: ${roll2}.`
      )
    } else {
      makeACheck({ type, success: false, critFail: false, critSuccess: false })
      return window.alert(
        `FAILURE!! You rolled a(n) ${roll}, and had an advantage bonus of ${advantageBonus}, which totals ${
          roll + advantageBonus
        }. You needed a(n) ${valueToBeat} to succeed. You have gained 0 success points and used 1 energy points for ${type} and failed in your check. ROLL1: ${roll1}. ROLL2: ${roll2}.`
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
              <option value="SELECT DIFFICULTY">Select Difficulty</option>
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

            <label htmlFor="risk">Roll With Risk</label>
            <select name="risk" onChange={(e) => this.setState({ risk: e.target.value })}>
              <option value="NO">No</option>
              <option value="YES">Yes</option>
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
          </fieldset>

          <ButtonPanel noSubmit buttonValue="Done" />
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
