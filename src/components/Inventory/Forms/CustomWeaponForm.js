import React from "react";
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
      createdBy: "",
      published: "",
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.weaponName);
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
      published,
      createdBy,
    } = this.state;
    
    this.props.addWeapon(
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
      published,
      createdBy
    );
    this.setState({
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
      createdBy: "",
      published: "",
    });

    // if (published === "Yes") {
    //   fetch("http://localhost:2890/createweaponpublish", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       weaponName,
    //       rangedMelee,
    //       imageurl,
    //       range,
    //       proficiency,
    //       weaponType,
    //       requirements,
    //       abilityBonus,
    //       damage,
    //       uses,
    //       critical,
    //       magicalAbilities,
    //       description,
    //       published,
    //       createdBy,
    //     }),
    //   });
    // }

    // fetch("http://localhost:2890/createweapon", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     weaponName,
    //     rangedMelee,
    //     imageurl,
    //     range,
    //     proficiency,
    //     weaponType,
    //     requirements,
    //     abilityBonus,
    //     damage,
    //     uses,
    //     critical,
    //     magicalAbilities,
    //     description,
    //     published,
    //     createdBy,
    //   }),
    // });
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
      published,
      createdBy,
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
                  <h6 className="edit-h6">Custom Armour Form</h6>
                  <label>Weapon Name:</label>
                  <input
                    required
                    name="weaponName"
                    type="text"
                    value={weaponName}
                    onChange={this.onChange}
                  />
                  <label>Ranged or Melee?</label>
                  <select
                    required
                    name="rangedMelee"
                    value={rangedMelee}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Ranged</option>
                    <option>Melee</option>
                  </select>
                  <label>Range:</label>
                  <select
                    required
                    name="range"
                    value={range}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>0</option>
                    <option>0-1</option>
                    <option>1</option>
                    <option>1-2</option>
                    <option>2</option>
                    <option>2-4</option>
                    <option>1-5</option>
                    <option>4-5</option>
                    <option>2-7</option>
                    <option>3-10</option>
                  </select>
                  <label>Weapon Type:</label>
                  <select
                    required
                    name="weaponType"
                    value={weaponType}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Improvised</option>
                    <option>Normal</option>
                    <option>Unarmed</option>
                    <option>Heavy</option>
                    <option>Magic</option>
                  </select>
                  <label>Ability Bonus:</label>
                  <select
                    required
                    name="abilityBonus"
                    value={abilityBonus}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>PHY</option>
                    <option>REF</option>
                    <option>INT</option>
                    <option>CHA</option>
                    <option>PHY/REF</option>
                    <option>PHY/INT</option>
                    <option>PHY/CHA</option>
                    <option>REF/INT</option>
                    <option>REF/CHA</option>
                    <option>INT/CHA</option>
                    <option>BALANCED</option>
                  </select>
                  <label>Uses:</label>
                  <select
                    required
                    name="uses"
                    value={uses}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Unlimited</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                  </select>
                  <label>Damage:</label>
                  <select
                    required
                    name="damage"
                    value={damage}
                    onChange={this.onChange}
                  >
                    <option></option>
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
                    required
                    name="critical"
                    value={critical}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>20</option>
                    <option>19-20</option>
                    <option>18-20</option>
                    <option>17-20</option>
                    <option>16-20</option>
                    <option>15-20</option>
                  </select>
                  <label>Description:</label>
                  <textarea
                    required
                    name="description"
                    value={description}
                    onChange={this.onChange}
                  ></textarea>
                  <label>Publish?</label>
                  <select
                    required
                    name="published"
                    value={published}
                    onChange={this.onChange}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
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
