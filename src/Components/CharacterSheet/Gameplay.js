import React, { useState, useContext } from "react"

import StateContext from "../../StateContext"

// ACTION FORM COMPONENTS
import Roll from "./Actions/Roll"
import Attack from "./Actions/Attack"
import UseAbility from "./Actions/UseAbility"
import UseSkill from "./Actions/UseSkill"
//import PayMoney from "./Actions/PayMoney"
import SellItems from "./Actions/SellItems"
import MakeCheck from "./Actions/MakeCheck"
import UseItem from "./Actions/UseItem"

function Gameplay(props) {
  const charSheetState = useContext(StateContext)

  const [roll, setRoll] = useState(false)
  const rollHandler = (bool) => {
    setRoll(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [attack, setAttack] = useState(false)
  const attackHandler = (bool) => {
    setAttack(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [useAbility, setUseAbility] = useState(false)
  const useAbilityHandler = (bool) => {
    setUseAbility(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [useSkill, setUseSkill] = useState(false)
  const useSkillHandler = (bool) => {
    setUseSkill(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // const [payMoney, setPayMoney] = useState(false)
  // const payMoneyHandler = (bool) => {
  //   setPayMoney(bool)
  //   bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  // }
  const [sellItems, setSellItems] = useState(false)
  const sellItemsHandler = (bool) => {
    setSellItems(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [makeCheck, setMakeCheck] = useState(false)
  const makeCheckHandler = (bool) => {
    setMakeCheck(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [useItem, setUseItem] = useState(false)
  const useItemHandler = (bool) => {
    setUseItem(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const openHeal = () => {
    props.healHandler(true)
  }
  const openTakeDamage = () => {
    props.takeDamageHandler(true)
  }
  const openPayMoney = () => {
    props.payMoneyHandler(true)
  }
  const openRecieveMoney = () => {
    props.recieveMoneyHandler(true)
  }
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
              <button className="button" onClick={openTakeDamage}>
                Take Damage
              </button>
              <button className="button" onClick={openHeal}>
                Heal HP
              </button>
            </div>
          </div>
          <h2 className="heading">Money</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Uni-Credits / Gold</h3>
              <h4 className="item-container__terheading">Current Savings: {charSheetState.charSheet.gold} Gold</h4>
              {/* <p className="item-container__money-amount">{charSheetState.charSheet.gold} Gold</p> */}
              <button className="button" onClick={openPayMoney}>
                Pay Money
              </button>
              <button className="button" onClick={openRecieveMoney}>
                Recieve Money
              </button>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Actions</h2>
          <div className="cw__container">
            <button className="button" onClick={attackHandler}>
              Attack
            </button>
            <button className="button" onClick={makeCheckHandler}>
              Make a Skill Check
            </button>
            <button className="button" onClick={useItemHandler}>
              Use an Item
            </button>
            <button className="button" onClick={useAbilityHandler}>
              Use an Ability
            </button>
            <button className="button" onClick={useSkillHandler}>
              Use a Thing
            </button>
            <button className="button">Equip and Unequip</button>
            {/* <button className="button" onClick={payMoneyHandler}>Pay Money</button> */}
            {/* <button className="button" onClick={sellItemsHandler}>
              Sell Inventory Items
            </button> */}

            <button className="button" onClick={rollHandler}>
              Roll Die
            </button>
            <button className="button">Take a Short Rest</button>
            <button className="button">Take a Long Rest</button>
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
            {/* <button className="button">Take a Short Rest</button>
            <button className="button">Take a Long Rest</button> */}
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
      {roll ? <Roll rollHandler={rollHandler} /> : ""}
      {attack ? <Attack attackHandler={attackHandler} charSheet={props.charSheet} equippedWeapons={props.equippedWeapons} /> : ""}
      {useAbility ? <UseAbility useAbilityHandler={useAbilityHandler} abilityArray={props.abilityArray} charSheet={props.charSheet} /> : ""}
      {useSkill ? <UseSkill useSkillHandler={useSkillHandler} equipmentMod={props.equipmentMod} charSheet={props.charSheet} /> : ""}
      {/* {payMoney ? <PayMoney payMoneyHandler={payMoneyHandler} CSID={props.CSID} /> : ""} */}
      {sellItems ? <SellItems sellItemsHandler={sellItemsHandler} CSID={props.CSID} charSheet={props.charSheet} /> : ""}
      {makeCheck ? <MakeCheck makeCheckHandler={makeCheckHandler} charSheet={props.charSheet} theRace={props.theRace} theClass={props.theClass} baseEquipmentMod={props.baseEquipmentMod} /> : ""}
      {useItem ? <UseItem equippedItems={props.equippedItems} useItemHandler={useItemHandler} /> : ""}
    </>
  )
}

export default Gameplay
