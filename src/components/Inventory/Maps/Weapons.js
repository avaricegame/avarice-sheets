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
            <p><strong>Description:</strong> {weapon.description}</p>,
            <p><strong>Requirements:</strong> {weapon.requirements}</p>,
            <p><strong>Stats:</strong></p>,
            <table className="inventory-table">
              <tr>
                <td>Range</td>
                <td>{weapon.range}</td>
              </tr>
              <tr>
                <td>Proficiency</td>
                <td>{weapon.proficiency}</td>
              </tr>
              <tr>
                <td>Weapon Type</td>
                <td>{weapon.weaponType}</td>
              </tr>
              <tr>
                <td>Ability Bonus</td>
                <td>{weapon.abilityBonus}</td>
              </tr>
              <tr>
                <td>Damage</td>
                <td>{weapon.damage}</td>
              </tr>
              <tr>
                <td>Uses</td>
                <td>{weapon.uses}</td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>{weapon.critical}</td>
              </tr>
            </table>
              // <li>Magical Abilities:</li>
          ];
          return x;
        })}
        <h2>Normal Weapons</h2>
        {characterSheet["inventory"]["weapons"].map(function (weapon) {
          let y = [
            <h5>{weapon.rangedMelee} Weapon Name: </h5>,
            <h6>{weapon.name}</h6>,
            <p><strong>Description:</strong> {weapon.description}</p>,
            <p><strong>Requirements:</strong> {weapon.requirements}</p>,
            <p><strong>Stats:</strong></p>,
            <table className="inventory-table">
              <tr>
                <td>Range</td>
                <td>{weapon.range}</td>
              </tr>
              <tr>
                <td>Proficiency</td>
                <td>{weapon.proficiency}</td>
              </tr>
              <tr>
                <td>Weapon Type</td>
                <td>{weapon.weaponType}</td>
              </tr>
              <tr>
                <td>Ability Bonus</td>
                <td>{weapon.abilityBonus}</td>
              </tr>
              <tr>
                <td>Damage</td>
                <td>{weapon.damage}</td>
              </tr>
              <tr>
                <td>Uses</td>
                <td>{weapon.uses}</td>
              </tr>
              <tr>
                <td>Critical</td>
                <td>{weapon.critical}</td>
              </tr>
            </table>
              // <li>Magical Abilities:</li>
          ];
          return y;
        })}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Weapons;
