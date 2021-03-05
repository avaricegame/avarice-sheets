import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

// selectors
import { selectPopupFormType } from "../../redux/app/app.selectors"

import PopupFormTypes from "./popup-form.types"

// import the form components
import NewCharacterSheet from "./forms/homepage/new-character-sheet.form"
import NewCampaignSheet from "./forms/homepage/new-campaign-sheet.form"
// CHARACTER SHEET
import Attack from "./forms/character-sheet/attack.form" // TO DO
import MakeACheck from "./forms/character-sheet/make-a-check.form"
import UseAnItem from "./forms/character-sheet/use-an-item.form"
import UseAnAbility from "./forms/character-sheet/use-an-ability.form"
import TakeARest from "./forms/character-sheet/take-a-rest.form"
import RollDice from "./forms/character-sheet/roll-dice.form"
import TakeOrHealDamage from "./forms/character-sheet/take-or-heal-damage.form"
import PayOrRecieveMoney from "./forms/character-sheet/pay-or-recieve-money.form"
import AddNewWeapon from "./forms/character-sheet/add-new-weapon.form" // TO DO (and edit)
import AddNewWearable from "./forms/character-sheet/add-new-wearable.form" // TO DO (and edit)
import AddNewItem from "./forms/character-sheet/add-new-item.form" // TO DO (and edit)
import SellInventoryItem from "./forms/character-sheet/sell-inventory-item.form" // TO DO
import LevelUp from "./forms/character-sheet/level-up.form"
import NewCharacterLog from "./forms/character-sheet/new-character-log.form"
// CAMPAIGN SHEET
// gameplay perform a check
// gameplay dispense damage
// gameplay give or take money
// gameplay buy or sell items
// gameplay give or take items
// gameplay rest party
// gameplay level up party
// create/generate interactable gameplay
// combat attack
// combat make a check
// combat take damage
// combat heal
// combat roll dice
// open players suronis
import NewCaptainsLog from "./forms/campaign-sheet/new-captains-log.form"
import NewPersonalLog from "./forms/campaign-sheet/new-personal-log.form"
// edit campaign details
import AddNewNPC from "./forms/campaign-sheet/add-new-npc.form"
import AddNewEnvironment from "./forms/campaign-sheet/add-new-environment.form"
// create new mission (and edit)
import MoveInteractable from "./forms/campaign-sheet/move-interactable.form"
import CopyInteractable from "./forms/campaign-sheet/copy-interactable.form"
// generate npc
// generate environment
// generate inventory item

import "./popup-form.styles.scss"

export const PopupFormBackground = ({ children, ...otherProps }) => (
  <div className="popupform__background" {...otherProps}>
    {children}
  </div>
)

export const PopupFormHeading = ({ children }) => (
  <h3 className="popupform__heading">{children ? children : "Blank Form"}</h3>
)

const PopupForm = ({ popupFormType }) => (
  <div className="popupform__popup">
    {/*  HOMEPAGE FORMS */}
    {popupFormType === PopupFormTypes.NEW_CHARACTER_SHEET ? <NewCharacterSheet /> : null}
    {popupFormType === PopupFormTypes.NEW_CAMPAIGN_SHEET ? <NewCampaignSheet /> : null}
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
    {/* CAMPAIGN FORMS */}
    {popupFormType === PopupFormTypes.ADD_NEW_CAPTAINS_LOG ? <NewCaptainsLog /> : null}
    {popupFormType === PopupFormTypes.ADD_NEW_PERSONAL_LOG ? <NewPersonalLog /> : null}
    {/* PLANNING FORMS */}
    {popupFormType === PopupFormTypes.ADD_A_NEW_NPC ? <AddNewNPC /> : null}
    {popupFormType === PopupFormTypes.ADD_A_NEW_ENVIRONMENT ? <AddNewEnvironment /> : null}
    {popupFormType === PopupFormTypes.MOVE_INTERACTABLE_TO_DIFFERENT_MISSION ? (
      <MoveInteractable />
    ) : null}
    {popupFormType === PopupFormTypes.COPY_INTERACTABLE_TO_DIFFERENT_MISSION ? (
      <CopyInteractable />
    ) : null}
  </div>
)

const mapStateToProps = createStructuredSelector({
  popupFormType: selectPopupFormType,
})

export default connect(mapStateToProps)(PopupForm)
