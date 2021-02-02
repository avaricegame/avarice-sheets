import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectPopupFormType } from "../../redux/app/app.selectors"

import PopupFormTypes from "./popup-form.types"

// import the form components
import Attack from "./forms/character-sheet/attack.form"
import MakeACheck from "./forms/character-sheet/make-a-check.form"
import UseAnItem from "./forms/character-sheet/use-an-item.form"
import UseAnAbility from "./forms/character-sheet/use-an-ability.form"
import TakeARest from "./forms/character-sheet/take-a-rest.form"
import RollDice from "./forms/character-sheet/roll-dice.form"
import TakeOrHealDamage from "./forms/character-sheet/take-or-heal-damage.form"
import PayOrRecieveMoney from "./forms/character-sheet/pay-or-recieve-money.form"
import AddNewWeapon from "./forms/character-sheet/add-new-weapon.form"
import AddNewWearable from "./forms/character-sheet/add-new-wearable.form"
import AddNewItem from "./forms/character-sheet/add-new-item.form"
import SellInventoryItem from "./forms/character-sheet/sell-inventory-item.form"
import LevelUp from "./forms/character-sheet/level-up.form"
import NewCharacterLog from "./forms/character-sheet/new-character-log.form"

import "./popup-form.styles.scss"

export const PopupFormHeading = ({ children }) => (
  <h3 className="popupform__heading">{children ? children : "Blank Form"}</h3>
)

const PopupForm = ({ popupFormType }) => (
  <div className="popupform__background">
    <div className="popupform__popup">
      {/* GAMEPLAY ACTIONS */}
      {popupFormType === PopupFormTypes.ATTACK ? <Attack /> : null}
      {popupFormType === PopupFormTypes.MAKE_A_CHECK ? <MakeACheck /> : null}
      {popupFormType === PopupFormTypes.USE_AN_ITEM ? <UseAnItem /> : null}
      {popupFormType === PopupFormTypes.USE_AN_ABILITY ? <UseAnAbility /> : null}
      {popupFormType === PopupFormTypes.TAKE_A_REST ? <TakeARest /> : null}
      {popupFormType === PopupFormTypes.ROLL_DICE ? <RollDice /> : null}
      {/* GAMEPLAY FORMS */}
      {popupFormType === PopupFormTypes.TAKE_OR_HEAL_DAMAGE ? <TakeOrHealDamage /> : null}
      {popupFormType === PopupFormTypes.PAY_OR_RECIEVE_MONEY ? <PayOrRecieveMoney /> : null}
      {/* INVENTORY FORMS */}
      {popupFormType === PopupFormTypes.ADD_A_NEW_WEAPON ? <AddNewWeapon /> : null}
      {popupFormType === PopupFormTypes.ADD_A_NEW_WEARABLE ? <AddNewWearable /> : null}
      {popupFormType === PopupFormTypes.ADD_A_NEW_ITEM ? <AddNewItem /> : null}
      {popupFormType === PopupFormTypes.SELL_INVENTORY_ITEM ? <SellInventoryItem /> : null}
      {/* STATS FORMS */}
      {popupFormType === PopupFormTypes.LEVEL_UP ? <LevelUp /> : null}
      {/* INFO FORMS */}
      {popupFormType === PopupFormTypes.NEW_CHARACTER_LOG ? <NewCharacterLog /> : null}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  popupFormType: selectPopupFormType,
})

export default connect(mapStateToProps)(PopupForm)
