import React from "react"
import { connect } from "react-redux"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class TakeOrHealDamage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      takeOrHeal: "PLEASE SPECIFY",
      amount: 0,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { takeOrHeal, amount } = this.state

    if (takeOrHeal === "PLEASE SPECIFY")
      return window.alert("Please specify whether you need to take or heal damage.")

    window.alert("This form action has not been set up yet.")
    console.log(takeOrHeal, amount)
  }

  render() {
    const { takeOrHeal, amount } = this.state
    return (
      <>
        <PopupFormHeading>Take or Heal Damage</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="take-or-heal">Take or Heal</label>
            <select
              name="take-or-heal"
              onChange={(e) => this.setState({ takeOrHeal: e.target.value })}
            >
              <option value="PLEASE SPECIFY">Please Specify</option>
              <option value="HEAL">Heal Damage</option>
              <option value="TAKE">Take Damage</option>
            </select>

            <label htmlFor="amount">How Much</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
          </fieldset>

          <ButtonPanel
            submitValue={`${
              takeOrHeal === "PLEASE SPECIFY" ? takeOrHeal : `${takeOrHeal} ${amount} DAMAGE`
            }`}
          />
        </form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(null, mapDispatchToProps)(TakeOrHealDamage)
