import React from "react"

function Stats(props) {
  const openLevelUp = () => {
    props.levelUpHandler(true)
  }
  const openEditLevel = () => {
    props.editLevelHandler(true)
  }

  function calcBaseStatTotal(num) {
    return props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[num] + props.baseEquipmentMod[num] + props.charSheet.baseStatsTempMod[num]
  }

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Stats</h1>
      </div>
      <div className="page-container">
        <div className="cw__50">
          <div className="cw__100 cw__100--adjusted">
            <div className="cw__50--adjusted">
              <h2 className="heading">Levels and Experience</h2>
              <div className="cw__container">
                <div className="item-container">
                  <h3 className="item-container__heading">Level</h3>
                  <h4 className="item-container__subheading">You are at Level {props.charSheet.level}</h4>
                  <button onClick={openLevelUp}>Level Up</button>
                  <button onClick={openEditLevel}>Edit Level</button>
                </div>
                <div className="item-container">
                  <h3 className="item-container__heading">Excellence Chips</h3>
                  <h4 className="item-container__subheading">You have {props.charSheet.excellenceChips} Excellence Chips</h4>
                  <button>Add Excellence Chip</button>
                  <button>Use Excellence Chip</button>
                  <p>Want to earn an excellence chip? Do something epic and make sure the DM is watching! Excellence Chips can be cashed in whenever you'd like for an immediate perfect roll. Use them wisely.</p>
                </div>
              </div>
            </div>

            <div className="cw__50--adjusted">
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
                      {props.charSheet.levelUps[props.charSheet.levelUps.length - 1].proficiency.map((prof, index) => {
                        return (
                          <tr key={index}>
                            <td>{prof.name}</td>
                            <td>{prof.value}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cw__50">
          <h2 className="heading">Base Stats</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Base Stats Table</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ability</th>
                    <th>Total</th>
                    <th>Level Ups</th>
                    <th>Equipment Mod</th>
                    <th>Temp Mod</th>
                    <th>Race/Class Mod</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Physique (PHY)</td>
                    <td>{calcBaseStatTotal(0)}</td>
                    <td>{props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0]}</td>
                    <td>{props.baseEquipmentMod[0]}</td>
                    <td>
                      <input type="number" value={props.charSheet.baseStatsTempMod[0]} />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Intelligence (INT)</td>
                    <td>{calcBaseStatTotal(1)}</td>
                    <td>{props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1]}</td>
                    <td>{props.baseEquipmentMod[0]}</td>
                    <td>
                      <input type="number" value={props.charSheet.baseStatsTempMod[1]} />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Reflex (REF)</td>
                    <td>{calcBaseStatTotal(2)}</td>
                    <td>{props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2]}</td>
                    <td>{props.baseEquipmentMod[0]}</td>
                    <td>
                      <input type="number" value={props.charSheet.baseStatsTempMod[2]} />
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Charisma (CHA)</td>
                    <td>{calcBaseStatTotal(3)}</td>
                    <td>{props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3]}</td>
                    <td>{props.baseEquipmentMod[0]}</td>
                    <td>
                      <input type="number" value={props.charSheet.baseStatsTempMod[3]} />
                    </td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
                    <th>Total</th>
                    <th>Natural Mod</th>
                    <th>Equipment Mod</th>
                  </tr>
                </thead>
                <tbody>
                  {props.charSheet.levelUps[props.charSheet.levelUps.length - 1].skills.map((skill, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{skill.name}</td>
                        <td>{skill.natMod + props.equipmentMod[index]}</td>
                        <td>{skill.natMod}</td>
                        <td>{props.equipmentMod[index]}</td>
                      </tr>
                    )
                  })}
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
