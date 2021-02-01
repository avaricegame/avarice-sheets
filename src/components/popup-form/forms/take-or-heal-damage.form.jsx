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

  makeCheck(type) {}

  componentWillUnmount() {
    this.setState({
      transformedCalculatedStatValues: [],
    })
  }

  render() {
    return (
      <>
        <PopupFormHeading>Take or Heal Damage</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="difficulty">Take or Heal</label>
            <select name="difficulty">
              <option value={null}>Select One</option>
              <option value="RISK">Heal HP</option>
              <option value={1}>Take Damage</option>
            </select>

            <label htmlFor="advantage">How Much</label>
            <input type="number" name="advantage" />
            {/* <p>
              <span>&#8249;</span>
              <span>0</span>
              <span>&#8250;</span>
            </p> */}
          </fieldset>

          <ButtonPanel submitValue={`Please Specify`} />
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
