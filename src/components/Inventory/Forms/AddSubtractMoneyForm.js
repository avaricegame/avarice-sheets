import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class AddSubtractMoneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charid: 144,
      operator: "",
      amount: "",
      total: "",
    };
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { charid, total } = this.state;

    fetch("http://localhost:2890/editmoney", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        charid,
        total,
      }),
    });
  };

  render() {
    let { operator, amount, total } = this.state;
    let { characterSheet } = this.props;

    let x = characterSheet["inventory"]["money"];
    if (operator === "Add") {
      total = parseFloat(x) + parseFloat(amount);
      console.log(`This is the total: ${total}. It was added!`);
    } else if (operator === "Subtract") {
      total = parseFloat(x) - parseFloat(amount);
      console.log(`This is the total ${total}. It was subtracted!`);
    }

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add / Subtract Money</button>
            {on && (
              <form id="addSubtractMoneyForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <label>Add or Subtract</label>
                  <select
                    name="operator"
                    onChange={this.onChange}
                    value={operator}
                  >
                    <option></option>
                    <option>Add</option>
                    <option>Subtract</option>
                  </select>
                  <label>How Much?</label>
                  <input
                    name="amount"
                    type="number"
                    onChange={this.onChange}
                    value={amount}
                  />

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
