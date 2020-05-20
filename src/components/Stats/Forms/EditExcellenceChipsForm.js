import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class EditExcellenceChipsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excellenceChips: 0,
    };
  }

    onChange = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };

  onSubmit = (e) => {
    e.preventDefault();
    const {} = this.state;

    this.props.editExcellenceChips(this.state.excellenceChips)
    this.setState({excellenceChips: ""})

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  render() {
    const { excellenceChips } = this.state;
    let {
      editExcellenceChips,
    } = this.props
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Edit Excelence Chips</button>
            {on && (
              <form id="editExcellenceChipsForm" onSubmit={this.onSubmit}>
              <fieldset>
                <button>-</button>
                <input type="number" onChange={this.onChange} name="excellenceChips" value={excellenceChips} />
                <button>+</button>
    
                <input
                  type="submit"
                  className="submit-button"
                  value="Save Changes"
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

export default EditExcellenceChipsForm;
