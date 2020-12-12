import React, { useContext } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Stats(props) {
  const { charid } = useParams()

  console.log(props.appState)

  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)

  console.log(charSheetState)

  const openEditLevel = () => {
    //props.editLevelHandler(true)
    if (charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].level !== 0) {
      if (window.confirm("Are you sure you want to remove your last level? This could result in a lot of abilities and level up points.")) {
        Axios.post("/character/removelevel", {
          CSID: props.CSID,
          level: parseInt(charSheetState.charSheet.levelUps.length - 1),
        })
          .then(function (response) {
            //console.log(response)
            charSheetDispatch({ type: "removeLevel" })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    } else {
      alert("You cannot remove a level, because you are already at level 0")
    }
  }
  const addEC = () => {
    Axios.patch(
      `/character/${charid}/incrementitem`,
      {
        property: "excellenceChips",
        amount: 1,
        add: true,
      },
      {
        headers: {
          Authorization: "Bearer " + props.appState.user.token,
        },
      }
    )
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "addEC" })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const useEC = () => {
    Axios.post(`/character/${charid}useec`, {
      property: "excellenceChips",
      amount: 1,
      add: false,
    })
      .then(function (response) {
        //console.log(response)
        charSheetDispatch({ type: "useEC" })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Stats</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Levels and Experience</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Level</h3>
              <h4 className="item-container__subheading">You are at Level {charSheetState.charSheet.level}</h4>
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "levelUp" })
                }}
              >
                Level Up
              </button>
              <button className="button" onClick={openEditLevel}>
                Remove Level
              </button>
              <p>When you level up you get to choose a new ability to upgrade or learn from your ability tree.</p>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Excellence Chips</h3>
              <h4 className="item-container__subheading">You have {charSheetState.charSheet.excellenceChips} Excellence Chips</h4>
              <button className="button" onClick={addEC}>
                Add Excellence Chip
              </button>
              <button className="button" onClick={useEC}>
                Use Excellence Chip
              </button>
              <p>Want to earn an excellence chip? Do something epic and make sure the DM is watching! Excellence Chips can be cashed in whenever you'd like for an immediate perfect roll. Use them wisely.</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Skill Tokens</h2>
          <div className="cw__container">
            <div className="item-container item-container--overflowx">
              <h3 className="item-container__heading">Skill Tokens Table</h3>
              <h4 className="item-container__subheading item-container__terheading--adjusted">Earned by Succeeding on a Skill Check</h4>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Physique</h4>
              <table className="skill-tokens-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Strength</td>
                    <td>
                      <div className="skill-token filled"></div>
                    </td>
                    <td>
                      <div className="skill-token filled"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Constitution</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Intelligence</h4>
              <table className="skill-tokens-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Academic</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Technical</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Dexterity</h4>
              <table className="skill-tokens-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Reflex</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Speed</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Charisma</h4>
              <table className="skill-tokens-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Speech</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Performance</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Combat</h4>
              <table className="skill-tokens-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Ranged</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Melee</td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                    <td>
                      <div className="skill-token"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].specializations.comMelee} */}

        <div className="cw__50">
          <h2 className="heading">Skills</h2>
          <div className="cw__container">
            <div className="item-container item-container--overflowx">
              <h3 className="item-container__heading">Skills Table</h3>
              <h4 className="item-container__subheading item-container__terheading--adjusted">Upgraded by Earning Three Skill Tokens of One Kind</h4>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Physique</h4>

              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Strength</td>
                    <td>
                      <span className="filled"></span>
                      <div className="filled"></div>
                    </td>
                    <td>
                      <span className="filled"></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Constitution</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Intelligence</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Academic</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Technical</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Dexterity</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Reflex</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Speed</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Charisma</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Speech</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Performance</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Combat</h4>
              <table className="skills-table">
                <thead>
                  <th className="th--first">Skill</th>
                  <th>Terrible</th>
                  <th>Bad</th>
                  <th>Normal</th>
                  <th>Good</th>
                  <th>Great</th>
                  <th>Fantastic</th>
                </thead>
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Ranged</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Melee</td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div></div>
                    </td>
                    <td>
                      <span></span>
                      <div className="skills-table__last"></div>
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
