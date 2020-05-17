import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

let charactersClass;
let correctAbilities;

class ClassAbilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { classes, characterSheet } = this.props;

    let charactersClass = characterSheet.class;

    if (charactersClass === "Apa") {
      correctAbilities = classes[0].abilities;
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    return (
      <React.Fragment>
        {correctAbilities.map(function (ability) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{ability.name}</h6>
                    <h5 onClick={toggle}>Available at Level {ability.level}</h5>
                    {on && (
                      <React.Fragment>
                        <p onClick={toggle} className="cursor">
                          <strong>Details: </strong>
                          {ability.description}
                        </p>
                        <h6 className="delete-button gray">Delete</h6>
                      </React.Fragment>
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

export default ClassAbilities;
