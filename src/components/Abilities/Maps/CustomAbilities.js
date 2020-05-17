import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet,  customAbilities, deleteCustomAbility, } = this.props;

    return (
      <React.Fragment>
        {customAbilities.map(function (ability) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{ability.name}</h6>
            <h5 onClick={toggle}>Available at Level: {ability.level}</h5>
            <p onClick={toggle} className="cursor"><strong>Details: </strong>{ability.description}</p>
                    {on && (
                      <h6 onClick={deleteCustomAbility.bind(this, ability.id)} className="delete-button">Delete</h6>
                    )}
                  </div>
                )}
              </Toggle>
            
            
            </div>,
          ];
          return x;
        })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CustomAbilities;
