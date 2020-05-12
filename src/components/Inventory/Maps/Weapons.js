import React, { Component } from "react";

class Weapons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { characterSheet } = this.props;
    return (
      <React.Fragment>
        <h2>Custom Weapons</h2>
        {characterSheet["inventory"]["customWeapons"].map(function (weapon) {
          let x = [
            <h5>{weapon.rangedMelee} Weapon Name: </h5>,
            <h6>{weapon.name}</h6>,
            <ul>
              <li>Range: {weapon.range}</li>
              <li>Proficiency: {weapon.proficiency}</li>
              <li>Requirements: {weapon.requirements}</li>
              <li>Weapon Type: {weapon.weaponType}</li>
              <li>Ability Bonus: {weapon.abilityBonus}</li>
              <li>Damage: {weapon.damage}</li>
              <li>Uses: {weapon.uses}</li>
              <li>Critical: {weapon.critical}</li>
              <li>Magical Abilities:</li>

              <li>
                <strong>Description:</strong> {weapon.description}
              </li>
            </ul>,
          ];
          return x;
        })}
        <h2>Normal Weapons</h2>
        {characterSheet["inventory"]["weapons"].map(function (weapon) {
          let y = [
            <h5>{weapon.rangedMelee} Weapon Name: </h5>,
            <h6>{weapon.name}</h6>,
            <ul>
              <li>Range: {weapon.range}</li>
              <li>Proficiency: {weapon.proficiency}</li>
              <li>Requirements: {weapon.requirements}</li>
              <li>Weapon Type: {weapon.weaponType}</li>
              <li>Ability Bonus: {weapon.abilityBonus}</li>
              <li>Damage: {weapon.damage}</li>
              <li>Uses: {weapon.uses}</li>
              <li>Critical: {weapon.critical}</li>
              <li>Magical Abilities:</li>

              <li>
                <strong>Description:</strong> {weapon.description}
              </li>
            </ul>,
          ];
          return y;
        })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Weapons;
