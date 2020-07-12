import React from "react"
import Toggle from "../../../../nln/Toggle"

class Weapons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { characterSheet, weapons, deleteWeapon } = this.props
    return (
      <React.Fragment>
        {weapons.map(function (weapon) {
          let y = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{weapon.name}</h6>
                    <h5 onClick={toggle}>{weapon.rangedMelee}</h5>

                    <p onClick={toggle} className="cursor">
                      <strong>Description:</strong> {weapon.description}
                    </p>
                    {on && (
                      <React.Fragment>
                        <p>
                          <strong>Stats:</strong>
                        </p>
                        <table>
                          <tr>
                            <td>Range</td>
                            <td>{weapon.range}</td>
                          </tr>
                          <tr>
                            <td>Proficiency</td>
                            <td>{weapon.proficiency}</td>
                          </tr>
                          <tr>
                            <td>Weapon Type</td>
                            <td>{weapon.weaponType}</td>
                          </tr>
                          <tr>
                            <td>Ability Bonus</td>
                            <td>{weapon.abilityBonus}</td>
                          </tr>
                          <tr>
                            <td>Damage</td>
                            <td>{weapon.damage}</td>
                          </tr>
                          <tr>
                            <td>Uses</td>
                            <td>{weapon.uses}</td>
                          </tr>
                          <tr>
                            <td>Critical</td>
                            <td>{weapon.critical}</td>
                          </tr>
                        </table>
                        <p>
                          <strong>Magical Abilities:</strong>
                        </p>
                        <p>
                          <strong>Requirements:</strong> {weapon.requirements}
                        </p>
                        <h6 onClick={deleteWeapon.bind(this, weapon.id)} className="delete-button">
                          Delete
                        </h6>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </Toggle>{" "}
            </div>,
            // <li>Magical Abilities:</li>
          ]
          return y
        })}
      </React.Fragment>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default Weapons