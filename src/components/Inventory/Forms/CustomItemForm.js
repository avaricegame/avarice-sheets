import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomItemForm extends React.Component {
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
    const {characterSheet} = this.state;

    return (
        <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Create Custom Item</button>
            {on && (
              <form id="addNewCustomItemForm">
                <fieldset>
                  <label>Item Name:</label>
                  <input type="text" />
                  <label>Item Description:</label>
                  <textarea></textarea>
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
                  <input
                    type="submit"
                    className="submit-button"
                    value="Save New Item"
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

export default CustomItemForm;