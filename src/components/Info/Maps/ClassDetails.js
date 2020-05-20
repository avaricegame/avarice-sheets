import React, { Component } from "react";

let charactersClass;
let correctClass = [];

class ClassDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { classes, characterSheet } = this.props;

    let charactersClass = characterSheet.class;

    if (charactersClass === "Apa") {
      correctClass = classes[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    return (
      <React.Fragment>
        <div className="weapon-div">
          <h6>Character Class</h6>
          <h5>Class: {correctClass.name}</h5>
    <p><strong>Quote:</strong>
    <em>{correctClass.quote}</em></p>
<table>
  <tr>
    <td>Class Name:</td>
    <td>{correctClass.name}</td>
  </tr>
  <tr>
    <td>Common Name:</td>
    <td>{correctClass.commonName}</td>
  </tr>
  <tr>
    <td>Special Skills:</td>
    <td><em>See Abilities Tab</em></td>
  </tr>
  <tr>
    <td>Spells List:</td>
    <td><em>See Abilities Tab</em></td>
  </tr>
</table>
<table>
            <tr>
              <td><strong>Ability Scores:</strong></td>
            </tr>
          <tr>
                  <td>Physique:</td>
                  <td>{correctClass.abilityModifiers.physique}</td>
                </tr>
                <tr>
                  <td>Reflex:</td>
                  <td>{correctClass.abilityModifiers.reflex}</td>
                </tr>
                <tr>
                  <td>Intelligence:</td>
                  <td>{correctClass.abilityModifiers.intelligence}</td>
                </tr>
                <tr>
                  <td>Charisma:</td>
                  <td>{correctClass.abilityModifiers.charisma}</td>
                </tr>
          </table>
</div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default ClassDetails;
