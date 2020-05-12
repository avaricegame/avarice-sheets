import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class CustomWeaponForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponName: "",
      rangedMelee: "",
      imageurl: "",
      range: "",
      proficiency: 0,
      weaponType: "",
      requirements: "",
      abilityBonus: "",
      damage: "",
      uses: "",
      critical: "",
      magicalAbilities: [
        {
          name: "",
          description: "",
        },
      ],
      description: "",
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    const {
      weaponName,
      rangedMelee,
      imageurl,
      range,
      proficiency,
      weaponType,
      requirements,
      abilityBonus,
      damage,
      uses,
      critical,
      magicalAbilities,
      description,
    } = this.state;

    fetch("http://localhost:2890/createweapon", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weaponName,
        rangedMelee,
        imageurl,
        range,
        proficiency,
        weaponType,
        requirements,
        abilityBonus,
        damage,
        uses,
        critical,
        magicalAbilities,
        description,
      }),
    });
  };

  render() {
    const {
      weaponName,
      rangedMelee,
      imageurl,
      range,
      proficiency,
      weaponType,
      requirements,
      abilityBonus,
      damage,
      uses,
      critical,
      magicalAbilities,
      description,
    } = this.state;

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button id="addNewWeaponButton" onClick={toggle}>
              Create Custom Weapon
            </button>
            {on && (
              <form id="addNewWeaponForm" onSubmit={this.onSubmit}>
                <fieldset>
                  <label>Weapon Name:</label>
                  <input
                    name="weaponName"
                    type="text"
                    value={weaponName}
                    onChange={this.onChange}
                  />
                  <label>Range:</label>
                  <input
                    name="range"
                    type="number"
                    value={range}
                    onChange={this.onChange}
                  />
                  <label>Weapon Type:</label>
                  <select
                    name="weaponType"
                    value={weaponType}
                    onChange={this.onChange}
                  >
                    <option>Improvised</option>
                    <option>Normal</option>
                    <option>Unarmed</option>
                  </select>
                  <label>Ability Bonus:</label>
                  <select
                    name="abilityBonus"
                    value={abilityBonus}
                    onChange={this.onChange}
                  >
                    <option>Strength</option>
                    <option>Dexterity</option>
                    <option>Mixed</option>
                  </select>
                  <label>Uses (1 - 15):</label>
                  <input
                    name="uses"
                    type="number"
                    value={uses}
                    onChange={this.onChange}
                  />
                  <label>Damage:</label>
                  <select name="damage" value={damage} onChange={this.onChange}>
                    <option>D2</option>
                    <option>D4</option>
                    <option>D6</option>
                    <option>D8</option>
                    <option>D10</option>
                    <option>D12</option>
                    <option>D20</option>
                    <option>D100</option>
                  </select>
                  <label>Critical:</label>
                  <select
                    name="critical"
                    value={critical}
                    onChange={this.onChange}
                  >
                    <option>20</option>
                    <option>19-20</option>
                    <option>18-20</option>
                    <option>17-20</option>
                    <option>16-20</option>
                    <option>15-20</option>
                  </select>
                  <input
                    type="submit"
                    className="submit-button"
                    value="Save New Weapon"
                  />
                </fieldset>
              </form>
            )}
          </div>
        )}
      </Toggle>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default CustomWeaponForm;
