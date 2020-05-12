import React, { Component } from "react";

class Armour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        <h2>Custom Armour</h2>
          {characterSheet["inventory"]["customArmour"].map(function (armour) {
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
              return x;
            })}
            <h2>Normal Armour</h2>
            {characterSheet["inventory"]["armour"].map(function (armour) {
              let y = [
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
              return y;
            })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Armour;