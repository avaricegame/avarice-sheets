import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
//import { default as Button } from "../../../custom-button/custom-button.component"

// selectors
import {
  selectArmourValue,
  selectEquippedWeapons,
  selectCalculatedTransformedStats,
} from "../../../../redux/character-sheet/character-sheet.selectors"

// util functions
import { calculateActualStatValuesAndTransform } from "../../../../pages/character-sheet-pages/utils/stats.utils"
import { findEquippedInventoryItems } from "../../../../pages/character-sheet-pages/utils/inventory.utils"
// import {
//   mapDifficultyToValueToBeat,
//   findStatBeingChecked,
//   addOrSubtractAdvantageToValueToBeat,
//   determineAdvantageBonus,
// } from "../../utils/make-a-check.utils"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class MakeACheck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      advantage: 0,
      difficulty: null,
    }
  }

  makeCheck(type) {}

  render() {
    const { calculatedTransformedStats, armourValue, equippedWeapons } = this.props

    console.log(calculatedTransformedStats, armourValue, equippedWeapons)
    return (
      <>
        <PopupFormHeading>Attack</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset></fieldset>

          <ButtonPanel submitValue={`Submit`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  calculatedTransformedStats: selectCalculatedTransformedStats,
  armourValue: selectArmourValue,
  equippedWeapons: selectEquippedWeapons,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MakeACheck)
