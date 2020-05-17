import React from "react";
import Toggle from "../../Toggle/Toggle";

class AddSubtractMoneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { operator, amount, total } = this.state;
    this.props.editMoney( amount, total )

    this.setState({
      operator: "",
      amount: "",
      total: "",
    })

    // fetch("http://localhost:2890/editmoney", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     charid,
    //     total,
    //   }),
    // });
  };

  render() {
    let { operator, amount, total } = this.state;
    let { characterSheet, money } = this.props;

    if (operator === "Add") {
      total = parseFloat(money) + parseFloat(amount);
      console.log(`This is the total: ${total}. It was added!`);
    } else if (operator === "Subtract") {
      total = parseFloat(money) - parseFloat(amount);
      console.log(`This is the total ${total}. It was subtracted!`);
    }
    console.log(total)

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add / Subtract Money</button>
            {on && (
              <form id="addSubtractMoneyForm" onSubmit={this.onSubmit}>
                <fieldset>
                <h6 className="edit-h6">Add/Subtract Money Form</h6>
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
