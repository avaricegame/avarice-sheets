import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class Weapons extends React.Component {
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
                characterSheet[0]['inventory']['customWeapons'].map(function (weapon) {
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
          
                        // console.log(x)
          
                        // console.log(weapon)
                        // console.log(weapon.name)
          
                        return x;
                      })
                    } */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Weapons;
