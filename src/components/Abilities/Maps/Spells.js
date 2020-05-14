import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

let spellListName;
let correctSpellList;

class Spells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { spells, characterSheet } = this.props;

    let charactersClass = characterSheet.class;

    if (charactersClass === "Apa") {
      spellListName = "apaspells";
      correctSpellList = spells[0].apaspells;
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    return (
      <React.Fragment>
        {correctSpellList.map(function (spell) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{spell.spellName}</h6>
                    <h5 onClick={toggle}>Spell Points: {spell.spellPoints}</h5>
                    {on && (
                      <p className="margin-bottom">
                        <strong>Details: </strong>
                        {spell.spellDescription}
                      </p>
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

export default Spells;
