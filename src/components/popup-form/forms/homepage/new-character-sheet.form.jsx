import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { togglePopupForm } from "../../../../redux/app/app.actions"
//import {createNewCharSheet} from "../../../../redux/user/user.actions"

class NewCharacterSheet extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  handleSubmit = async (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <>
        <PopupFormHeading>New Character Sheet</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label>New character sheet form under construction</label>

            {/* <FormInput
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            /> */}
          </fieldset>
          <ButtonPanel submitValue={`Create Character Sheet`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  // itemToEdit: selectItemToEdit,
  // items: selectItems,
})

const mapDispatchToProps = (dispatch) => ({
  //addNewOrEditItem: (item) => dispatch(addNewOrEditItem(item)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterSheet)
