import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomAbilitiesForm extends React.Component {
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
            <button onClick={toggle}>Edit/Create Character Background</button>
            {on && (
              <form id="customAbilitiesForm">
              <fieldset>
                  <label>Create Ability:</label>
                  <select>
                    <option>Ability 1</option>
                    <option>Ability 2</option>
                  </select>
                  <input
                    type="submit"
                    className="submit-button"
                    value="Create Ability"
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

export default CustomAbilitiesForm;