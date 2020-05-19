import React from "react";

let physiqueEquip = 2
let reflexEquip = 2
let intelligenceEquip = 2
let charismaEquip = 2

let correctClass = [];
let correctRace = [];

class AbilityScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physiqueLevelUps: 0,
      physiqueTemp: 0,
      physiqueMisc: 0,
      reflexLevelUps: 0,
      reflexTemp: 0,
      reflexMisc: 0,
      intelligenceLevelUps: 0,
      intelligenceTemp: 0,
      intelligenceMisc: 0,
      charismaLevelUps: 0,
      charismaTemp: 0,
      charismaMisc: 0,
    };
  }

    onChange = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    const { 
      physiqueLevelUps,
      physiqueTemp,
      physiqueMisc,
      reflexLevelUps,
      reflexTemp,
      reflexMisc,
      intelligenceLevelUps,
      intelligenceTemp,
      intelligenceMisc,
      charismaLevelUps,
      charismaTemp,
      charismaMisc,
    } = this.state;

    let { classes, races, characterSheet, phyTotal, refTotal, intTotal, chaTotal } = this.props;

    let charactersClass = characterSheet.class;
    let charactersRace = characterSheet.race;

    if (charactersClass === "Apa") {
      correctClass = classes[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS


    if (charactersRace === "Bruttu") {
      correctRace = races[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS

    let physiqueRaceClassMod = parseInt(correctRace.abilities.physique) + parseInt(correctClass.abilityModifiers.physique)
    let reflexRaceClassMod = parseInt(correctRace.abilities.reflex) + parseInt(correctClass.abilityModifiers.reflex)
    let intelligenceRaceClassMod = parseInt(correctRace.abilities.intelligence) + parseInt(correctClass.abilityModifiers.intelligence)
    let charismaRaceClassMod = parseInt(correctRace.abilities.charisma) + parseInt(correctClass.abilityModifiers.charisma)

    phyTotal = (parseInt(physiqueRaceClassMod) + parseInt(physiqueLevelUps) + 5) + parseInt(physiqueEquip) + parseInt(physiqueTemp) + parseInt(physiqueMisc)
    refTotal = (parseInt(reflexRaceClassMod) + parseInt(reflexLevelUps) + 5) + parseInt(reflexEquip) + parseInt(reflexTemp) + parseInt(reflexMisc)
    intTotal = (parseInt(intelligenceRaceClassMod) + parseInt(intelligenceLevelUps) + 5) + parseInt(intelligenceEquip) + parseInt(intelligenceTemp) + parseInt(intelligenceMisc)
    chaTotal = (parseInt(charismaRaceClassMod) + parseInt(charismaLevelUps) + 5) + parseInt(charismaEquip) + parseInt(charismaTemp) + parseInt(charismaMisc)

    console.log(physiqueRaceClassMod, physiqueLevelUps, physiqueEquip, physiqueTemp, physiqueMisc, "LOOK OVER HERE")

    return (
      <React.Fragment>
        <table>
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
            <td>Physique (PHY)</td>
            <td>
              <span>{phyTotal}</span>
            </td>
            <td>
              <input
                type="number"
                name="physiqueLevelUps"
                value={physiqueLevelUps}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>{physiqueEquip}</span>
            </td>
            <td>
              <input
                type="number"
                name="physiqueTemp"
                value={physiqueTemp}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="physiqueMisc"
                value={physiqueMisc}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>
                {physiqueRaceClassMod}
              </span>
            </td>
          </tr>
          <tr>
            <td>Intelligence (INT)</td>
            <td>
              <span>{intTotal}</span>
            </td>
            <td>
              <input
                type="number"
                name="intelligenceLevelUps"
                value={intelligenceLevelUps}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>{intelligenceEquip}</span>
            </td>
            <td>
              <input
               type="number"
               name="intelligenceTemp"
               value={intelligenceTemp}
               onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="intelligenceMisc"
                value={intelligenceMisc}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>
                {intelligenceRaceClassMod}
              </span>
            </td>
          </tr>
          <tr>
            <td>Reflex (REF)</td>
            <td>
              <span>{refTotal}</span>
            </td>
            <td>
              <input
                type="number"
                name="reflexLevelUps"
                value={reflexLevelUps}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>{reflexEquip}</span>
            </td>
            <td>
              <input
                type="number"
                name="reflexTemp"
                value={reflexTemp}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="reflexMisc"
                value={reflexMisc}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>
                {reflexRaceClassMod}
              </span>
            </td>
          </tr>
          <tr>
            <td>Charisma (CHA)</td>
            <td>
              <span>{chaTotal}</span>
            </td>
            <td>
              <input
                type="number"
                name="charismaLevelUps"
                value={charismaLevelUps}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>{charismaEquip}</span>
            </td>
            <td>
              <input
                type="number"
                name="charismaTemp"
                value={charismaTemp}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="charismaMisc"
                value={charismaMisc}
                onChange={this.onChange}
              />
            </td>
            <td>
              <span>
                {charismaRaceClassMod}
              </span>
            </td>
          </tr>
           
        </table>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default AbilityScores;