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
            <th>Ability</th>
            <th>Total</th>
            <th>Level Ups</th>
            <th>Equipment</th>
            <th>Temporary</th>
            <th>Misc.</th>
            <th>Race/Class</th>
          </tr>
          <tr>
            <td>Strength (STR)</td>
            <td>
              <span>{strength}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.strengthLevelUps}
              />
            </td>
            <td>
              <span>{astr}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.strengthTempMod}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.strengthMiscMod}
              />
            </td>
            <td>
              <span>
                {races[0].abilities.strength +
                  classes[0].abilityModifiers.strength}
              </span>
            </td>
          </tr>
          <tr>
            <td>Dexterity (DEX)</td>
            <td>
              <span>{dexterity}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.dexterityLevelUps}
              />
            </td>
            <td>
              <span>{adexref}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.dexterityTempMod}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.dexterityMiscMod}
              />
            </td>
            <td>
              <span>
                {races[0].abilities.dexterity +
                  classes[0].abilityModifiers.dexterity}
              </span>
            </td>
          </tr>
          <tr>
            <td>Constitution (CON)</td>
            <td>
              <span>{constitution}</span>
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.constitutionLevelUps
                }
              />
            </td>
            <td>
              <span>{aconfor}</span>
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.constitutionTempMod
                }
              />
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.constitutionMiscMod
                }
              />
            </td>
            <td>
              <span>
                {races[0].abilities.constitution +
                  classes[0].abilityModifiers.constitution}
              </span>
            </td>
          </tr>
          <tr>
            <td>Intelligence (INT)</td>
            <td>
              <span>{intelligence}</span>
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.intelligenceLevelUps
                }
              />
            </td>
            <td>
              <span>{aint}</span>
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.intelligenceTempMod
                }
              />
            </td>
            <td>
              <input
                type="number"
                value={
                  characterSheet[0].stats.abilityScores.intelligenceMiscMod
                }
              />
            </td>
            <td>
              <span>
                {races[0].abilities.intelligence +
                  classes[0].abilityModifiers.intelligence}
              </span>
            </td>
          </tr>
          <tr>
            <td>Charisma (CHA)</td>
            <td>
              <span>{charisma}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.charismaLevelUps}
              />
            </td>
            <td>
              <span>{acha}</span>
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.charismaTempMod}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.abilityScores.charismaMiscMod}
              />
            </td>
            <td>
              <span>
                {races[0].abilities.charisma +
                  classes[0].abilityModifiers.charisma}
              </span>
            </td>
          </tr>
        </table> */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;