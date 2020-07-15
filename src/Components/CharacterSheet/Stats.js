import React from "react"

function Stats() {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Stats</h1>
      </div>
      <div className="page-container">
        <div className="cw__50">
          <h2 className="heading">Important Stats</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Important Stats Table</h3>
              <table>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Total</th>
                    <th>Ability Mod</th>
                    <th>Equipment Mod</th>
                    <th>Temp Mod</th>
                    <th>Misc Mod</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Speed</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>Perception</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>Reaction</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>Fortitude</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>Stealth</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__50">
          <h2 className="heading">Ability Scores</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Ability Scores Table</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ability</th>
                    <th>Total</th>
                    <th>Level Ups</th>
                    <th>Equipment Mod</th>
                    <th>Temp Mod</th>
                    <th>Misc Mod</th>
                    <th>Race/Class Mod</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Physique (PHY)</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Intelligence (INT)</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Reflex (REF)</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Charisma (CHA)</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Levels and Experience</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Level</h3>
              <h4 className="item-container__subheading">You are at Level 1</h4>
              <button>Level Up</button>
              <button>Edit Level</button>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Excellence Chips</h3>
              <h4 className="item-container__subheading">You have 0 Excellence Chips</h4>
              <button>Edit Excellence Chips</button>
              <p>Want to earn an excellence chip? Do something epic and make sure the DM is watching! Excellence Chips can be cashed in whenever you'd like for an immediate perfect roll. Use them wisely.</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Proficiencies</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Ability Proficiencies</h3>
              <h4 className="item-container__subheading">When Performing Ability Actions</h4>
              <table>
                <thead>
                  <tr>
                    <th>Proficiency</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tech</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Explosive</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Magic</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Poison</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Weapon Proficiencies</h3>
              <h4 className="item-container__subheading">When Performing Attack Actions</h4>
              <table>
                <thead>
                  <tr>
                    <th>Proficiency</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PHY</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>REF</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>INT</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>CHA</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PHY/REF</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PHY/INT</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>PHY/CHA</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>REF/INT</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>REF/CHA</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>INT/CHA</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>BALANCED</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__50">
          <h2 className="heading">Skills</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Skills Table</h3>
              <h4 className="item-container__subheading">You are Competent in 8 Skills</h4>
              <table>
                <thead>
                  <tr>
                    <th>Competent</th>
                    <th>Skill</th>
                    <th>Key</th>
                    <th>Total</th>
                    <th>Ability</th>
                    <th>Ranks</th>
                    <th>Misc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Acrobatics</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Accuracy</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Bluff</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Climb</td>
                    <td>PHY</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Diplomacy</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Disable Device</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Disguise</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Escape Artist</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Explosive</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Handle Animal</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Heavy Weapons</td>
                    <td>PHY</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Medicine</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Intimidate</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Linguistics</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Lockpick</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Perform</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Ride/Pilot</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Repair</td>
                    <td>Technology</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Sense Motive</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Sleight of Hand</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Spellcraft</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Stealth</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Survival</td>
                    <td>INT</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Swim</td>
                    <td>PHY</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Unarmed</td>
                    <td>REF</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Use Magic Dev</td>
                    <td>CHA</td>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <input type="number" value="2" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Stats
