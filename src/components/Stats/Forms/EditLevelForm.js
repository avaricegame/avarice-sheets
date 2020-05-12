import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class EditLevelForm extends React.Component {
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
            <button onClick={toggle}>Edit Level</button>
            {on && (
              <form id="editLevelForm">
              <fieldset>
                <button>-</button>
                <input type="number" value="4" />
                <button>+</button>
    
                <input type="submit" className="submit-button" value="Save Level" />
              </fieldset>
            </form>
            )}
          </div>
        )}
      </Toggle>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default EditLevelForm;
