import React from "react"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import { default as Button } from "../../../custom-button/custom-button.component"

class RollDie extends React.Component {
  rollHandler = (number) => {
    const roll = Math.ceil(Math.random() * number)
    window.alert("You rolled " + roll + ".")
  }

  customRollHandler = () => {
    const numberToRoll = window.prompt("How many sided die do you want to roll?")

    this.rollHandler(numberToRoll)
  }

  render() {
    return (
      <>
        <PopupFormHeading>Roll Dice</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <Button type="button" onClick={() => this.rollHandler(4)}>
              D4
            </Button>
            <Button type="button" onClick={() => this.rollHandler(6)}>
              D6
            </Button>
            <Button type="button" onClick={() => this.rollHandler(8)}>
              D8
            </Button>
            <Button type="button" onClick={() => this.rollHandler(10)}>
              D10
            </Button>
            <Button type="button" onClick={() => this.rollHandler(12)}>
              D12
            </Button>
            <Button type="button" onClick={() => this.rollHandler(20)}>
              D20
            </Button>
            <Button type="button" onClick={() => this.rollHandler(60)}>
              D60
            </Button>
            <Button type="button" onClick={() => this.rollHandler(100)}>
              D100
            </Button>
            <Button type="button" onClick={this.customRollHandler}>
              Custom
            </Button>
          </fieldset>
          <ButtonPanel noSubmit buttonValue={`Done`} />
        </form>
      </>
    )
  }
}

export default RollDie
