import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// actions
import { selectCharLogToEdit } from "../../../../redux/app/app.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class NewCharacterLog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      title: "",
      date: "",
      log: "",
    }
  }

  componentDidMount() {
    if (this.props.charLogToEdit) {
      const {
        charLogToEdit: { id, title, date, details },
      } = this.props
      this.setState({
        id: id,
        title: title,
        date: date,
        log: details,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { title, log, id, date } = this.state

    if (title === "" || log === "" || date === "")
      return window.alert("You must have a title and a log written to save.")

    window.alert("Form is not hooked up yet")
    console.log(title, log, id, date)
  }

  render() {
    const { title, log, date } = this.state
    return (
      <>
        <PopupFormHeading>Edit Character Log</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />

            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />

            <label htmlFor="log">Log</label>
            <textarea
              name="log"
              rows="15"
              value={log}
              onChange={(e) => this.setState({ log: e.target.value })}
            ></textarea>
          </fieldset>

          <ButtonPanel submitValue={`Save Character Log`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  charLogToEdit: selectCharLogToEdit,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterLog)
