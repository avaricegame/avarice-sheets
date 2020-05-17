import React from "react";
import Toggle from "../../Toggle/Toggle";

class CustomAbilitiesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      published: "",
      level: 1,
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, description, published } = this.state;
    this.props.addCustomAbility(name, description, published);
    this.setState({
      name: "",
      description: "",
      published: "",
    });
  };

  render() {
    const { name, description, published } = this.state;
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Create New Character Ability</button>
            {on && (
              <form id="customAbilitiesForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <h6 className="edit-h6">Custom Ability Form</h6>
                  <label>Ability Name:</label>
                  <input
                    required
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    type="text"
                  />
                  <label>Description:</label>
                  <textarea
                    required
                    name="description"
                    value={description}
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
                    value="Save New Ability"
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
