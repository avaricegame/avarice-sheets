import React from "react"
import { connect } from "react-redux"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class PayOrRecieveMoney extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      payOrRecieve: "PLEASE SPECIFY",
      amount: 0,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { payOrRecieve, amount } = this.state

    if (payOrRecieve === "PLEASE SPECIFY")
      return window.alert("Please specify whether you need to pay or recieve money.")

    window.alert("This form action has not been set up yet.")
    console.log(payOrRecieve, amount)
  }

  render() {
    const { payOrRecieve, amount } = this.state
    return (
      <>
        <PopupFormHeading>Pay or Recieve Money</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="pay-or-recieve">Pay or Recieve</label>
            <select
              name="pay-or-recieve"
              onChange={(e) => this.setState({ payOrRecieve: e.target.value })}
            >
              <option value="PLEASE SPECIFY">Please Specify</option>
              <option value="PAY">Pay Money</option>
              <option value="REVIEVE">Recieve Money</option>
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
              payOrRecieve === "PLEASE SPECIFY"
                ? payOrRecieve
                : `${payOrRecieve} ${amount} ${+amount === 1 ? "LIFE CREDIT" : "LIFE CREDITS"}`
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

export default connect(null, mapDispatchToProps)(PayOrRecieveMoney)
