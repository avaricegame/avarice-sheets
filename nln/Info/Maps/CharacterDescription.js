import React from "react";

class CharacterDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        <div className="weapon-div">
          <h6>Character Description</h6>
          <h5>For: {characterSheet.characterName}</h5>
          <table>
            <tr>
              <td>Age:</td>
              <td>{characterSheet.characterDescription.age} years old</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{characterSheet.characterDescription.weight} lbs.</td>
            </tr>
            <tr>
              <td>Height:</td>
              <td>{characterSheet.characterDescription.height} ft.</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{characterSheet.characterDescription.gender}</td>
            </tr>
            <tr>
              <td>Skin Tone:</td>
              <td>{characterSheet.characterDescription.skinTone}</td>
            </tr>
            <tr>
              <td>Eye Color:</td>
              <td>{characterSheet.characterDescription.eyeColor}</td>
            </tr>
            <tr>
              <td>Hair Color:</td>
              <td>{characterSheet.characterDescription.hairColor}</td>
            </tr>
            <tr>
              <td>Hair Length:</td>
              <td>{characterSheet.characterDescription.hairLength}</td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CharacterDescription;
