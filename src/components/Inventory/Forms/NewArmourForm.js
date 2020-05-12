import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class NewArmourForm extends React.Component {
  constructor(props) {
    super(props);
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
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value, "VALUE");
    console.log(e.target.name, "NAME");
    console.log(this.state.armourName, "this is the new armour name state");
  };

  onSubmit = (e) => {
    e.preventDefault();

    let { armour } = this.props;
    console.log(armour);

    let {
      armourName,
    } = this.state;

    console.log(armourName, "This is the new armourName state.");

    let correctWeapon = armour.filter(function (weapon) {
      return weapon.name == armourName;
    });

    console.log(correctWeapon, "This is the correct weapon!!");

    this.setTheStates(correctWeapon)
    this.sendTheData()
    
  };

  sendTheData = () => {
    let {
      armourName,
      name,
      bodyArea,
      requirements,
      hp,
      speed,
      strength,
      dexterityReflex,
      constitutionFortitude,
      intelligence,
      charisma,
      perception,
      stealth,
      rangedAccuracy,
      meleeAccuracy,
      magicalAbilities,
      description,
      createdBy,
      published,
      imageurl,
    } = this.state;
    fetch("http://localhost:2890/newarmour", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
  }

  setTheStates = (x) => {
    this.setState({name: x[0].name})
  }

  render() {
    let { characterSheet, armour } = this.props;
    let { armourName } = this.state;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Armour</button>
            {on && (
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <label>Select Armour:</label>
                  <select
                    name="armourName"
                    value={armourName}
                    onChange={this.onChange}
                  >
                    <option></option>
                    {armour.map(function (armour) {
                      let x = [<option>{armour.name}</option>];
                      return x;
                    })}
                  </select>
                  <input
                    type="submit"
                    className="submit-button"
                    value="Save New Armour"
                  />
                </fieldset>
              </form>
            )}
          </div>
        )}
      </Toggle>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default NewArmourForm;
