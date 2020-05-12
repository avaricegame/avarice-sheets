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
            <th>Stat</th>
            <th>Total</th>
            <th>Ability Modifier</th>
            <th>Equipment Modifier</th>
            <th>Temporary Modifier</th>
            <th>Miscellanious Modifier</th>
          </tr>
          <tr>
            <td>Speed</td>
            <td>
              <span>
                {((dexterity - adexref - 5) / 3 || 1) +
                  asp +
                  characterSheet[0].stats.importantStats.speedTempMod +
                  characterSheet[0].stats.importantStats.speedMiscMod || 2}
              </span>
            </td>
            <td>
              <span>{(dexterity - adexref - 5) / 3 || 1}</span>
            </td>
            <td>
              <span>{asp}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.speedTempMod}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.speedMiscMod}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Perception</td>
            <td>
              <span>
                {(intelligence / 5 || 1) +
                  aper +
                  characterSheet[0].stats.importantStats.perceptionTempMod +
                  characterSheet[0].stats.importantStats.perceptionMiscMod}
              </span>
            </td>
            <td>
              <span>{intelligence / 5 || 1}</span>
            </td>
            <td>
              <span>{aper}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.perceptionTempMod
                  }
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.perceptionMiscMod
                  }
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Reflex (DEX)</td>
            <td>
              <span>
                {((dexterity - adexref) / 5 || 1) +
                  adexref +
                  characterSheet[0].stats.importantStats.reflexTempMod +
                  characterSheet[0].stats.importantStats.reflexMiscMod}
              </span>
            </td>
            <td>
              <span>{(dexterity - adexref) / 5 || 1}</span>
            </td>
            <td>
              <span>{adexref}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.reflexTempMod}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.reflexMiscMod}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Fortitude (CON)</td>
            <td>
              <span>
                {((constitution - aconfor) / 5 || 1) +
                  aconfor +
                  characterSheet[0].stats.importantStats.fortitudeTempMod +
                  characterSheet[0].stats.importantStats.fortitudeMiscMod}
              </span>
            </td>
            <td>
              <span>{(constitution - aconfor) / 5 || 1}</span>
            </td>
            <td>
              <span>{aconfor}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.fortitudeTempMod
                  }
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.fortitudeMiscMod
                  }
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Stealth</td>
            <td>
              <span>
                {characterSheet[0].stats.skills.stealthMisc +
                  (classes[0].skills.stealth === false &&
                  characterSheet[0].stats.skills.stealth === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.stealthRanks * 1.25 +
                  astl +
                  characterSheet[0].stats.importantStats.stealthTempMod +
                  characterSheet[0].stats.importantStats.stealthMiscMod}
              </span>
            </td>
            <td>
              <span>
                {characterSheet[0].stats.skills.stealthMisc +
                  (classes[0].skills.stealth === false &&
                  characterSheet[0].stats.skills.stealth === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.stealthRanks * 1.25}
              </span>
            </td>
            <td>
              <span>{astl}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.stealthTempMod}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.stealthMiscMod}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Ranged Accuracy</td>
            <td>
              <span>
                {characterSheet[0].stats.skills.rangedAccuracyMisc +
                  (classes[0].skills.rangedAccuracy === false &&
                  characterSheet[0].stats.skills.rangedAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.rangedAccuracyRanks * 1.25 +
                  ara +
                  characterSheet[0].stats.importantStats.rangedAccTempMod +
                  characterSheet[0].stats.importantStats.rangedAccMiscMod}
              </span>
            </td>
            <td>
              <span>
                {characterSheet[0].stats.skills.rangedAccuracyMisc +
                  (classes[0].skills.rangedAccuracy === false &&
                  characterSheet[0].stats.skills.rangedAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.rangedAccuracyRanks * 1.25}
              </span>
            </td>
            <td>
              <span>{ara}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.rangedAccTempMod
                  }
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={
                    characterSheet[0].stats.importantStats.rangedAccMiscMod
                  }
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Melee Accuracy</td>
            <td>
              <span>
                {characterSheet[0].stats.skills.meleeAccuracyMisc +
                  (classes[0].skills.meleeAccuracy === false &&
                  characterSheet[0].stats.skills.meleeAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.meleeAccuracyRanks * 1.25 +
                  ama +
                  characterSheet[0].stats.importantStats.meleeAccTempMod +
                  characterSheet[0].stats.importantStats.meleeAccMiscMod}
              </span>
            </td>
            <td>
              <span>
                {characterSheet[0].stats.skills.meleeAccuracyMisc +
                  (classes[0].skills.meleeAccuracy === false &&
                  characterSheet[0].stats.skills.meleeAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.meleeAccuracyRanks * 1.25}
              </span>
            </td>
            <td>
              <span>{ama}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.meleeAccTempMod}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  value={characterSheet[0].stats.importantStats.meleeAccMiscMod}
                />
              </span>
            </td>
          </tr>
        </table> */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;