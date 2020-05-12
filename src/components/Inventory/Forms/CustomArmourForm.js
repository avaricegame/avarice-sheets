import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomArmourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   onChange = (e) => {
  //     console.log(e.target.value);
  //     console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  onSubmit = (e) => {
    e.preventDefault();
    const {} = this.state;

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  render() {
    const {} = this.state;

    return (
        <Toggle>
            {({ on, toggle }) => (
              <div>
                <button onClick={toggle}>Create Custom Armour</button>
                {on && (
                  <form id="addNewArmourForm">
                    <fieldset>
                      <label>Armour Type:</label>
                      <select>
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
                      <input type="text" />
                      <h4>Modifiers</h4>
                      <label>Speed:</label>
                      <input type="number" />
                      <label>Hit Points:</label>
                      <input type="number" />
                      <label>Strength:</label>
                      <input type="number" />
                      <label>Dexterity/Reflex:</label>
                      <input type="number" />
                      <label>Constitution/Fortitude:</label>
                      <input type="number" />
                      <label>Intelligence:</label>
                      <input type="number" />
                      <label>Charisma:</label>
                      <input type="number" />
                      <label>Perception:</label>
                      <input type="number" />
                      <label>Stealth:</label>
                      <input type="number" />
                      <label>Ranged Accuracy:</label>
                      <input type="number" />
                      <label>Melee Accuracy:</label>
                      <input type="number" />
                      <label>Abilities Given:</label>
                      <select>
                        <option>TBA</option>
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