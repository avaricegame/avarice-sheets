import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomArmourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    const {
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

    if (published === "Yes") {
      fetch("http://localhost:2890/createarmourpublish", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
        }),
      });
    }

    fetch("http://localhost:2890/createarmour", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
      }),
    });
  };

  render() {
    const {
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

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Create Custom Armour</button>
            {on && (
              <form id="addNewArmourForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Body Area:</label>
                  <select
                    required
                    name="bodyArea"
                    value={bodyArea}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Head</option>
                    <option>Hands</option>
                    <option>Arms</option>
                    <option>Torso</option>
                    <option>Waist</option>
                    <option>Feet</option>
                    <option>Neck</option>
                    <option>Shoulders</option>
                    <option>Eyes</option>
                    <option>Wrists</option>
                    <option>Ring 1</option>
                    <option>Ring 2</option>
                  </select>
                  <label>Armour Piece Name:</label>
                  <input
                    required
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    type="text"
                  />
                  <label>Speed Mod:</label>
                  <input
                    name="speed"
                    value={speed}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Hit Points Mod:</label>
                  <input
                    name="hp"
                    value={hp}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Strength Mod:</label>
                  <input
                    name="strength"
                    value={strength}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Dexterity/Reflex Mod:</label>
                  <input
                    name="dexterityReflex"
                    value={dexterityReflex}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Constitution/Fortitude Mod:</label>
                  <input
                    name="constitutionFortitude"
                    value={constitutionFortitude}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Intelligence Mod:</label>
                  <input
                    name="intelligence"
                    value={intelligence}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Charisma Mod:</label>
                  <input
                    name="charisma"
                    value={charisma}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Perception Mod:</label>
                  <input
                    name="perception"
                    value={perception}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Stealth Mod:</label>
                  <input
                    name="stealth"
                    value={stealth}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Ranged Accuracy Mod:</label>
                  <input
                    name="rangedAccuracy"
                    value={rangedAccuracy}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Melee Accuracy Mod:</label>
                  <input
                    name="meleeAccuracy"
                    value={meleeAccuracy}
                    onChange={this.onChange}
                    type="number"
                  />
                  <label>Description:</label>
                  <textarea
                    required
                    name="description"
                    value={description}
                    onChange={this.onChange}
                  ></textarea>
                  <label>Publish?</label>
                  <select
                    required
                    name="published"
                    value={published}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
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

export default CustomArmourForm;
