import React from "react"

function Info(props) {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Info</h1>
      </div>
      <div className="page-container">
        <div className="cw__33">
          <h2 className="heading">Campaign Information</h2>
          <div className="cw__container">
            <button>Add a New Character Log</button>

            <div className="item-container">
              <h3 className="item-container__heading">Character Log</h3>
              {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4> */}
              <h4 className="item-container__subheading">For {props.charSheet.characterName}</h4>
              {props.charSheet.characterLog.map((log) => {
                return (
                  <p key={log.id}>
                    <strong>{log.title}: </strong>
                    {log.details}
                  </p>
                )
              })}
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Master Log</h3>
              {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4>
              <p>
                <strong>Mission III: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p>
                <strong>Mission II: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <p>
                <strong>Mission I: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p> */}
            </div>
          </div>

          <div className="item-container">
            <h3 className="item-container__heading">Campaign Details</h3>
            {/* <h4 className="item-container__subheading">For: Fluttering Butterflies Campaign</h4>
            <p>
              <strong>Background: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Campaign Name:</td>
                  <td>Fluttering Butterflies</td>
                </tr>
                <tr>
                  <td>Campaign ID:</td>
                  <td>#123ABC</td>
                </tr>
                <tr>
                  <td>Players:</td>
                  <td>Player 1, Player 2, Player 3</td>
                </tr>
                <tr>
                  <td>Characters:</td>
                  <td>Character 1, Character 2, Character 3</td>
                </tr>
                <tr>
                  <td>Missions Served:</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
        <div className="cw__33">
          <h2 className="heading">Race and Class Information</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Class Details and Information</h3>
              <h4 className="item-container__subheading">Class Name: {props.theClass.name}</h4>
              <h4 className="item-container__terheading">Common Name: {props.theClass.commonName}</h4>
              <p>
                <em>"{props.theClass.quote}"</em>
              </p>
              <p>{props.theClass.description}</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Base Stat Modifiers:</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Physique:</td>
                    <td>{props.theClass.baseStats[0]}</td>
                  </tr>
                  <tr>
                    <td>Reflex:</td>
                    <td>{props.theClass.baseStats[1]}</td>
                  </tr>
                  <tr>
                    <td>Intelligence:</td>
                    <td>{props.theClass.baseStats[2]}</td>
                  </tr>
                  <tr>
                    <td>Charisma:</td>
                    <td>{props.theClass.baseStats[3]}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Skills:</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Skill 1: </td>
                    <td>{props.theClass.skills.skill1}</td>
                  </tr>
                  <tr>
                    <td>Skill 2: </td>
                    <td>{props.theClass.skills.skill2}</td>
                  </tr>
                  <tr>
                    <td>Skill 3: </td>
                    <td>{props.theClass.skills.skill3}</td>
                  </tr>
                  <tr>
                    <td>Skill 4: </td>
                    <td>{props.theClass.skills.skill4}</td>
                  </tr>
                  <tr>
                    <td>Skill 5: </td>
                    <td>{props.theClass.skills.skill5}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Race Details and Information</h3>
              <h4 className="item-container__subheading">Race Name: {props.theRace.name}</h4>
              <h4 className="item-container__terheading">Common Name: {props.theRace.commonName}</h4>
              <p>
                <em>"{props.theRace.quote}"</em>
              </p>
              <p>{props.theRace.description}</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Base Stat Modifiers:</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Physique:</td>
                    <td>{props.theRace.baseStats[0]}</td>
                  </tr>
                  <tr>
                    <td>Reflex:</td>
                    <td>{props.theRace.baseStats[1]}</td>
                  </tr>
                  <tr>
                    <td>Intelligence:</td>
                    <td>{props.theRace.baseStats[2]}</td>
                  </tr>
                  <tr>
                    <td>Charisma:</td>
                    <td>{props.theRace.baseStats[3]}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>More Information:</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Location:</td>
                    <td>{props.theRace.location}</td>
                  </tr>
                  <tr>
                    <td>Climate:</td>
                    <td>{props.theRace.climate}</td>
                  </tr>
                  <tr>
                    <td>Size:</td>
                    <td>{props.theRace.size}</td>
                  </tr>
                  <tr>
                    <td>Lifespan:</td>
                    <td>{props.theRace.lifespan}</td>
                  </tr>
                  <tr>
                    <td>Personality:</td>
                    <td>{props.theRace.personality}</td>
                  </tr>
                  <tr>
                    <td>Friends:</td>
                    <td>{props.theRace.friends}</td>
                  </tr>
                  <tr>
                    <td>Enemies:</td>
                    <td>{props.theRace.enemies}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__33">
          <h2 className="heading">Character Information</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Character Description</h3>
              <h4 className="item-container__subheading">For {props.charSheet.characterName}</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Age:</td>
                    <td>{props.charSheet.characterDescription.age} years old</td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td>{props.charSheet.characterDescription.weight} lbs.</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>{props.charSheet.characterDescription.height} ft.</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{props.charSheet.characterDescription.gender}</td>
                  </tr>
                  <tr>
                    <td>Skin Tone:</td>
                    <td>{props.charSheet.characterDescription.skinTone}</td>
                  </tr>
                  <tr>
                    <td>Eye Color:</td>
                    <td>{props.charSheet.characterDescription.eyeColor}</td>
                  </tr>
                  <tr>
                    <td>Hair Color:</td>
                    <td>{props.charSheet.characterDescription.hairColor}</td>
                  </tr>
                  <tr>
                    <td>Hair Length:</td>
                    <td>{props.charSheet.characterDescription.hairLength}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Character Background</h3>
              <h4 className="item-container__subheading">For {props.charSheet.characterName}</h4>
              <p>
                <strong>Who were your parents? How were you raised? Do you have any close family?</strong>
                <br />
                {props.charSheet.characterBackground.q1}
              </p>

              <p>
                <strong>Where/From whom did you learn your skills?</strong>
                <br />
                {props.charSheet.characterBackground.q2}
              </p>

              <p>
                <strong>Name your 3 most important personal beliefs:</strong>
                <br />
                {props.charSheet.characterBackground.q3}
              </p>

              <p>
                <strong>Name 3 or more character flaws that are most likely to trouble you:</strong>
                <br />
                {props.charSheet.characterBackground.q4}
              </p>

              <p>
                <strong>What do you secretly fear even in times of easy-going peace? Why?</strong>
                <br />
                {props.charSheet.characterBackground.q5}
              </p>

              <p>
                <strong>Are you ({props.charSheet.characterName}) a hero? Why or why not?</strong>
                <br />
                {props.charSheet.characterBackground.q6}
              </p>

              <p>
                <strong>What are your goals (both long and short term)?</strong>
                <br />
                {props.charSheet.characterBackground.q7}
              </p>

              <p>
                <strong>Are you ({props.charSheet.characterName}) merciful? Why or why not?</strong>
                <br />
                {props.charSheet.characterBackground.q8}
              </p>

              <p>
                <strong>Why are you an adventurer?</strong>
                <br />
                {props.charSheet.characterBackground.q9}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
