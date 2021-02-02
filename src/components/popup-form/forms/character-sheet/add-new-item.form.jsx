import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import ItemCard from "../../../shared-sheets-components/item-card/item-card.component"

// selectors
import { selectItemToEdit, selectItems } from "../../../../redux/app/app.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class AddNewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      name: "",
      description: "",
      currentItem: {},
      displayItem: false,
    }
  }

  componentDidMount() {
    if (this.props.itemToEdit) {
      const {
        itemToEdit: { id, name, description },
      } = this.props

      this.setState({
        id: id,
        name: name,
        description: description,
      })
    }
  }

  handleChange(e) {
    const { items } = this.props

    if (e.target.value !== "SELECT ONE") {
      const currItem = items.find((item) => item._id === e.target.value)

      this.setState({
        currentItem: currItem,
        id: currItem.id,
        name: currItem.name,
        description: currItem.description,
        displayItem: true,
      })
    } else {
      this.setState({
        displayItem: false,
        currentItem: {},
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
    const { items } = this.props
    const { name, description, currentItem, displayItem } = this.state

    let newItemObj

    if (this.props.itemToEdit) {
      newItemObj = {
        ...this.props.itemToEdit,
        name: name,
        description: description,
      }
    } else {
      newItemObj = {
        ...currentItem,
        name: name,
        description: description,
      }
    }

    return (
      <>
        <PopupFormHeading>{this.props.itemToEdit ? "Edit Item" : "Add New Item"}</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            {!this.props.itemToEdit ? (
              <>
                <label htmlFor="choose-an-item">Please Choose an Item</label>
                <select name="choose-an-item" onChange={(e) => this.handleChange(e)}>
                  <option value="SELECT ONE">Select One</option>
                  {items.map(({ name, _id }, index) => (
                    <option key={index} value={_id}>
                      {name}
                    </option>
                  ))}
                </select>

                {displayItem ? (
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
                    <ItemCard item={newItemObj} />
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

                <ItemCard item={newItemObj} />
              </>
            )}
          </fieldset>
          <ButtonPanel submitValue={`Save Item`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  itemToEdit: selectItemToEdit,
  items: selectItems,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem)
