import React, { useContext } from "react"
import { Link } from "react-router-dom"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Gameplay(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)

  console.log(charSheetState)

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Gameplay</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Hit Points</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Hit Points</h3>
              <h4 className="item-container__subheading">Max HP: {parseInt(charSheetState.charSheet.levelUps) * 10 + 10 + parseInt(props.armourModifier)}</h4>
              <h4 className="item-container__terheading">Current HP: {charSheetState.charSheet.currentHP}</h4>
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "takeDamage" })
                }}
              >
                Take Damage
              </button>
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "healHP" })
                }}
              >
                Heal HP
              </button>
            </div>
          </div>
          <h2 className="heading">Money</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Uni-Credits / Gold</h3>
              <h4 className="item-container__terheading">Current Savings: {charSheetState.charSheet.gold} Gold</h4>
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "payMoney" })
                }}
              >
                Pay Money
              </button>
              <button
                className="button"
                onClick={() => {
                  charSheetDispatch({ type: "showPopupForm" })
                  charSheetDispatch({ type: "changePopupForm", data: "recieveMoney" })
                }}
              >
                Recieve Money
              </button>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Actions</h2>
          <div className="cw__container">
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "attack" })
              }}
            >
              Attack
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "roll" })
              }}
            >
              Roll Dice
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "makeSkillCheck" })
              }}
            >
              Make a Skill Check
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "useItem" })
              }}
            >
              Use an Item
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "useAbility" })
              }}
            >
              Use an Ability
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "useThing" })
              }}
            >
              Use a Thing
            </button>
            <button
              className="button"
              onClick={() => {
                charSheetDispatch({ type: "showPopupForm" })
                charSheetDispatch({ type: "changePopupForm", data: "rest" })
              }}
            >
              Take a Rest
            </button>
            <Link to={`/character/${charSheetState.charSheet._id}/inventory`}>
              <button className="button">Equip and Unequip</button>
            </Link>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Notifications</h2>
          <div className="cw__container">
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Attacked</em> with WEAPON and rolled 17
            </p>
            <p>
              <strong>Player 2: </strong>
              <em className="highlight">Used Ability</em> ABILITY and rolled 17
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Paid Money</em> 30 GOLD to PLAYER 2
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Sold Item</em> WEAPON / WEARABLE / ITEM
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Rolled D20</em> and got 17
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Leveled Up</em> to level 5
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Added Excelence Chip</em>
            </p>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Energy Points</h2>
          <div className="cw__container">
            <div className="item-container item-container--overflowx">
              <h3 className="item-container__heading">Energy Points Table</h3>
              <h4 className="item-container__subheading item-container__terheading--adjusted">Used When You Make a Skill Check</h4>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Physique</h4>
              <table className="energy-points-table">
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Strength</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point used"></span>
                      <span className="energy-point used"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Constitution</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Intelligence</h4>
              <table className="energy-points-table">
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Academic</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Technical</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Dexterity</h4>
              <table className="energy-points-table">
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Reflex</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Speed</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Charisma</h4>
              <table className="energy-points-table">
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Speech</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Performance</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="item-container__line"></div>
              <h4 className="item-container__subheading item-container__subheading--darker">Combat</h4>
              <table className="energy-points-table">
                <tbody>
                  <tr>
                    <td className="td--fixedwidth">Ranged</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="td--fixedwidth">Melee</td>
                    <td>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
                      <span className="energy-point"></span>
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

export default Gameplay
