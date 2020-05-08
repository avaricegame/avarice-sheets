import React from "react";

//let strengthEquipment = 0
//let dexterityEquipment = 0
//let constitutionEquipment = 0
//let intelligenceEquipment = 0
//let charismaEquipment = 0

// let speedEquipment = 0
// let perceptionEquipment = 0
// let reflexdexEquipment = 0
// let fortitudeconEquipment = 0
// let stealthEquipment = 0
// let rangedaccEquipment = 0
// let meleeaccEquipment = 0

let strength, dexterity, constitution, intelligence, charisma;

const Stats = ({ characterSheet, races, classes, armour }) => {
  let ahp = 0;
  let asp = 0;
  let astr = 0;
  let adexref = 0;
  let aconfor = 0;
  let aint = 0;
  let acha = 0;
  let aper = 0;
  let astl = 0;
  let ara = 0;
  let ama = 0;
  armour.map(function (armour) {
    ahp += armour.modifiers.hp;
    asp += armour.modifiers.speed;
    astr += armour.modifiers.strength;
    adexref += armour.modifiers.dexterityReflex;
    aconfor += armour.modifiers.constitutionFortitude;
    aint += armour.modifiers.intelligence;
    acha += armour.modifiers.charisma;
    aper += armour.modifiers.perception;
    astl += armour.modifiers.stealth;
    ara += armour.modifiers.rangedAccuracy;
    ama += armour.modifiers.meleeAccuracy;

    console.log(
      ahp,
      asp,
      astr,
      adexref,
      aconfor,
      aint,
      acha,
      aper,
      astl,
      ara,
      ama
    );
    return ahp, asp, astr, adexref, aconfor, aint, acha, aper, astl, ara, ama;
  });

  console.log(astl);

  // strengthEquipment = astr
  // dexterityEquipment = adexref
  // constitutionEquipment = aconfor
  // intelligenceEquipment = aint
  // charismaEquipment = acha
  // speedEquipment = asp
  // perceptionEquipment = aper
  // reflexdexEquipment =  adexref
  // fortitudeconEquipment =  aconfor
  // stealthEquipment =  astl
  // rangedaccEquipment = ara
  // meleeaccEquipment = ama

  strength =
    characterSheet[0].stats.abilityScores.strengthLevelUps * 2 +
    5 +
    astr +
    characterSheet[0].stats.abilityScores.strengthTempMod +
    characterSheet[0].stats.abilityScores.strengthMiscMod +
    races[0].abilities.strength +
    classes[0].abilityModifiers.strength;
  dexterity =
    characterSheet[0].stats.abilityScores.dexterityLevelUps * 2 +
    5 +
    adexref +
    characterSheet[0].stats.abilityScores.dexterityTempMod +
    characterSheet[0].stats.abilityScores.dexterityMiscMod +
    races[0].abilities.dexterity +
    classes[0].abilityModifiers.dexterity;
  constitution =
    characterSheet[0].stats.abilityScores.constitutionLevelUps * 2 +
    5 +
    aconfor +
    characterSheet[0].stats.abilityScores.constitutionTempMod +
    characterSheet[0].stats.abilityScores.constitutionMiscMod +
    races[0].abilities.constitution +
    classes[0].abilityModifiers.constitution;
  intelligence =
    characterSheet[0].stats.abilityScores.intelligenceLevelUps * 2 +
    5 +
    aint +
    characterSheet[0].stats.abilityScores.intelligenceTempMod +
    characterSheet[0].stats.abilityScores.intelligenceMiscMod +
    races[0].abilities.intelligence +
    classes[0].abilityModifiers.intelligence;
  charisma =
    characterSheet[0].stats.abilityScores.charismaLevelUps * 2 +
    5 +
    acha +
    characterSheet[0].stats.abilityScores.charismaTempMod +
    characterSheet[0].stats.abilityScores.charismaMiscMod +
    races[0].abilities.charisma +
    classes[0].abilityModifiers.charisma;

  return (
    <React.Fragment>
      <div className="secondary-header">
        <h1>Stats</h1>
      </div>

      <div className="level bgb">
        <div className="heading-bar">
          <h2>Level and Experience</h2>
        </div>

        <h4>Level</h4>
        <h5>You are at level {characterSheet[0].stats.level}</h5>
        <button id="editLevelButton">Edit Level</button>
        <button>Quick Level Up</button>

        <form id="editLevelForm">
          <fieldset>
            <button>-</button>
            <input type="number" value="4" />
            <button>+</button>

            <input type="submit" className="submit-button" value="Save Level" />
          </fieldset>
        </form>

        <p>
          You currently have <span>4</span> Rank Points and <span>2</span>{" "}
          Ability Scores Level Up points that you can use. Be sure to apply them
          to keep your character as buff and smart as possible!
        </p>

        <h4>Excelence Chips</h4>
        <h5>
          You have <span>{characterSheet[0].stats.excellenceChips}</span>{" "}
          excelence chips
        </h5>
        <button id="editExcellenceChipsButton">Edit Excelence Chips</button>
        <button>Add an Excelence Chip</button>

        <form id="editExcellenceChipsForm">
          <fieldset>
            <button>-</button>
            <input type="number" value="0" />
            <button>+</button>

            <input
              type="submit"
              className="submit-button"
              value="Save Changes"
            />
          </fieldset>
        </form>
        <p>
          Want to earn an excellence chip? Do something epic and make sure the
          DM sees! Excellence Chips can be cashed in whenever you'd like for an
          immediate perfect roll. Use them wisely
        </p>
      </div>
      <div className="important-stats bgb bgb--overflow">
        <div className="heading-bar bgb--full-width">
          <h2>Important Stats</h2>
        </div>
        <button>Edit Important Stats</button>
        <button>Save Changes</button>
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
        </table>
      </div>

      <div className="ability-scores bgb bgb--overflow">
        <div className="heading-bar bgb--full-width">
          <h2>Ability Scores</h2>
        </div>
        <button>Edit Ability Scores</button>
        <button>Save Changes</button>
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
        </table>
      </div>
      <div class="proficiencies bgb">
        <div class="heading-bar">
          <h2>Proficiencies</h2>
        </div>
        <table>
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
        </table>
      </div>
      <div class="skills bgb bgb--overflow">
        <div class="heading-bar bgb--full-width">
          <h2>Skills</h2>
        </div>
        <button>Edit Skills</button>
        <button>Save Changes</button>
        <table>
          <tr>
            <th>Proficiency</th>
            <th>Skill</th>
            <th>Key</th>
            <th>Total</th>
            <th>Ability</th>
            <th>Ranks</th>
            <th>Miscellanious</th>
          </tr>
          <tr>
            <td>
              {classes[0].skills.acrobatics === true ||
              characterSheet[0].stats.skills.acrobatics === true
                ? "Yes"
                : "-"}
            </td>
            <td>Acrobatics</td>
            <td>DEX</td>
            <td>
              {Math.ceil(
                characterSheet[0].stats.skills.acrobaticsMisc +
                  (classes[0].skills.acrobatics === false &&
                  characterSheet[0].stats.skills.acrobatics === false
                    ? 0
                    : dexterity * 0.25) +
                  characterSheet[0].stats.skills.acrobaticsRanks * 1.25
              )}
            </td>
            <td>
              {Math.ceil(
                classes[0].skills.acrobatics === false &&
                  characterSheet[0].stats.skills.acrobatics === false
                  ? 0
                  : dexterity * 0.25
              )}
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.acrobaticsRanks}
              />
            </td>
            <td>
              <input
                type="number"
                value={characterSheet[0].stats.skills.acrobaticsMisc}
              />
            </td>
          </tr>
          <tr>
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
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Stats;
