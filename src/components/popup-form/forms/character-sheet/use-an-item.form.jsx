import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"
import ItemCard from "../../../shared-sheets-components/item-card/item-card.component"

// selectors
import { selectEquippedItems } from "../../../../redux/character-sheet/character-sheet.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class MakeACheck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentItem: {},
      currentItemSet: false,
    }
  }

  setCurrentItem(e) {
    const { equippedItems } = this.props

    this.setState({
      currentItem: equippedItems.find((item) => (item.name = e.target.value)),
      currentItemSet: true,
    })
  }

  render() {
    const { equippedItems } = this.props
    const { currentItem, currentItemSet } = this.state
    return (
      <>
        <PopupFormHeading>Use An Item</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="item-to-use">Which Item</label>
            <select name="item-to-use" onChange={(e) => this.setCurrentItem(e)}>
              <option value="PLEASE SPECIFY">Please Specify</option>
              {equippedItems.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            {currentItemSet ? <ItemCard item={currentItem} /> : null}
          </fieldset>

          <ButtonPanel noSubmit buttonValue={`Done`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  equippedItems: selectEquippedItems,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MakeACheck)
