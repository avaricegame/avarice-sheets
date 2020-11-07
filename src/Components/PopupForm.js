import React, { useContext } from "react"
import StateContext from "../StateContext"

// forms
import NewCharacterSheet from "./CharacterSheet/Forms/NewCharacterSheet"
import NewCampaignSheet from "./CampaignSheet/Forms/NewCampaignSheet"

function PopupForm() {
  const appState = useContext(StateContext)
  return (
    <>
      <div className="popupform__background">
        <div className="popupform__popup">
          {appState.currentPopupForm === "newCampaignSheet" ? <NewCampaignSheet /> : ""}
          {appState.currentPopupForm === "newCharacterSheet" ? <NewCharacterSheet /> : ""}
        </div>
      </div>
    </>
  )
}

export default PopupForm
