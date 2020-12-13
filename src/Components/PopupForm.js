import React, { useContext } from "react"
import StateContext from "../StateContext"

// forms
import NewCharacterSheet from "./CharacterSheet/Forms/NewCharacterSheet"
import NewCampaignSheet from "./CampaignSheet/Forms/NewCampaignSheet"
// character sheet forms
import HealHP from "./CharacterSheet/Forms/HealHP"
import TakeDamage from "./CharacterSheet/Forms/TakeDamage"
import PayMoney from "./CharacterSheet/Forms/PayMoney"
import RecieveMoney from "./CharacterSheet/Forms/RecieveMoney"
import NewWeapon from "./CharacterSheet/Forms/NewWeapon"
import NewWearable from "./CharacterSheet/Forms/NewWearable"
import NewItem from "./CharacterSheet/Forms/NewItem"
import NewThing from "./CharacterSheet/Forms/NewThing"
import SellSomething from "./CharacterSheet/Forms/SellSomething"
import LevelUp from "./CharacterSheet/Forms/LevelUp"
import NewAbility from "./CharacterSheet/Forms/NewAbility"
import EditAbility from "./CharacterSheet/Forms/EditAbility"
import NewCharacterLog from "./CharacterSheet/Forms/NewCharacterLog"
import EditCharacterLog from "./CharacterSheet/Forms/EditCharacterLog"
import NewNote from "./CharacterSheet/Forms/NewNote"
import EditNote from "./CharacterSheet/Forms/EditNote"
// actions
import Attack from "./CharacterSheet/Actions/Attack"
import MakeCheck from "./CharacterSheet/Actions/MakeCheck"
import UseItem from "./CharacterSheet/Actions/UseItem"
import UseAbility from "./CharacterSheet/Actions/UseAbility"
import UseThing from "./CharacterSheet/Actions/UseThing"
import Roll from "./CharacterSheet/Actions/Roll"
import Rest from "./CharacterSheet/Actions/Rest"

// default
import DefaultPopupForm from "./DefaultPopupForm"

function PopupForm() {
  const appState = useContext(StateContext)
  return (
    <>
      <div className="popupform__background">
        <div className="popupform__popup">
          {appState.currentPopupForm === "" ? <DefaultPopupForm /> : ""}
          {appState.currentPopupForm === "newCampaignSheet" ? <NewCampaignSheet /> : ""}
          {appState.currentPopupForm === "newCharacterSheet" ? <NewCharacterSheet /> : ""}
          {appState.currentPopupForm === "healHP" ? <HealHP /> : ""}
          {appState.currentPopupForm === "takeDamage" ? <TakeDamage /> : ""}
          {appState.currentPopupForm === "payMoney" ? <PayMoney /> : ""}
          {appState.currentPopupForm === "recieveMoney" ? <RecieveMoney /> : ""}
          {appState.currentPopupForm === "newWeapon" ? <NewWeapon /> : ""}
          {appState.currentPopupForm === "newWearable" ? <NewWearable /> : ""}
          {appState.currentPopupForm === "newItem" ? <NewItem /> : ""}
          {appState.currentPopupForm === "newThing" ? <NewThing /> : ""}
          {appState.currentPopupForm === "sellSomething" ? <SellSomething /> : ""}
          {appState.currentPopupForm === "levelUp" ? <LevelUp /> : ""}
          {appState.currentPopupForm === "newAbility" ? <NewAbility /> : ""}
          {appState.currentPopupForm === "editAbility" ? <EditAbility /> : ""}
          {appState.currentPopupForm === "newCharacterLog" ? <NewCharacterLog /> : ""}
          {appState.currentPopupForm === "editCharacterLog" ? <EditCharacterLog /> : ""}
          {appState.currentPopupForm === "newNote" ? <NewNote /> : ""}
          {appState.currentPopupForm === "editNote" ? <EditNote /> : ""}
          {appState.currentPopupForm === "attack" ? <Attack /> : ""}
          {appState.currentPopupForm === "makeSkillCheck" ? <MakeCheck /> : ""}
          {appState.currentPopupForm === "useItem" ? <UseItem /> : ""}
          {appState.currentPopupForm === "useAbility" ? <UseAbility /> : ""}
          {appState.currentPopupForm === "useThing" ? <UseThing /> : ""}
          {appState.currentPopupForm === "roll" ? <Roll /> : ""}
          {appState.currentPopupForm === "rest" ? <Rest /> : ""}
        </div>
      </div>
    </>
  )
}

export default PopupForm
