import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomArmourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:  "",
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
      magicalAbilities: [
        {name: "", description: [""]},
      ],
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
                      <label>Armour Type:</label>
                      <select
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
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      type="text" />
                      <h4>Modifiers</h4>
                      <label>Speed:</label>
                      <input 
                      name="speed"
                      value={speed}
                      onChange={this.onChange}
                      type="number" />
                      <label>Hit Points:</label>
                      <input 
                      name="hp"
                      value={hp}
                      onChange={this.onChange}
                      type="number" />
                      <label>Strength:</label>
                      <input 
                      name="strength"
                      value={strength}
                      onChange={this.onChange}
                      type="number" />
                      <label>Dexterity/Reflex:</label>
                      <input 
                      name="dexterityReflex"
                      value={dexterityReflex}
                      onChange={this.onChange}
                      type="number" />
                      <label>Constitution/Fortitude:</label>
                      <input 
                      name="constitutionFortitude"
                      value={constitutionFortitude}
                      onChange={this.onChange}
                      type="number" />
                      <label>Intelligence:</label>
                      <input 
                      name="intelligence"
                      value={intelligence}
                      onChange={this.onChange}
                      type="number" />
                      <label>Charisma:</label>
                      <input 
                      name="charisma"
                      value={charisma}
                      onChange={this.onChange}
                      type="number" />
                      <label>Perception:</label>
                      <input name="perception"
                      value={perception}
                      onChange={this.onChange}
                       type="number" />
                      <label>Stealth:</label>
                      <input
                      name="stealth"
                      value={stealth}
                      onChange={this.onChange}
                       type="number" />
                      <label>Ranged Accuracy:</label>
                      <input
                      name="rangedAccuracy"
                      value={rangedAccuracy}
                      onChange={this.onChange}
                       type="number" />
                      <label>Melee Accuracy:</label>
                      <input 
                      name="meleeAccuracy"
                      value={meleeAccuracy}
                      onChange={this.onChange}
                      type="number" />
                      <label>Description:</label>
                      <textarea
                      name="description"
                      value={description}
                      onChange={this.onChange}
                      >

                      </textarea>
                      <labe>Publish?</labe>
                  <select
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