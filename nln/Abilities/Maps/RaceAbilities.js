import React from "react"
import Toggle from "../../../../nln/Toggle"

let charactersRace
let correctSpecialTraits

class RaceAbilities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { races, characterSheet } = this.props

    let charactersRace = characterSheet.race

    if (charactersRace === "Bruttu") {
      correctSpecialTraits = races[0].specialTraits
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    return (
      <React.Fragment>
        {correctSpecialTraits.map(function (trait) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{trait.name}</h6>
                    <h5 onClick={toggle}>Subheading</h5>
                    <p onClick={toggle} className="cursor">
                      <strong>Details: </strong>
                      {trait.description}
                    </p>
                    {on && (
                      <React.Fragment>
                        <h6 className="delete-button gray">Delete</h6>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </Toggle>
            </div>,
          ]
          return x
        })}
      </React.Fragment>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default RaceAbilities
