import React from "react"
import { connect } from "react-redux"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { togglePopupForm } from "../../../../redux/app/app.actions"
import { payOrRecieveMoney } from "../../../../redux/character-sheet/pages/pages.actions"

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
    const { payOrRecieveMoney, togglePopupForm } = this.props

    if (payOrRecieve === "PLEASE SPECIFY")
      return window.alert("Please specify whether you need to pay or recieve money.")

    if (payOrRecieve === "PAY") {
      payOrRecieveMoney(-amount)
      togglePopupForm()
    }

    if (payOrRecieve === "RECIEVE") {
      payOrRecieveMoney(+amount)
      togglePopupForm()
    }
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
              <option value="RECIEVE">Recieve Money</option>
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
  payOrRecieveMoney: (amount) => dispatch(payOrRecieveMoney(amount)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(null, mapDispatchToProps)(PayOrRecieveMoney)
