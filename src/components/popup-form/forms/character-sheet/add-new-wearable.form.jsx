import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import uniqid from "uniqid"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import WearableCard from "../../../shared-sheets-components/wearable-card/wearable-card.component"

// selectors
import { selectWearableToEdit, selectWearables } from "../../../../redux/app/app.selectors"

// actions
import { addNewOrEditWearable } from "../../../../redux/character-sheet/pages/pages.actions"
import { togglePopupForm } from "../../../../redux/app/app.actions"

class AddNewWearable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      name: "",
      description: "",
      currentWearable: {},
      displayWearable: false,
    }
  }

  componentDidMount() {
    if (this.props.wearableToEdit) {
      const {
        wearableToEdit: { id, name, description },
      } = this.props

      this.setState({
        currentWearable: { ...this.props.wearableToEdit },
        id: id,
        name: name,
        description: description,
      })
    }
  }

  handleChange(e) {
    const { wearables } = this.props
    console.log(e.target.value)
    if (e.target.value !== "SELECT ONE") {
      const currWearable = wearables.find((wearable) => wearable._id === e.target.value)

      this.setState({
        currentWearable: currWearable,
        id: currWearable.id,
        name: currWearable.name,
        description: currWearable.description,
        displayWearable: true,
      })
    } else {
      this.setState({
        displayWearable: false,
        currentWearable: {},
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, description, id, currentWearable } = this.state
    const { togglePopupForm, addNewOrEditWearable } = this.props

    if (name === "" || description === "")
      return window.alert("You must have a name and a description written to save.")

    console.log(currentWearable)

    let wearableToAdd

    if (id === undefined) {
      wearableToAdd = {
        ...currentWearable,
        name: name,
        description: description,
        id: uniqid(),
      }
    } else {
      wearableToAdd = {
        ...currentWearable,
        name: name,
        description: description,
        id: id,
      }
    }

    console.log(wearableToAdd)
    addNewOrEditWearable(wearableToAdd)
    togglePopupForm()
  }

  render() {
    const { wearables } = this.props
    const { name, description, currentWearable, displayWearable } = this.state

    let newWearableObj

    if (this.props.wearableToEdit) {
      newWearableObj = {
        ...this.props.wearableToEdit,
        name: name,
        description: description,
      }
    } else {
      newWearableObj = {
        ...currentWearable,
        name: name,
        description: description,
      }
    }

    return (
      <>
        <PopupFormHeading>
          {this.props.wearableToEdit ? "Edit Wearable" : "Add New Wearable"}
        </PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            {!this.props.wearableToEdit ? (
              <>
                <label htmlFor="choose-an-item">Please Choose a Wearable</label>
                <select name="choose-an-item" onChange={(e) => this.handleChange(e)}>
                  <option value="SELECT ONE">Select One</option>
                  {wearables.map(({ name, _id }, index) => (
                    <option key={index} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>

                {displayWearable ? (
                  <>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                      rows="5"
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => this.setState({ description: e.target.value })}
                    />
                    <WearableCard wearable={newWearableObj} />
                  </>
                ) : null}
              </>
            ) : (
              <>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />

                <label htmlFor="description">Description</label>
                <textarea
                  rows="5"
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => this.setState({ description: e.target.value })}
                />

                <WearableCard wearable={newWearableObj} />
              </>
            )}
          </fieldset>
          <ButtonPanel submitValue={`Save Wearable`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  wearableToEdit: selectWearableToEdit,
  wearables: selectWearables,
})

const mapDispatchToProps = (dispatch) => ({
  addNewOrEditWearable: (wearable) => dispatch(addNewOrEditWearable(wearable)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWearable)
