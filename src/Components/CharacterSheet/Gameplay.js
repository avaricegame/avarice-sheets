import React, { useState } from "react"
import { Link } from "react-router-dom"

// ACTION FORM COMPONENTS
import Roll from "./Actions/Roll"
import Attack from "./Actions/Attack"
import UseAbility from "./Actions/UseAbility"
import UseSkill from "./Actions/UseSkill"
import PayMoney from "./Actions/PayMoney"
import SellItems from "./Actions/SellItems"

function Gameplay(props) {
  const [roll, setRoll] = useState(false)
  const rollHandler = (bool) => {
    setRoll(bool)
  }
  const [attack, setAttack] = useState(false)
  const attackHandler = (bool) => {
    setAttack(bool)
  }
  const [useAbility, setUseAbility] = useState(false)
  const useAbilityHandler = (bool) => {
    setUseAbility(bool)
  }
  const [useSkill, setUseSkill] = useState(false)
  const useSkillHandler = (bool) => {
    setUseSkill(bool)
  }
  const [payMoney, setPayMoney] = useState(false)
  const payMoneyHandler = (bool) => {
    setPayMoney(bool)
  }
  const [sellItems, setSellItems] = useState(false)
  const sellItemsHandler = (bool) => {
    setSellItems(bool)
  }

  const openHeal = () => {
    props.healHandler(true)
  }
  const openTakeDamage = () => {
    props.takeDamageHandler(true)
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
              <h4 className="item-container__subheading">Max HP: {props.charSheet.level * 10 + 10}</h4>
              <h4 className="item-container__terheading">Current HP: {props.charSheet.currentHP}</h4>
              <button onClick={openTakeDamage}>Take Damage</button>
              <button onClick={openHeal}>Heal HP</button>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Actions</h2>
          <button onClick={attackHandler}>Attack</button>
          <button onClick={useAbilityHandler}>Use Ability</button>
          <button onClick={useSkillHandler}>Use Skill</button>
          <button onClick={payMoneyHandler}>Pay Money</button>
          <button onClick={sellItemsHandler}>Sell Inventory Items</button>
          <button onClick={rollHandler}>Roll Die</button>
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
          <h2 className="heading">Quick Links</h2>
          <div className="cw__container">
            <Link to="/character/inventory">
              <button>Equip / Unequip Armour</button>
            </Link>
            <Link to="/character/abilities">
              <button>See My Abilities</button>
            </Link>
            <Link to="/character/abilities">
              <button>Character Information</button>
            </Link>
            <Link to="/character/info">
              <button>My Race and Class</button>
            </Link>
            <Link to="/character/info">
              <button>Campaign Info</button>
            </Link>
            <Link to="/character/stats">
              <button>See My Stats</button>
            </Link>
            <Link to="/character/stats">
              <button>Excellence Chips</button>
            </Link>
            <Link to="/character/stats">
              <button>Level Up</button>
            </Link>
            <Link to="/character/notes">
              <button>My Notes</button>
            </Link>
            <Link to="/character/messages">
              <button>Messages</button>
            </Link>
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
      {roll ? <Roll rollHandler={rollHandler} /> : ""}
      {attack ? <Attack attackHandler={attackHandler} /> : ""}
      {useAbility ? <UseAbility useAbilityHandler={useAbilityHandler} abilityArray={props.abilityArray} charSheet={props.charSheet} /> : ""}
      {useSkill ? <UseSkill useSkillHandler={useSkillHandler} /> : ""}
      {payMoney ? <PayMoney payMoneyHandler={payMoneyHandler} CSID={props.CSID} /> : ""}
      {sellItems ? <SellItems sellItemsHandler={sellItemsHandler} CSID={props.CSID} charSheet={props.charSheet} /> : ""}
    </>
  )
}

export default Gameplay
