import React from "react"
import Toggle from "../../../../components/Toggle"

class NewWeaponForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      weaponName: "",
      rangedMelee: "",
      imageurl: "",
      range: "",
      proficiency: 0,
      weaponType: "",
      requirements: "",
      abilityBonus: "",
      damage: "",
      uses: "",
      critical: "",
      magicalAbilities: [
        {
          name: "",
          description: "",
        },
      ],
      description: "",
      createdBy: "",
      published: "",
    }
  }

  onChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value })

    let { weaponsCannon } = this.props

    console.log(weaponsCannon)

    let correctWeapon = weaponsCannon.filter(function (weapon) {
      return weapon.name == e.target.value
    })

    console.log(correctWeapon, "This is the correct weapon!!")

    console.log(correctWeapon[0].name, "This is the name aof ita")

    this.setState({
      name: correctWeapon[0].name,
      rangedMelee: correctWeapon[0].rangedMelee,
      imageurl: correctWeapon[0].imageurl,
      range: correctWeapon[0].range,
      proficiency: correctWeapon[0].proficiency,
      weaponType: correctWeapon[0].weaponType,
      requirements: correctWeapon[0].requirements,
      abilityBonus: correctWeapon[0].abilityBonus,
      damage: correctWeapon[0].damage,
      uses: correctWeapon[0].uses,
      critical: correctWeapon[0].critical,
      magicalAbilities: "coming soon...",
      description: correctWeapon[0].description,
      published: "No",
      createdBy: "Pax",
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let { name, rangedMelee, imageurl, range, proficiency, weaponType, requirements, abilityBonus, damage, uses, critical, magicalAbilities, description, published, createdBy } = this.state

    console.log(name, "CONSOLE LOGSAO  NAME")

    this.props.addWeapon(name, rangedMelee, imageurl, range, proficiency, weaponType, requirements, abilityBonus, damage, uses, critical, magicalAbilities, description, published, createdBy)
    this.setState({
      name: "",
      rangedMelee: "",
      imageurl: "",
      range: "",
      proficiency: 0,
      weaponType: "",
      requirements: "",
      abilityBonus: "",
      damage: "",
      uses: "",
      critical: "",
      magicalAbilities: [
        {
          name: "",
          description: "",
        },
      ],
      description: "",
      createdBy: "",
      published: "",
      weaponName: "",
    })
  }

  render() {
    let { characterSheet, weaponsCannon } = this.props
    let { weaponName } = this.state
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Weapon</button>
            {on && (
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Select Weapon:</label>
                  <select required name="weaponName" value={weaponName} onChange={this.onChange}>
                    <option></option>
                    {weaponsCannon.map(function (weapon) {
                      let x = [<option>{weapon.name}</option>]
                      return x
                    })}
                  </select>
                  <input type="submit" className="submit-button" value="Save New Weapon" />
                </fieldset>
              </form>
            )}
          </div>
        )}
      </Toggle>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default NewWeaponForm
