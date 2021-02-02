import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./forms.styles.scss"

// display components
import { PopupFormHeading } from "../popup-form.component"
import { default as ButtonPanel } from "../../popup-form-button-panel/popup-form-button-panel.component"
import { default as Button } from "../../custom-button/custom-button.component"
import WeaponCard from "../../shared-sheets-components/weapon-card/weapon-card.component"

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
        <PopupFormHeading>Add New Weapon</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="difficulty">Please Choose a Weapon</label>
            <select name="difficulty">
              <option value={null}>Select One</option>
              <option value="RISK">Weapon 1</option>
              <option value={1}>Weapon 2</option>
            </select>

            {/* <WeaponCard /> */}
          </fieldset>

          <ButtonPanel submitValue={`Please Select`} />
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