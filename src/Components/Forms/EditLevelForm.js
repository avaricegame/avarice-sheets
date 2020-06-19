import React, { Component } from "react"
import Toggle from "../../../../components/Toggle"

class EditLevelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
    }
  }

  onChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.setLevel(this.state.level)
    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
  }

  render() {
    const { level } = this.state
    let { setLevel, excellenceChips, editExcellenceChips } = this.props
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Edit Level</button>
            {on && (
              <form id="editLevelForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Edit Level</h6>
                  <input type="number" onChange={this.onChange} name="level" value={level} />

                  <input type="submit" className="submit-button" value="Save Level" />
                </fieldset>
              </form>
            )}
          </div>
        )}
      </Toggle>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default EditLevelForm
