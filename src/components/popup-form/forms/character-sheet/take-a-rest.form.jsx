import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "../forms.styles.scss"

// display components
import { PopupFormHeading } from "../../popup-form.component"
import { default as ButtonPanel } from "../../../popup-form-button-panel/popup-form-button-panel.component"

import {
  Subheading,
  CardContainerContentContainer,
} from "../../../card-container/card-container.component"

// util functions
import { returnOnlyEquippedAbilityTypesAsObject } from "../../utils/take-a-rest.utils"

// selectors
import { selectAbilities } from "../../../../redux/character-sheet/character-sheet.selectors"

// actions

import { takeARest } from "../../../../redux/character-sheet/pages/pages.actions"
import { togglePopupForm } from "../../../../redux/app/app.actions"

class TakeARest extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abilityLoadout: {
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
      restType: "PLEASE SPECIFY",
    }
  }

  componentDidMount() {
    const {
      abilities: { abilities },
    } = this.props

    const equippedAbilityTypes = returnOnlyEquippedAbilityTypesAsObject(abilities)

    this.setState({
      abilityLoadout: {
        ability1: {
          id: equippedAbilityTypes.ability1.id,
          type: equippedAbilityTypes.ability1.equippedAbility.type,
        },
        ability2: {
          id: equippedAbilityTypes.ability2.id,
          type: equippedAbilityTypes.ability2.equippedAbility.type,
        },
        ability3: {
          id: equippedAbilityTypes.ability3.id,
          type: equippedAbilityTypes.ability3.equippedAbility.type,
        },
        ability4: {
          id: equippedAbilityTypes.ability4.id,
          type: equippedAbilityTypes.ability4.equippedAbility.type,
        },
        ability5: {
          id: equippedAbilityTypes.ability5.id,
          type: equippedAbilityTypes.ability5.equippedAbility.type,
        },
      },
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { abilityLoadout, restType } = this.state
    const { takeARest, togglePopupForm } = this.props

    if (restType === "PLEASE SPECIFY") return window.alert("You must specify a rest type.")

    console.log(abilityLoadout, restType)
    takeARest({ abilities: abilityLoadout, type: restType })
    togglePopupForm()
  }

  equipAbility(id, type) {
    this.setState({
      abilityLoadout: { ...this.state.abilityLoadout, [`ability${id}`]: { id, type } },
    })
  }

  render() {
    const {
      abilities: { abilities },
    } = this.props
    const { abilityLoadout, restType } = this.state
    return (
      <>
        <PopupFormHeading>Take a Rest</PopupFormHeading>
        <form className="popupform__form purple-top-border" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="rest-type">Quick Nap or Long Slumber?</label>
            <select
              required
              name="rest-type"
              onChange={(e) => this.setState({ restType: e.target.value })}
            >
              <option value="PLEASE SPECIFY">Please Specify</option>
              <option value="TAKE A QUICK NAP">Quick Nap</option>
              <option value="TAKE A LONG SLUMBER">Long Slumber</option>
            </select>
            <label htmlFor="equip-abilities">Please Choose your Ability Loadout:</label>
            {abilities.map((ability) => {
              return (
                <div className="take-a-rest-form__abilities-overview" key={ability.id}>
                  <Subheading>{ability.name}</Subheading>
                  {ability.types.map((abilityType) => {
                    const { difficulty, associatedStat, description, type, unlocked } = abilityType
                    return (
                      <div key={type}>
                        {unlocked ? (
                          <div
                            className={`take-a-rest-form__abilities ${
                              abilityLoadout[`ability${ability.id}`].type === type
                                ? "take-a-rest-form__abilities--equipped"
                                : ""
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

          <ButtonPanel submitValue={restType} />
        </form>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  abilities: selectAbilities,
})

const mapDispatchToProps = (dispatch) => ({
  takeARest: (typeAndAbilities) => dispatch(takeARest(typeAndAbilities)),
  togglePopupForm: () => dispatch(togglePopupForm()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TakeARest)
