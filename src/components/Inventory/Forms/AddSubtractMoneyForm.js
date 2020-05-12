import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class AddSubtractMoneyForm extends React.Component {
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
            <button onClick={toggle}>Add / Subtract Money</button>
            {on && (
              <form id="addSubtractMoneyForm">
                <fieldset>
                  <label>Add or Subtract</label>
                  <select>
                    <option>Add</option>
                    <option>Subtract</option>
                  </select>
                  <label>How Much?</label>
                  <input type="number" />

                  <input
                    type="submit"
                    className="submit-button"
                    value="Submit the change"
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

export default AddSubtractMoneyForm;
