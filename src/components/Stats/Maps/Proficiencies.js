import React, { Component } from "react";

class LevelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   onChange = (e) => {
  //     console.log(e.target.value);
  //     console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  render() {
    
    let {
      skillsExplosives,

        skillsUseMagicDevice,

        skillsMedicine,
 
        skillsTechnology,

    } = this.props

    console.log(skillsExplosives, "LOOK OVER HERE TOFR  THD SAJFLDSKFJ :LFH")

    skillsExplosives = Math.floor(parseInt(skillsExplosives) / 5)
    skillsMedicine = Math.floor(parseInt(skillsMedicine) / 5)
    skillsTechnology = Math.floor(parseInt(skillsTechnology) / 5)
    skillsUseMagicDevice = Math.floor(parseInt(skillsUseMagicDevice) / 5)


    return (
      <React.Fragment>
        <div className="weapon-div">
        <h6>Ability Proficiencies</h6>
        <table>
          <tr>
            <th>Proficiency</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Tech</td>
            <td>
              {skillsTechnology}
            </td>
          </tr>
          <tr>
            <td>Explosive</td>
            <td>
              {skillsExplosives}
            </td>
          </tr>
          <tr>
            <td>Magic</td>
            <td>
              {skillsUseMagicDevice}
            </td>
          </tr>
          <tr>
            <td>Poison</td>
            <td>
              {skillsMedicine}
            </td>
          </tr>
</table>
</div>
<div className="weapon-div">
        <h6>Weapon Proficiencies</h6>
</div>
        {/* 
        <table>
          <tr>
            <th>Proficiency</th>
            <th>Unarmed</th>
            <th>Improvised Weapon</th>
            <th>Normal / Unique Weapon</th>
          </tr>
          <tr>
            <td>Dexterity Proficiency</td>
            <td>
              {Math.ceil(
                ((dexterity - 5) / 4 + characterSheet[0].stats.level / 4) / 4
              )}
            </td>
            <td>
              {Math.ceil(
                ((dexterity - 5) / 4 + characterSheet[0].stats.level / 4) / 2
              )}
            </td>
            <td>
              {Math.ceil(
                (dexterity - 5) / 4 + characterSheet[0].stats.level / 4
              )}
            </td>
          </tr>
          <tr>
            <td>Strength Proficiency</td>
            <td>
              {Math.ceil(
                ((strength - 5) / 3 + characterSheet[0].stats.level / 3) / 4
              )}
            </td>
            <td>
              {Math.ceil(
                ((strength - 5) / 3 + characterSheet[0].stats.level / 3) / 2
              )}
            </td>
            <td>
              {Math.ceil(
                (strength - 5) / 3 + characterSheet[0].stats.level / 3
              )}
            </td>
          </tr>
          <tr>
            <td>Mixed (Dexterity/Strength) Proficiency</td>
            <td>
              {Math.ceil(
                ((strength - 5) / 3 +
                  characterSheet[0].stats.level / 3 +
                  ((dexterity - 5) / 4 + characterSheet[0].stats.level / 4)) /
                  6
              )}
            </td>
            <td>
              {Math.ceil(
                ((strength - 5) / 3 +
                  characterSheet[0].stats.level / 3 +
                  ((dexterity - 5) / 4 + characterSheet[0].stats.level / 4)) /
                  3
              )}
            </td>
            <td>
              {Math.ceil(
                ((strength - 5) / 3 +
                  characterSheet[0].stats.level / 3 +
                  ((dexterity - 5) / 4 + characterSheet[0].stats.level / 4)) /
                  1.5
              )}
            </td>
          </tr>
        </table> */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;