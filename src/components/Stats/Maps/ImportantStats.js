import React from "react";

let speedAbility
let perceptionAbility
let reactionAbility
let fortitudeAbility
let stealthAbility

let speedTotalH
let perceptionTotalH
let reactionTotalH
let fortitudeTotalH
let stealthTotalH

class LevelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedTemp: 0,
      speedMisc: 0,
      perceptionTemp: 0,
      perceptionMisc: 0,
      reactionTemp: 0,
      reactionMisc: 0,
      fortitudeTemp: 0,
      fortitudeMisc: 0,
      stealthTemp: 0,
      stealthMisc: 0,
    };
  }

    onChange = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
      this.props.calculateSpeedTotal(speedTotalH)
      this.props.calculatePerceptionTotal(perceptionTotalH)
      this.props.calculateReactionTotal(reactionTotalH)
      this.props.calculateFortitudeTotal(fortitudeTotalH)
      this.props.calculateStealthTotal(stealthTotalH)
    };

  render() {
    const {
      speedTemp,
      speedMisc,
      perceptionTemp,
      perceptionMisc,
      reactionTemp,
      reactionMisc,
      fortitudeTemp,
      fortitudeMisc,
      stealthTemp,
      stealthMisc,
    } = this.state;

    let {
      phyTotal,
      refTotal,
      intTotal, 
      chaTotal,
      skillsStealth,
      equipmentSpeed,
      equipmentPerception,
      equipmentStealth,
      equipmentReflex,
      equipmentPhysique,
    } = this.props

speedAbility = Math.ceil(parseInt(refTotal) * .10)
    perceptionAbility = Math.ceil(parseInt(intTotal) / 5 || 1)
    reactionAbility = Math.ceil(((refTotal - equipmentReflex) / 5) -1)
    fortitudeAbility = Math.ceil(((phyTotal - equipmentPhysique) / 5) -1)
    stealthAbility = skillsStealth

    speedTotalH = parseInt(speedAbility) + parseInt(equipmentSpeed) + parseInt(speedTemp) + parseInt(speedMisc)
    perceptionTotalH = parseInt(perceptionAbility) + parseInt(equipmentPerception) + parseInt(perceptionTemp) + parseInt(perceptionMisc)
    reactionTotalH = parseInt(reactionAbility) + parseInt(equipmentReflex) + parseInt(reactionTemp) + parseInt(reactionMisc)
    fortitudeTotalH = parseInt(fortitudeAbility) + parseInt(equipmentPhysique) + parseInt(fortitudeTemp) + parseInt(fortitudeMisc)
    stealthTotalH = parseInt(stealthAbility) + parseInt(equipmentStealth) + parseInt(stealthTemp) + parseInt(stealthMisc)

    return (
      <React.Fragment>
        <div className="weapon-div">
        <h6>Important Stats Table</h6>
        <table>
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
                {speedTotalH}
              </span>
            </td>
            <td>
              <span>{speedAbility}</span>
            </td>
            <td>
              <span>{equipmentSpeed}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="speedTemp"
                  onChange={this.onChange}
                  value={speedTemp}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="speedMisc"
                  onChange={this.onChange}
                  value={speedMisc}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Perception</td>
            <td>
              <span>
                {perceptionTotalH}
              </span>
            </td>
            <td>
              <span>{perceptionAbility}</span>
            </td>
            <td>
              <span>{equipmentPerception}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="perceptionTemp"
                  onChange={this.onChange}
                  value={perceptionTemp}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="perceptionMisc"
                  onChange={this.onChange}
                  value={perceptionMisc}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Reaction</td>
            <td>
              <span>
                {reactionTotalH}
              </span>
            </td>
            <td>
              <span>{reactionAbility}</span>
            </td>
            <td>
              <span>{equipmentReflex}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="reactionTemp"
                  onChange={this.onChange}
                  value={reactionTemp}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="reactionMisc"
                  onChange={this.onChange}
                  value={reactionMisc}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Fortitude</td>
            <td>
              <span>
                {fortitudeTotalH}
              </span>
            </td>
            <td>
              <span>{fortitudeAbility}</span>
            </td>
            <td>
              <span>{equipmentPhysique}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="fortitudeTemp"
                  onChange={this.onChange}
                  value={fortitudeTemp}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="fortitudeMisc"
                  onChange={this.onChange}
                  value={fortitudeMisc}
                />
              </span>
            </td>
          </tr>
          <tr>
            <td>Stealth</td>
            <td>
              <span>
                {stealthTotalH}
              </span>
            </td>
            <td>
              <span>
                {stealthAbility}
              </span>
            </td>
            <td>
              <span>{equipmentStealth}</span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="stealthTemp"
                  onChange={this.onChange}
                  value={stealthTemp}
                />
              </span>
            </td>
            <td>
              <span>
                <input
                  type="number"
                  name="stealthMisc"
                  onChange={this.onChange}
                  value={stealthMisc}
                />
              </span>
            </td>
          </tr>
        </table>
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;