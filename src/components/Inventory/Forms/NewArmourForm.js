import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class NewArmourForm extends React.Component {
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
            <button onClick={toggle}>Add New Armour</button>
            {on && (
              <form>
                <fieldset>
                  <label>Select Armour:</label>
                  <select>
                    <option>Armour 1</option>
                    <option>Armour 2</option>
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