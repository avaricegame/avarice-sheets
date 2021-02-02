import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./forms.styles.scss"

// display components
import { PopupFormHeading } from "../popup-form.component"
import { default as ButtonPanel } from "../../popup-form-button-panel/popup-form-button-panel.component"

import {
  Subheading,
  CardContainerContentContainer,
} from "../../card-container/card-container.component"

// selectors
import { selectAbilities } from "../../../redux/character-sheet/character-sheet.selectors"

// actions
import { makeACheck } from "../../../redux/character-sheet/pages/pages.actions"

class TakeARest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abilityLoadout: [],
    }
  }

  makeCheck(type) {}

  equipAbility(id, type) {
    console.log(id, type)
    this.setState({
      abilityLoadout: [...this.state.abilityLoadout, { id, type }],
    })
  }

  render() {
    const {
      abilities: { abilities },
    } = this.props
    return (
      <>
        <PopupFormHeading>Take a Rest</PopupFormHeading>
        <form className="popupform__form purple-top-border">
          <fieldset>
            <label htmlFor="difficulty">Quick Nap or Long Slumber?</label>
            <select name="difficulty">
              <option value={null}>Select One</option>
              <option value="RISK">Quick Nap</option>
              <option value={1}>Long Slumber</option>
            </select>
            <label htmlFor="ability">Please Choose your Ability Loadout:</label>
            {abilities.map((ability) => {
              return (
                <div className="take-a-rest-form__abilities-overview" key={ability.id}>
                  <Subheading>{ability.name}</Subheading>
                  {ability.types.map((abilityType) => {
                    const {
                      difficulty,
                      associatedStat,
                      description,
                      type,
                      equipped,
                      unlocked,
                    } = abilityType
                    return (
                      <div key={type}>
                        {unlocked ? (
                          <div
                            className={`take-a-rest-form__abilities ${
                              equipped ? "take-a-rest-form__abilities--equipped" : ""
                            }`}
                            onClick={() => this.equipAbility(ability.id, type)}
                          >
                            <CardContainerContentContainer>
                              <p>{type.toUpperCase()}</p>
                              <ul>
                                <li>
                                  <em>Difficulty: </em>
                                  {difficulty}
                                </li>
                                <li>
                                  <em>Associated Stat: </em>
                                  {associatedStat}
                                </li>
                              </ul>
                              <p>{description}</p>
                            </CardContainerContentContainer>
                          </div>
                        ) : null}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </fieldset>

          <ButtonPanel submitValue={`Please Specify`} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  abilities: selectAbilities,
})

const mapDispatchToProps = (dispatch) => ({
  makeACheck: (typeAndSuccess) => dispatch(makeACheck(typeAndSuccess)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TakeARest)
