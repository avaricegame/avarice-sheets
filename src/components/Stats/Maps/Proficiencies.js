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
    const { characterSheet } = this.state;

    return (
      <React.Fragment>
        {/* <table>
          <tr>
            <th>Proficiency</th>
            <th>Unarmed</th>
            <th>Improvised Weapon</th>
            <th>Normal / Unique Weapon</th>
          </tr>
          <tr>
            <td>Tech Item Proficiency</td>
            <td>-</td>
            <td>-</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.technologyMisc +
                  (classes[0].skills.technology === false &&
                  characterSheet[0].stats.skills.technology === false
                    ? 0
                    : intelligence * 0.25) +
                  (characterSheet[0].stats.skills.technologyRanks * 1.25) / 3.5
              )}
            </td>
          </tr>
          <tr>
            <td>Explosive Proficiency</td>
            <td>-</td>
            <td>-</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.explosivesMisc +
                  (classes[0].skills.explosives === false &&
                  characterSheet[0].stats.skills.explosives === false
                    ? 0
                    : intelligence * 0.25) +
                  (characterSheet[0].stats.skills.explosivesRanks * 1.25) / 3.5
              )}
            </td>
          </tr>
          <tr>
            <td>Magic Item Proficiency</td>
            <td>-</td>
            <td>-</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.useMagicDeviceMisc +
                  (classes[0].skills.useMagicDevice === false &&
                  characterSheet[0].stats.skills.useMagicDevice === false
                    ? 0
                    : charisma * 0.25) +
                  (characterSheet[0].stats.skills.useMagicDeviceRanks * 1.25) /
                    3.5
              )}
            </td>
          </tr>
          <tr>
            <td>Spellcasting Proficiency</td>
            <td>-</td>
            <td>-</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.spellcraftMisc +
                  (classes[0].skills.spellcraft === false &&
                  characterSheet[0].stats.skills.spellcraft === false
                    ? 0
                    : intelligence * 0.25) +
                  (characterSheet[0].stats.skills.spellcraftRanks * 1.25) / 
                  3.5
              )}
            </td>
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