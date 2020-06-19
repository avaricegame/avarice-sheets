import React from "react"
import Toggle from "../../../../components/Toggle"

class Armour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { characterSheet, armour, deleteArmour } = this.props
    return (
      <React.Fragment>
        {armour.map(function (armour) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{armour.name}</h6>
                    <h5 onClick={toggle}>{armour.bodyArea}</h5>
                    <p onClick={toggle} className="cursor">
                      <strong>Description:</strong> {armour.description}
                    </p>
                    {on && (
                      <React.Fragment>
                        <p>
                          <strong>Stats:</strong>
                        </p>
                        <table>
                          <tr>
                            <td>Hit Points:</td>
                            <td>{armour.modifiers.hp}</td>
                          </tr>
                          <tr>
                            <td>Speed:</td>
                            <td>{armour.modifiers.speed}</td>
                          </tr>
                          <tr>
                            <td>Strength:</td>
                            <td>{armour.modifiers.strength}</td>
                          </tr>
                          <tr>
                            <td>Dexterity/Reflex:</td>
                            <td>{armour.modifiers.dexterityReflex}</td>
                          </tr>
                          <tr>
                            <td>Constitution/Fortitude:</td>
                            <td>{armour.modifiers.constitutionFortitude}</td>
                          </tr>
                          <tr>
                            <td>Intelligence:</td>
                            <td>{armour.modifiers.intelligence}</td>
                          </tr>
                          <tr>
                            <td>Charisma:</td>
                            <td>{armour.modifiers.charisma}</td>
                          </tr>
                          <tr>
                            <td>Perception:</td>
                            <td>{armour.modifiers.perception}</td>
                          </tr>
                          <tr>
                            <td>Stealth:</td>
                            <td>{armour.modifiers.stealth}</td>
                          </tr>
                          <tr>
                            <td>Ranged Accuracy:</td>
                            <td>{armour.modifiers.rangedAccuracy}</td>
                          </tr>
                          <tr>
                            <td>Melee Accuracy:</td>
                            <td>{armour.modifiers.meleeAccuracy}</td>
                          </tr>
                        </table>
                        <p>
                          <strong>Magical Abilities:</strong>
                        </p>
                        <p>
                          <strong>Requirements:</strong> {armour.requirements}
                        </p>
                        <h6 onClick={deleteArmour.bind(this, armour.id)} className="delete-button">
                          Delete
                        </h6>
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

export default Armour
