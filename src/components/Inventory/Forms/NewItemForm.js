import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class NewItemForm extends React.Component {
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
    let { characterSheet, itemsCannon } = this.props;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Item</button>
            {on && (
              <form>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Select Item:</label>
                  <select required>
                    <option></option>
                    {itemsCannon.map(function (item) {
                      let x = [<option>{item.itemName}</option>];
                      return x;
                    })}
                  </select>
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

export default NewItemForm;
