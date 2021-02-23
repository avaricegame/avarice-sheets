import React from "react"
import { connect } from "react-redux"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { togglePopupForm } from "../../../../redux/app/app.actions"
import { createNewCampSheet } from "../../../../redux/user/user.actions"

class NewCampaignSheet extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      description: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { name, background } = this.state
    const { createNewCampSheet } = this.props

    if (name === "" || background === "") {
      return window.alert("You must provide a name and background for your new campaign.")
    }

    window.alert(name + background)
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { name, background } = this.state
    return (
      <>
        <PopupFormHeading>New Campaign Sheet</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="name">Campaign Name</label>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
            <label htmlFor="background">Campaign Background</label>
            <textarea
              name="background"
              value={background}
              onChange={this.handleChange}
              rows="10"
            ></textarea>
          </fieldset>
          <ButtonPanel submitValue={`Create Campaign Sheet`} />
        </form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNewCampSheet: (data) => dispatch(createNewCampSheet(data)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(null, mapDispatchToProps)(NewCampaignSheet)
