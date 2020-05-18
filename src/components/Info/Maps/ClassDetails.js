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

          <p>All the information on the character's class goes here.</p>
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default ClassDetails;
