import React from "react";
import Toggle from "../../Toggle/Toggle";

class AddSubtractMoneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      amount: "",
    };
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { operator, amount } = this.state;
    let x
    if (operator === "Add") {
      x = parseInt(this.props.money) + parseInt(amount)
      console.log(this.props.money) 
    } else if (operator === "Subtract") {
      x = parseInt(this.props.money) - parseInt(amount)
      console.log(this.props.money)
    }

    console.log(x, "THIS IS X")

    this.props.editMoney( x )

    this.setState({
      operator: "",
      amount: "",
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
    let { operator, amount } = this.state;
    let { characterSheet, money } = this.props;

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
