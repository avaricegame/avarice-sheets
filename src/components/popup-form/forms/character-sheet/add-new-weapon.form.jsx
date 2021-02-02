import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import WeaponCard from "../../../shared-sheets-components/weapon-card/weapon-card.component"

// selectors
import { selectWeaponToEdit, selectWeapons } from "../../../../redux/app/app.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class AddNewWeapon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      name: "",
      description: "",
      currentWeapon: {},
      displayWeapon: false,
    }
  }

  componentDidMount() {
    if (this.props.weaponToEdit) {
      const {
        weaponToEdit: { id, name, description },
      } = this.props

      this.setState({
        id: id,
        name: name,
        description: description,
      })
    }
  }

  handleChange(e) {
    const { weapons } = this.props

    if (e.target.value !== "SELECT ONE") {
      const currWeapon = weapons.find((weapon) => weapon._id === e.target.value)

      this.setState({
        currentWeapon: currWeapon,
        id: currWeapon.id,
        name: currWeapon.name,
        description: currWeapon.description,
        displayWeapon: true,
      })
    } else {
      this.setState({
        displayWeapon: false,
        currentWeapon: {},
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, description, id } = this.state

    if (name === "" || description === "")
      return window.alert("You must have a name and a description written to save.")

    window.alert("Form is not hooked up yet")
    console.log(name, description, id)
  }

  render() {
    const { weapons } = this.props
    const { name, description, currentWeapon, displayWeapon } = this.state

    let newWeaponObj

    if (this.props.weaponToEdit) {
      newWeaponObj = {
        ...this.props.weaponToEdit,
        name: name,
        description: description,
      }
    } else {
      newWeaponObj = {
        ...currentWeapon,
        name: name,
        description: description,
      }
    }

    return (
      <>
        <PopupFormHeading>
          {this.props.weaponToEdit ? "Edit Weapon" : "Add New Weapon"}
        </PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            {!this.props.weaponToEdit ? (
              <>
                <label htmlFor="choose-an-item">Please Choose a Weapon</label>
                <select name="choose-an-item" onChange={(e) => this.handleChange(e)}>
                  <option value="SELECT ONE">Select One</option>
                  {weapons.map(({ name, _id }, index) => (
                    <option key={index} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>

                {displayWeapon ? (
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
                    <WeaponCard weapon={newWeaponObj} />
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

                <WeaponCard weapon={newWeaponObj} />
              </>
            )}
          </fieldset>
          <ButtonPanel submitValue={`Save Weapon`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  weaponToEdit: selectWeaponToEdit,
  weapons: selectWeapons,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewWeapon)
