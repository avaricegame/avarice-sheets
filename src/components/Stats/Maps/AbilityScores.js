import React from "react";

let correctClass = [];
let correctRace = [];
let phyTotalH
let refTotalH
let intTotalH
let chaTotalH 

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

  componentDidMount = () => {
    this.props.calculatePhyTotal(phyTotalH)
      this.props.calculateRefTotal(refTotalH)
      this.props.calculateIntTotal(intTotalH)
      this.props.calculateChaTotal(chaTotalH)
  }


    onChange = (e) => {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
      this.props.calculatePhyTotal(phyTotalH)
      this.props.calculateRefTotal(refTotalH)
      this.props.calculateIntTotal(intTotalH)
      this.props.calculateChaTotal(chaTotalH)
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

    let { classes, races, characterSheet, phyTotal, refTotal, intTotal, chaTotal, equipmentPhysique, equipmentReflex, equipmentIntelligence, equipmentCharisma } = this.props;

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

    phyTotalH = (parseInt(physiqueRaceClassMod) + parseInt(physiqueLevelUps) + 5) + parseInt(equipmentPhysique) + parseInt(physiqueTemp) + parseInt(physiqueMisc)
    refTotalH = (parseInt(reflexRaceClassMod) + parseInt(reflexLevelUps) + 5) + parseInt(equipmentReflex) + parseInt(reflexTemp) + parseInt(reflexMisc)
    intTotalH = (parseInt(intelligenceRaceClassMod) + parseInt(intelligenceLevelUps) + 5) + parseInt(equipmentIntelligence) + parseInt(intelligenceTemp) + parseInt(intelligenceMisc)
    chaTotalH = (parseInt(charismaRaceClassMod) + parseInt(charismaLevelUps) + 5) + parseInt(equipmentCharisma) + parseInt(charismaTemp) + parseInt(charismaMisc)

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
              <span>{phyTotalH}</span>
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
              <span>{equipmentPhysique}</span>
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
              <span>{intTotalH}</span>
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
              <span>{equipmentIntelligence}</span>
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
              <span>{refTotalH}</span>
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
              <span>{equipmentReflex}</span>
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
              <span>{chaTotalH}</span>
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
              <span>{equipmentCharisma}</span>
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