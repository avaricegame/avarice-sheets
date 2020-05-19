import React from "react";

let correctClass = [];
let physique = 5;
let reflex = 5;
let intelligence = 5;
let charisma = 5;

class LevelInfo extends React.Component {
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
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const {} = this.state;

  //   fetch("", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({}),
  //   });
  // };

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

    let { classes, characterSheet } = this.props;

    let charactersClass = characterSheet.class;

    if (charactersClass === "Apa") {
      correctClass = classes[0];
    } // ADD ALL OF THE OTHER CLASSES HERE AS ELSE IF STATEMENTS


    let calculateAbility = (x, key) => {
      return Math.ceil(
        correctClass.skills[x] === false &&
          characterSheet.stats.skills[x] === false
          ? 0
          : parseInt(key) * 0.25
      )
  }

    let acrobaticsAbility = calculateAbility("acrobatics", reflex)
    let accuracy
    let bluff
    let climb
    let diplomacy
    let disableDevice
    let disguise
    let escapeArtist
    let explosives
    let handleAnimal
    let heavyWeapons
    let medicine
    let intimidate
    let linguistics
    let lockpick
    let perform
    let ridePilot
    let repair
    let technology
    let senseMotive
    let sleightOfHand
    let spellcraft
    let stealth
    let survival
    let swim
    let unarmed
    let useMagicDevice

    let calculateTotal = (misc, abl, ran) => {
      return Math.ceil(
        parseInt(misc) + parseInt(abl) + (parseInt(ran) * 1.25)
      )
    }

    let acrobatics = calculateTotal(acrobaticsMisc, acrobaticsAbility, acrobaticsRanks)
    // let accuracy
    // let bluff
    // let climb
    // let diplomacy
    // let disableDevice
    // let disguise
    // let escapeArtist
    // let explosives
    // let handleAnimal
    // let heavyWeapons
    // let medicine
    // let intimidate
    // let linguistics
    // let lockpick
    // let perform
    // let ridePilot
    // let repair
    // let technology
    // let senseMotive
    // let sleightOfHand
    // let spellcraft
    // let stealth
    // let survival
    // let swim
    // let unarmed
    // let useMagicDevice

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
          {/* <tr>
            <td>
              {classes[0].skills.appraise === true ||
              characterSheet[0].stats.skills.appraise === true
                ? "Yes"
                : "-"}
            </td>
            <td>Appraise</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.appraiseMisc +
                  (classes[0].skills.appraise === false &&
                  characterSheet[0].stats.skills.appraise === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.appraiseRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.appraise === false &&
                  characterSheet[0].stats.skills.appraise === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.appraiseRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.appraiseMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.bluff === true ||
              characterSheet[0].stats.skills.bluff === true
                ? "Yes"
                : "-"}
            </td>
            <td>Bluff</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.bluffMisc +
                  (classes[0].skills.bluff === false &&
                  characterSheet[0].stats.skills.bluff === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.bluffRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.bluff === false &&
                  characterSheet[0].stats.skills.bluff === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.bluffRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.bluffMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.climb === true ||
              characterSheet[0].stats.skills.climb === true
                ? "Yes"
                : "-"}
            </td>
            <td>Climb</td>
            <td>STR</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.climbMisc +
                  (classes[0].skills.climb === false &&
                  characterSheet[0].stats.skills.climb === false
                    ? 0
                    : strength * 0.25) +
                  characterSheet[0].stats.skills.climbRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.climb === false &&
                  characterSheet[0].stats.skills.climb === false
                  ? 0
                  : strength * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.climbRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.climbMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.diplomacy === true ||
              characterSheet[0].stats.skills.diplomacy === true
                ? "Yes"
                : "-"}
            </td>
            <td>Diplomacy</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.diplomacyMisc +
                  (classes[0].skills.diplomacy === false &&
                  characterSheet[0].stats.skills.diplomacy === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.diplomacyRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.diplomacy === false &&
                  characterSheet[0].stats.skills.diplomacy === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.diplomacyRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.diplomacyMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.disableDevice === true ||
              characterSheet[0].stats.skills.disableDevice === true
                ? "Yes"
                : "-"}
            </td>
            <td>Disable Device</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.disableDeviceMisc +
                  (classes[0].skills.disableDevice === false &&
                  characterSheet[0].stats.skills.disableDevice === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.disableDeviceRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.disableDevice === false &&
                  characterSheet[0].stats.skills.disableDevice === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.disableDeviceRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.disableDeviceMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.disguise === true ||
              characterSheet[0].stats.skills.disguise === true
                ? "Yes"
                : "-"}
            </td>
            <td>Disguise</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.disguiseMisc +
                  (classes[0].skills.disguise === false &&
                  characterSheet[0].stats.skills.disguise === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.disguiseRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.disguise === false &&
                  characterSheet[0].stats.skills.disguise === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.disguiseRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.disguiseMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.escapeArtist === true ||
              characterSheet[0].stats.skills.escapeArtist === true
                ? "Yes"
                : "-"}
            </td>
            <td>Escape Artist</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.escapeArtistMisc +
                  (classes[0].skills.escapeArtist === false &&
                  characterSheet[0].stats.skills.escapeArtist === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.escapeArtistRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.escapeArtist === false &&
                  characterSheet[0].stats.skills.escapeArtist === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.escapeArtistRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.escapeArtistMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.explosives === true ||
              characterSheet[0].stats.skills.explosives === true
                ? "Yes"
                : "-"}
            </td>
            <td>Explosives</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.explosivesMisc +
                  (classes[0].skills.explosives === false &&
                  characterSheet[0].stats.skills.explosives === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.explosivesRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.explosives === false &&
                  characterSheet[0].stats.skills.explosives === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.explosivesRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.explosivesMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.technology === true ||
              characterSheet[0].stats.skills.technology === true
                ? "Yes"
                : "-"}
            </td>
            <td>Technology</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.technologyMisc +
                  (classes[0].skills.technology === false &&
                  characterSheet[0].stats.skills.technology === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.technologyRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.technology === false &&
                  characterSheet[0].stats.skills.technology === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.technologyRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.technologyMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.handleAnimal === true ||
              characterSheet[0].stats.skills.handleAnimal === true
                ? "Yes"
                : "-"}
            </td>
            <td>Handle Animal</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.handleAnimalMisc +
                  (classes[0].skills.handleAnimal === false &&
                  characterSheet[0].stats.skills.handleAnimal === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.handleAnimalRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.handleAnimal === false &&
                  characterSheet[0].stats.skills.handleAnimal === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.handleAnimalRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.handleAnimalMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.medicine === true ||
              characterSheet[0].stats.skills.medicine === true
                ? "Yes"
                : "-"}
            </td>
            <td>Medicine</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.medicineMisc +
                  (classes[0].skills.medicine === false &&
                  characterSheet[0].stats.skills.medicine === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.medicineRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.medicine === false &&
                  characterSheet[0].stats.skills.medicine === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.medicineRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.medicineMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.intimidate === true ||
              characterSheet[0].stats.skills.intimidate === true
                ? "Yes"
                : "-"}
            </td>
            <td>Intimidate</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.intimidateMisc +
                  (classes[0].skills.intimidate === false &&
                  characterSheet[0].stats.skills.intimidate === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.intimidateRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.intimidate === false &&
                  characterSheet[0].stats.skills.intimidate === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.intimidateRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.intimidateMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.linguistics === true ||
              characterSheet[0].stats.skills.linguistics === true
                ? "Yes"
                : "-"}
            </td>
            <td>Linguistics</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.linguisticsMisc +
                  (classes[0].skills.linguistics === false &&
                  characterSheet[0].stats.skills.linguistics === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.linguisticsRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.linguistics === false &&
                  characterSheet[0].stats.skills.linguistics === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.linguisticsRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.linguisticsMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.perform === true ||
              characterSheet[0].stats.skills.perform === true
                ? "Yes"
                : "-"}
            </td>
            <td>Perform</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.performMisc +
                  (classes[0].skills.perform === false &&
                  characterSheet[0].stats.skills.perform === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.performRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.perform === false &&
                  characterSheet[0].stats.skills.perform === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.performRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.performMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.ridePilot === true ||
              characterSheet[0].stats.skills.ridePilot === true
                ? "Yes"
                : "-"}
            </td>
            <td>Ride/Pilot</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.ridePilotMisc +
                  (classes[0].skills.ridePilot === false &&
                  characterSheet[0].stats.skills.ridePilot === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.ridePilotRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.ridePilot === false &&
                  characterSheet[0].stats.skills.ridePilot === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.ridePilotRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.ridePilotMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.repair === true ||
              characterSheet[0].stats.skills.repair === true
                ? "Yes"
                : "-"}
            </td>
            <td>Repair</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.repairMisc +
                  (classes[0].skills.repair === false &&
                  characterSheet[0].stats.skills.repair === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.repairRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.repair === false &&
                  characterSheet[0].stats.skills.repair === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.repairRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.repairMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.senseMotive === true ||
              characterSheet[0].stats.skills.senseMotive === true
                ? "Yes"
                : "-"}
            </td>
            <td>Sense Motive</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.senseMotiveMisc +
                  (classes[0].skills.senseMotive === false &&
                  characterSheet[0].stats.skills.senseMotive === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.senseMotiveRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.senseMotive === false &&
                  characterSheet[0].stats.skills.senseMotive === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.senseMotiveRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.senseMotiveMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.sleightOfHand === true ||
              characterSheet[0].stats.skills.sleightOfHand === true
                ? "Yes"
                : "-"}
            </td>
            <td>Sleight of Hand</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.sleightOfHandMisc +
                  (classes[0].skills.sleightOfHand === false &&
                  characterSheet[0].stats.skills.sleightOfHand === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.sleightOfHandRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.sleightOfHand === false &&
                  characterSheet[0].stats.skills.sleightOfHand === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.sleightOfHandRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.sleightOfHandMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.spellcraft === true ||
              characterSheet[0].stats.skills.spellcraft === true
                ? "Yes"
                : "-"}
            </td>
            <td>Spellcraft</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.spellcraftMisc +
                  (classes[0].skills.spellcraft === false &&
                  characterSheet[0].stats.skills.spellcraft === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.spellcraftRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.spellcraft === false &&
                  characterSheet[0].stats.skills.spellcraft === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.spellcraftRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.spellcraftMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.stealth === true ||
              characterSheet[0].stats.skills.stealth === true
                ? "Yes"
                : "-"}
            </td>
            <td>Stealth</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.stealthMisc +
                  (classes[0].skills.stealth === false &&
                  characterSheet[0].stats.skills.stealth === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.stealthRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.stealth === false &&
                  characterSheet[0].stats.skills.stealth === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.stealthRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.stealthMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.survival === true ||
              characterSheet[0].stats.skills.survival === true
                ? "Yes"
                : "-"}
            </td>
            <td>Survival</td>
            <td>INT</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.survivalMisc +
                  (classes[0].skills.survival === false &&
                  characterSheet[0].stats.skills.survival === false
                    ? 0
                    : intelligence * 0.25) +
                  characterSheet[0].stats.skills.survivalRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.survival === false &&
                  characterSheet[0].stats.skills.survival === false
                  ? 0
                  : intelligence * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.survivalRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.survivalMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.swim === true ||
              characterSheet[0].stats.skills.swim === true
                ? "Yes"
                : "-"}
            </td>
            <td>Swim</td>
            <td>STR</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.swimMisc +
                  (classes[0].skills.swim === false &&
                  characterSheet[0].stats.skills.swim === false
                    ? 0
                    : strength * 0.25) +
                  characterSheet[0].stats.skills.swimRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.swim === false &&
                  characterSheet[0].stats.skills.swim === false
                  ? 0
                  : strength * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.swimRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.swimMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.useMagicDevice === true ||
              characterSheet[0].stats.skills.useMagicDevice === true
                ? "Yes"
                : "-"}
            </td>
            <td>Use Magic Device</td>
            <td>CHA</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.useMagicDeviceMisc +
                  (classes[0].skills.useMagicDevice === false &&
                  characterSheet[0].stats.skills.useMagicDevice === false
                    ? 0
                    : charisma * 0.25) +
                  characterSheet[0].stats.skills.useMagicDeviceRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.useMagicDevice === false &&
                  characterSheet[0].stats.skills.useMagicDevice === false
                  ? 0
                  : charisma * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.useMagicDeviceRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.useMagicDeviceMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.rangedAccuracy === true ||
              characterSheet[0].stats.skills.rangedAccuracy === true
                ? "Yes"
                : "-"}
            </td>
            <td>Ranged Accuracy</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.rangedAccuracyMisc +
                  (classes[0].skills.rangedAccuracy === false &&
                  characterSheet[0].stats.skills.rangedAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.rangedAccuracyRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.rangedAccuracy === false &&
                  characterSheet[0].stats.skills.rangedAccuracy === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.rangedAccuracyRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.rangedAccuracyMisc}
              />
            </td>
          </tr>
          <tr>
            <td>
              {classes[0].skills.meleeAccuracy === true ||
              characterSheet[0].stats.skills.meleeAccuracy === true
                ? "Yes"
                : "-"}
            </td>
            <td>Melee Accuracy</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.meleeAccuracyMisc +
                  (classes[0].skills.meleeAccuracy === false &&
                  characterSheet[0].stats.skills.meleeAccuracy === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.meleeAccuracyRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.meleeAccuracy === false &&
                  characterSheet[0].stats.skills.meleeAccuracy === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.meleeAccuracyRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.meleeAccuracyMisc}
              />
            </td>
          </tr> */}
        </table>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LevelInfo;
