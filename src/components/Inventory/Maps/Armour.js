import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class Armour extends React.Component {
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
    const {characterSheet} = this.state;

    return (
      <React.Fragment>
          {/* {
            //characterSheet[0]['inventory']['weapons'].map(function(weapon) {
            armour.map(function (armour) {
              let x = [
                <h5>{armour.bodyArea}</h5>,
                <h6>{armour.name}</h6>,
                <ul>
                  <li>Requirements: {armour.requirements}</li>

                  <li>Hit Points: {armour.modifiers.hp}</li>
                  <li>Speed: {armour.modifiers.speed}</li>
                  <li>Strength: {armour.modifiers.strength}</li>
                  <li>Dexterity/Reflex: {armour.modifiers.dexterityReflex}</li>
                  <li>
                    Constitution/Fortitude:{" "}
                    {armour.modifiers.constitutionFortitude}
                  </li>
                  <li>Intelligence: {armour.modifiers.intelligence}</li>
                  <li>Charisma: {armour.modifiers.charisma}</li>
                  <li>Perception: {armour.modifiers.perception}</li>
                  <li>Stealth: {armour.modifiers.stealth}</li>
                  <li>Ranged Accuracy: {armour.modifiers.rangedAccuracy}</li>
                  <li>Melee Accuracy: {armour.modifiers.meleeAccuracy}</li>

                  <li>Magical Abilities:</li>

                  <li>
                    <strong>Description:</strong> {armour.description}
                  </li>
                </ul>,
              ];

              // console.log(x)

              // console.log(armour)
              // console.log(armour.name)

              return x;
            })
          } */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Armour;