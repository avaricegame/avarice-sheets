import React from "react"
import Toggle from "../../../../components/Toggle"

class NewArmourForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      armourName: "",
      name: "",
      bodyArea: "",
      requirements: "",
      hp: "",
      speed: "",
      strength: "",
      dexterityReflex: "",
      constitutionFortitude: "",
      intelligence: "",
      charisma: "",
      perception: "",
      stealth: "",
      rangedAccuracy: "",
      meleeAccuracy: "",
      magicalAbilities: [{ name: "", description: [""] }],
      description: "",
      createdBy: "",
      published: "",
      imageurl: "",
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value, "VALUE")
    console.log(e.target.name, "NAME")

    let { armourCannon } = this.props

    console.log(armourCannon)

    let correctArmour = armourCannon.filter(function (armour) {
      return armour.name == e.target.value
    })

    console.log(correctArmour, "This is the correct weapon!!")

    console.log(correctArmour[0].name, "This is the name aof ita")

    this.setState({
      name: correctArmour[0].name,
      bodyArea: correctArmour[0].bodyArea,
      requirements: correctArmour[0].requirements,
      hp: correctArmour[0].modifiers.hp,
      speed: correctArmour[0].modifiers.speed,
      strength: correctArmour[0].modifiers.strength,
      dexterityReflex: correctArmour[0].modifiers.dexterityReflex,
      constitutionFortitude: correctArmour[0].modifiers.constitutionFortitude,
      intelligence: correctArmour[0].modifiers.intelligence,
      charisma: correctArmour[0].modifiers.charisma,
      perception: correctArmour[0].modifiers.perception,
      stealth: correctArmour[0].modifiers.stealth,
      rangedAccuracy: correctArmour[0].modifiers.rangedAccuracy,
      meleeAccuracy: correctArmour[0].modifiers.meleeAccuracy,
      magicalAbilities: [{ name: "", description: [""] }],
      description: correctArmour[0].description,
      createdBy: "Pax",
      published: "No",
      imageurl: correctArmour[0].imageurl,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    let { name, bodyArea, requirements, hp, speed, strength, dexterityReflex, constitutionFortitude, intelligence, charisma, perception, stealth, rangedAccuracy, meleeAccuracy, magicalAbilities, description, createdBy, published, imageurl } = this.state

    console.log(name, "CONSOLE LOGSAO  NAME")

    this.props.addArmour(name, bodyArea, requirements, hp, speed, strength, dexterityReflex, constitutionFortitude, intelligence, charisma, perception, stealth, rangedAccuracy, meleeAccuracy, magicalAbilities, description, createdBy, published, imageurl)
    this.setState({
      name: "",
      bodyArea: "",
      requirements: "",
      hp: 0,
      speed: 0,
      strength: 0,
      dexterityReflex: 0,
      constitutionFortitude: 0,
      intelligence: 0,
      charisma: 0,
      perception: 0,
      stealth: 0,
      rangedAccuracy: 0,
      meleeAccuracy: 0,
      magicalAbilities: [{ name: "", description: [""] }],
      description: "",
      createdBy: "",
      published: "",
      imageurl: "",
      armourName: "",
    })
  }

  render() {
    let { characterSheet, armourCannon } = this.props
    let { armourName } = this.state
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Armour</button>
            {on && (
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Select Armour:</label>
                  <select required name="armourName" value={armourName} onChange={this.onChange}>
                    <option></option>
                    {armourCannon.map(function (armour) {
                      let x = [<option>{armour.name}</option>]
                      return x
                    })}
                  </select>
                  <input type="submit" className="submit-button" value="Save New Armour" />
                </fieldset>
              </form>
            )}
          </div>
        )}
      </Toggle>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default NewArmourForm
