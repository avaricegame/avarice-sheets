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
            <strong>Description:</strong>
            {correctRace.description.map(function (paragraph) {
              let x = [<p>{paragraph}</p>];
              return x;
            })}
          </p>
          <table>
            <tr>
              <td>Race Name:</td>
              <td>{correctRace.name}</td>
            </tr>
            <tr>
              <td>Common Name:</td>
              <td>{correctRace.commonName}</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{correctRace.location}</td>
            </tr>
            <tr>
              <td>Climate:</td>
              <td>{correctRace.climate}</td>
            </tr>
            <tr>
              <td>Size:</td>
              <td>{correctRace.size}</td>
            </tr>
            <tr>
              <td>Lifespan:</td>
              <td>{correctRace.lifespan}</td>
            </tr>
            <tr>
              <td>Personality:</td>
              <td>{correctRace.personality}</td>
            </tr>
            <tr>
              <td>Friends:</td>
              <td>{correctRace.friends}</td>
            </tr>
            <tr>
              <td>Enemies:</td>
              <td>{correctRace.enemies}</td>
            </tr>
            <tr>
              <td>Special Traits:</td>
              <td>
                <em>See Abilities Tab</em>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td><strong>Ability Scores:</strong></td>
            </tr>
          <tr>
                  <td>Strength:</td>
                  <td>{correctRace.abilities.strength}</td>
                </tr>
                <tr>
                  <td>Dexterity:</td>
                  <td>{correctRace.abilities.dexterity}</td>
                </tr>
                <tr>
                  <td>Constitution:</td>
                  <td>{correctRace.abilities.constitution}</td>
                </tr>
                <tr>
                  <td>Intelligence:</td>
                  <td>{correctRace.abilities.intelligence}</td>
                </tr>
                <tr>
                  <td>Charisma:</td>
                  <td>{correctRace.abilities.charisma}</td>
                </tr>
          </table>
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default RaceDetails;
