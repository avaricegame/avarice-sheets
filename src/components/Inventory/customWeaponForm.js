import React, { Component } from "react";
import Toggle from '../Toggle/Toggle';
import axios from 'axios';


class customWeaponForm extends React.Component {

        constructor () {
                super();
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
                                description: ""
                              }
                        ],
                        description: ""
                }
        }

onChange = (e) => {
this.setState({ [e.target.name]: e.target.value });
}

onSubmit = (e) => {
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
description
} = this.state;

axios.put('/createweapon', {
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
        description        
}).then((result) => {
        alert(result)
});

}

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
        description
} = this.state;
return (


                    
                <form id="addNewWeaponForm">
                            <fieldset>
                                    <label>Weapon Name:</label>
                                    <input name="weaponName" type="text" value={weaponName}
              onChange={this.onChange}/>
                                    <label>Range:</label>
                                    <input name="range" type="number" value={range}
              onChange={this.onChange}/>
                                    <label>Weapon Type:</label>
                                    <select name="weaponType" value={weaponType}
              onChange={this.onChange}>
                                            <option>Improvised</option>
                                            <option>Normal</option>
                                            <option>Unarmed</option>
                                    </select>
                                    <label>Ability Bonus:</label>
                                    <select name="abilityBonus" value={abilityBonus}
              onChange={this.onChange}>
                                            <option>Strength</option>
                                            <option>Dexterity</option>
                                            <option>Mixed</option>
                                    </select>
                                    <label>Uses (1 - 15):</label>
                                    <input name="uses" type="number" value={uses}
              onChange={this.onChange} />
                                    <label>Damage:</label>
                                    <select name="damage" value={damage}
              onChange={this.onChange}>
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
                                    <select name="critical" value={critical}
              onChange={this.onChange}>
                                            <option>20</option>
                                            <option>19-20</option>
                                            <option>18-20</option>
                                            <option>17-20</option>
                                            <option>16-20</option>
                                            <option>15-20</option>
                                    </select>
                                    <input type="submit" className="submit-button" value="Save New Weapon" />
                            </fieldset>
                    </form>
);

}

}

export default customWeaponForm;