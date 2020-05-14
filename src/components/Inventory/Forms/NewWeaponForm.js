import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class NewWeaponForm extends React.Component {
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
    let { characterSheet, weapons } = this.props;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Weapon</button>
            {on && (
              <form>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Select Weapon:</label>
                  <select required>
                    <option></option>
                    {weapons.map(function (weapon) {
                      let x = [<option>{weapon.name}</option>];
                      return x;
                    })}
                  </select>
                  <input
                    type="submit"
                    className="submit-button"
                    value="Save New Weapon"
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

export default NewWeaponForm;
