import React from "react"

import PopupForm from "../popup-form.component"

class NewCampaignSheet extends React.Component {
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
      <PopupForm submitValue="Create Campaign Sheet" heading="New Campaign Sheet">
        <form className="popup__form" onSubmit={this.handleSubmit}>
          <label>New campaign sheet form under construction</label>
        </form>
      </PopupForm>
    )
  }
}

export default NewCampaignSheet
