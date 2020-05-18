import React, { Component } from "react";

let charactersRace;
let correctRace = [];

class RaceDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { races, characterSheet } = this.props;

    let charactersRace = characterSheet.race;

    if (charactersRace === "Bruttu") {
      correctRace = races[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    return (
      <React.Fragment>
        <div className="weapon-div">
          <h6>Character Race</h6>
          <h5>Race: {correctRace.name}</h5>
          <p>
            Character Race: <span>{correctRace.name}</span>
          </p>

          <p>All the information on the character's race goes here.</p>
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default RaceDetails;
