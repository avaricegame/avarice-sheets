import React from "react";

let correctClass = [];
let stealth, explosives, technology, medicine, useMagicDevice

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acrobaticsRanks: 0,
      acrobaticsMisc: 0,
      accuracyRanks: 0,
      accuracyMisc: 0,
      bluffRanks: 0,
      bluffMisc: 0,
      climbRanks: 0,
      climbMisc: 0,
      diplomacyRanks: 0,
      diplomacyMisc: 0,
      disableDeviceRanks: 0,
      disableDeviceMisc: 0,
      disguiseRanks: 0,
      disguiseMisc: 0,
      escapeArtistRanks: 0,
      escapeArtistMisc: 0,
      explosivesRanks: 0,
      explosivesMisc: 0,
      handleAnimalRanks: 0,
      handleAnimalMisc: 0,
      heavyWeaponsRanks: 0,
      heavyWeaponsMisc: 0,
      medicineRanks: 0,
      medicineMisc: 0,
      intimidateRanks: 0,
      intimidateMisc: 0,
      linguisticsRanks: 0,
      linguisticsMisc: 0,
      lockpickRanks: 0,
      lockpickMisc: 0,
      performRanks: 0,
      performMisc: 0,
      ridePilotRanks: 0,
      ridePilotMisc: 0,
      repairRanks: 0,
      repairMisc: 0,
      technologyRanks: 0,
      technologyMisc: 0,
      senseMotiveRanks: 0,
      senseMotiveMisc: 0,
      sleightOfHandRanks: 0,
      sleightOfHandMisc: 0,
      spellcraftRanks: 0,
      spellcraftMisc: 0,
      stealthRanks: 0,
      stealthMisc: 0,
      survivalRanks: 0,
      survivalMisc: 0,
      swimRanks: 0,
      swimMisc: 0,
      unarmedRanks: 0,
      unarmedMisc: 0,
      useMagicDeviceRanks: 0,
      useMagicDeviceMisc: 0,
    };
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    this.props.calculateSkillsStealth(stealth)
    this.props.calculateSkillsExplosives(explosives)
  this.props.calculateSkillsTechnology(technology)
  this.props.calculateSkillsMagic(useMagicDevice)
  this.props.calculateSkillsMedicine(medicine)
  };

// componentDidMount = () => {
//   this.props.calculateSkills("skillsStealth", stealth)
//   this.props.calculateSkills("skillsExplosives", explosives)
//   this.props.calculateSkills("skillsTechnology", technology)
//   this.props.calculateSkills("skillsUseMagicDevice", useMagicDevice)
//   this.props.calculateSkills("skillsMedicine", medicine)
// }


  render() {
    const {
      acrobaticsRanks,
      acrobaticsMisc,
      accuracyRanks,
      accuracyMisc,
      bluffRanks,
      bluffMisc,
      climbRanks,
      climbMisc,
      diplomacyRanks,
      diplomacyMisc,
      disableDeviceRanks,
      disableDeviceMisc,
      disguiseRanks,
      disguiseMisc,
      escapeArtistRanks,
      escapeArtistMisc,
      explosivesRanks,
      explosivesMisc,
      handleAnimalRanks,
      handleAnimalMisc,
      heavyWeaponsRanks,
      heavyWeaponsMisc,
      medicineRanks,
      medicineMisc,
      intimidateRanks,
      intimidateMisc,
      linguisticsRanks,
      linguisticsMisc,
      lockpickRanks,
      lockpickMisc,
      performRanks,
      performMisc,
      ridePilotRanks,
      ridePilotMisc,
      repairRanks,
      repairMisc,
      technologyRanks,
      technologyMisc,
      senseMotiveRanks,
      senseMotiveMisc,
      sleightOfHandRanks,
      sleightOfHandMisc,
      spellcraftRanks,
      spellcraftMisc,
      stealthRanks,
      stealthMisc,
      survivalRanks,
      survivalMisc,
      swimRanks,
      swimMisc,
      unarmedRanks,
      unarmedMisc,
      useMagicDeviceRanks,
      useMagicDeviceMisc,
    } = this.state;

    let { classes, characterSheet, phyTotal, refTotal, intTotal, chaTotal } = this.props;

    let charactersClass = characterSheet.class;

    if (charactersClass === "Apa") {
      correctClass = classes[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS


    let calculateAbility = (x, key) => {
      return Math.ceil(
        // correctClass.skills[x] === false &&
        //   characterSheet.stats.skills[x] === false
        //   ? 0
        //   : parseInt(key) * 0.25
        parseInt(key) * .25
      )
  }

    let acrobaticsAbility = calculateAbility("acrobatics", refTotal)
    let accuracyAbility = calculateAbility("accuracy", refTotal)
    let bluff
    let climb
    let diplomacy
    let disableDevice
    let disguise
    let escapeArtist
    let explosivesAbility = calculateAbility("explosives", intTotal)
    let handleAnimal
    let heavyWeapons
    let medicineAbility = calculateAbility("medicine", intTotal)
    let intimidate
    let linguistics
    let lockpick
    let perform
    let ridePilot
    let repair
    let technologyAbility = calculateAbility("technology", intTotal)
    let senseMotive
    let sleightOfHand
    let spellcraft
    let stealthAbility = calculateAbility("stealth", refTotal)
    let survival
    let swim
    let unarmed
    let useMagicDeviceAbility = calculateAbility("useMagicDevice", chaTotal)

    let calculateTotal = (x, misc, abl, ran) => {
      return Math.ceil(
        correctClass.skills[x] === false &&
          characterSheet.stats.skills[x] === false
          ? 0
          : parseInt(misc) + parseInt(abl) + (parseInt(ran) * 1.25)
      )
    }

    let acrobatics = calculateTotal("acrobatics", acrobaticsMisc, acrobaticsAbility, acrobaticsRanks)
    let accuracy = calculateTotal("accuracy", accuracyMisc, accuracyAbility, accuracyRanks)
    // let bluff
    // let climb
    // let diplomacy
    // let disableDevice
    // let disguise
    // let escapeArtist
    explosives = calculateTotal("explosives", explosivesMisc, explosivesAbility, explosivesRanks)
    // let handleAnimal
    // let heavyWeapons
    medicine = calculateTotal("medicine", medicineMisc, medicineAbility, medicineRanks)
    // let intimidate
    // let linguistics
    // let lockpick
    // let perform
    // let ridePilot
    // let repair
    technology = calculateTotal("technology", technologyMisc, technologyAbility, technologyRanks)
    // let senseMotive
    // let sleightOfHand
    // let spellcraft
    stealth = calculateTotal("stealth", stealthMisc, stealthAbility, stealthRanks)
    // let survival
    // let swim
    // let unarmed
    useMagicDevice = calculateTotal("useMagicDevice", useMagicDeviceMisc, useMagicDeviceAbility, useMagicDeviceRanks)

    return (
      <React.Fragment>
        <table>
          <tr>
            <th>Competency</th>
            <th>Skill</th>
            <th>Key</th>
            <th>Total</th>
            <th>Ability</th>
            <th>Ranks</th>
            <th>Miscellanious</th>
          </tr>
          <tr>
            <td>
              {correctClass.skills.acrobatics === true ||
              characterSheet.stats.skills.acrobatics === true
                ? "Yes"
                : "-"}
            </td>
            <td>Acrobatics</td>
            <td>REF</td>
            <td>{acrobatics}</td>
            <td>
              {acrobaticsAbility}
            </td>
            <td>
              <input
                type="number"
                name="acrobaticsRanks"
                onChange={this.onChange}
                value={acrobaticsRanks}
              />
            </td>
            <td>
              <input
                type="number"
                name="acrobaticsMisc"
                onChange={this.onChange}
                value={acrobaticsMisc}
              />
            </td>
          </tr>
           <tr>
            <td>
              {correctClass.skills.accuracy === true ||
              characterSheet.stats.skills.accuracy === true
                ? "Yes"
                : "-"}
            </td>
            <td>Accuracy</td>
            <td>REF</td>
            <td>
              {accuracy}
            </td>
            <td>
              {accuracyAbility}
            </td>
            <td>
              <input
                name="accuracyRanks"
                type="number"
                value={accuracyRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="accuracyMisc"
                onChange={this.onChange}
                value={accuracyMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {correctClass.skills.stealth === true ||
              characterSheet.stats.skills.stealth === true
                ? "Yes"
                : "-"}
            </td>
            <td>Stealth</td>
            <td>REF</td>
            <td>
              {stealth}
            </td>
            <td>
              {stealthAbility}
            </td>
            <td>
              <input
                name="stealthRanks"
                type="number"
                value={stealthRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="stealthMisc"
                onChange={this.onChange}
                value={stealthMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {correctClass.skills.explosives === true ||
              characterSheet.stats.skills.explosives === true
                ? "Yes"
                : "-"}
            </td>
            <td>Explosives</td>
            <td>INT</td>
            <td>
              {explosives}
            </td>
            <td>
              {explosivesAbility}
            </td>
            <td>
              <input
                name="explosivesRanks"
                type="number"
                value={explosivesRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="explosivesMisc"
                onChange={this.onChange}
                value={explosivesMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {correctClass.skills.medicine === true ||
              characterSheet.stats.skills.medicine === true
                ? "Yes"
                : "-"}
            </td>
            <td>Medicine</td>
            <td>INT</td>
            <td>
              {medicine}
            </td>
            <td>
              {medicineAbility}
            </td>
            <td>
              <input
                name="medicineRanks"
                type="number"
                value={medicineRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="medicineMisc"
                onChange={this.onChange}
                value={medicineMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {correctClass.skills.technology === true ||
              characterSheet.stats.skills.technology === true
                ? "Yes"
                : "-"}
            </td>
            <td>Technology</td>
            <td>INT</td>
            <td>
              {technology}
            </td>
            <td>
              {technologyAbility}
            </td>
            <td>
              <input
                name="technologyRanks"
                type="number"
                value={technologyRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="technologyMisc"
                onChange={this.onChange}
                value={technologyMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {correctClass.skills.useMagicDevice === true ||
              characterSheet.stats.skills.useMagicDevice === true
                ? "Yes"
                : "-"}
            </td>
            <td>Use Magic Device</td>
            <td>CHA</td>
            <td>
              {useMagicDevice}
            </td>
            <td>
              {useMagicDeviceAbility}
            </td>
            <td>
              <input
                name="useMagicDeviceRanks"
                type="number"
                value={useMagicDeviceRanks}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="useMagicDeviceMisc"
                onChange={this.onChange}
                value={useMagicDeviceMisc}
              />
            </td>
          </tr>
        </table>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Skills;
