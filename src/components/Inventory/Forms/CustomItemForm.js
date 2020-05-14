import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      itemName,
      published,
      imageurl,
      itemDescription,
      createdBy,
    } = this.state;

    if (published === "Yes") {
      fetch("http://localhost:2890/createitempublish", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemName,
          published,
          imageurl,
          itemDescription,
          createdBy,
        }),
      });
    }

    fetch("http://localhost:2890/createitem", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemName,
        published,
        imageurl,
        itemDescription,
      }),
    });
  };

  render() {
    const {
      itemName,
      published,
      imageurl,
      itemDescription,
      createdBy,
    } = this.state;

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Create Custom Item</button>
            {on && (
              <form id="addNewCustomItemForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Item Name:</label>
                  <input
                    required
                    name="itemName"
                    value={itemName}
                    onChange={this.onChange}
                    type="text"
                  />
                  <label>Description:</label>
                  <textarea
                    required
                    name="itemDescription"
                    value={itemDescription}
                    onChange={this.onChange}
                  ></textarea>
                  <label>Publish?</label>
                  <select
                    required
                    name="published"
                    value={published}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
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

export default CustomItemForm;
