import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

// selectors
import {
  Subheading,
  CardContainerContentContainer,
} from "../../../card-container/card-container.component"

// selectors
import { selectAbilities } from "../../../../redux/character-sheet/character-sheet.selectors"

// actions
import { makeACheck } from "../../../../redux/character-sheet/pages/pages.actions"

class LevelUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abilityToUnlockID: null,
      abilityToUnlock: {
        ability1: {
          id: null,
          type: null,
        },
        ability2: {
          id: null,
          type: null,
        },
        ability3: {
          id: null,
          type: null,
        },
        ability4: {
          id: null,
          type: null,
        },
        ability5: {
          id: null,
          type: null,
        },
      },
    }
  }

  unlockAbility(id, type) {
    const newAbilityToUnlock = {
      ability1: {
        id: null,
        type: null,
      },
      ability2: {
        id: null,
        type: null,
      },
      ability3: {
        id: null,
        type: null,
      },
      ability4: {
        id: null,
        type: null,
      },
      ability5: {
        id: null,
        type: null,
      },
    }
    this.setState({
      abilityToUnlockID: id,
      abilityToUnlock: { ...newAbilityToUnlock, [`ability${id}`]: { id, type } },
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { abilityToUnlock, abilityToUnlockID } = this.state

    if (!abilityToUnlockID) return window.alert("You must select an ability to unlock.")

    window.alert("This form action has not been set up yet.")
    console.log(abilityToUnlock)
  }

  render() {
    const {
      abilities: { abilities },
    } = this.props
    const { abilityToUnlock } = this.state
    return (
      <>
        <PopupFormHeading>Level Up</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="unlock-an-ability">Please Select an Ability to Unlock:</label>
            {abilities.map((ability) => {
              return (
                <div className="level-up-form__abilities-overview" key={ability.id}>
                  <Subheading>{ability.name}</Subheading>
                  {ability.types.map((abilityType) => {
                    const { difficulty, associatedStat, description, type, unlocked } = abilityType
                    return (
                      <div key={type}>
                        {!unlocked ? (
                          <div
                            className={`level-up-form__abilities ${
                              abilityToUnlock[`ability${ability.id}`].type === type
                                ? "level-up-form__abilities--selected"
                                : "level-up-form__abilities--locked"
                            }`}
                            onClick={() => this.unlockAbility(ability.id, type)}
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

          <ButtonPanel submitValue={`Level Up`} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LevelUp)
