import React from "react";
import Toggle from "../../Toggle/Toggle";

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItemName: "",
      itemName: "",
      published: "",
      imageurl: "",
      itemDescription: "",
      createdBy: "",
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });

    let { itemsCannon } = this.props;

    console.log(itemsCannon);

    let correctItem = itemsCannon.filter(function (item) {
      return item.itemName == e.target.value;
    });

    console.log(correctItem, "This is the correct weapon!!");

    console.log(correctItem[0].itemName, "This is the name aof ita");

    this.setState({
      itemName: correctItem[0].itemName,
      imageurl: correctItem[0].imageurl,
      itemDescription: correctItem[0].itemDescription,
      published: "No",
      createdBy: "Pax",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let {
      itemName,
      published,
      imageurl,
      itemDescription,
      createdBy,
    } = this.state;

    console.log(itemName, "CONSOLE LOGSAO  NAME");

    this.props.addItem(
      itemName,
      published,
      imageurl,
      itemDescription,
      createdBy
    );
    this.setState({
      currentItemName: "",
      itemName: "",
      published: "",
      imageurl: "",
      itemDescription: "",
      createdBy: "",
    });
  };

  render() {
    let { characterSheet, itemsCannon } = this.props;
    let { currentItemName } = this.state;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Add New Item</button>
            {on && (
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Select Item:</label>
                  <select
                    required
                    name="currentItemName"
                    value={currentItemName}
                    onChange={this.onChange}
                  >
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
