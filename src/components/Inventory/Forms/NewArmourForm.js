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
    let { characterSheet } = this.props;
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
                  <option></option>
                  {characterSheet["inventory"]["armour"].map(function (
                      armour
                    ) {
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