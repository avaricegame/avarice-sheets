import React, { useState, useEffect, useContext } from "react"
import { BrowserRouter, Switch, Route, useParams, useHistory, Redirect } from "react-router-dom"
import Axios from "axios"
import { useImmerReducer } from "use-immer"

// CONTEXT
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

// COMPONENTS
import CharacterSheetContainer from "../CharacterSheetContainer"
import Loader from "../Loader"
import Error from "../Error"
import PopupForm from "../PopupForm"

// PAGES
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../CharacterSheet/Notes"
import Messages from "../Messages"
import About from "../CharacterSheet/About"

function CharacterSheet() {
  // bring in my app-wide state and dispatch from App.js
  const appState = useContext(StateContext)

  const history = useHistory()

  // pull in charid from url params
  const { charid } = useParams()

  // need to load in: character sheet, the appropriate race and class, and the appropriate ability tree
  // all put together on the backend
  const [charSheetIsLoading, setCharSheetIsLoading] = useState(true)
  const [charSheetFound, setCharSheetFound] = useState(false)

  // create object to set charSheet initial state
  /* [TO DO] look into setting up my state I am loading on this page and passing down as props in the charSheetState instead */
  const initialState = {
    charSheet: {},
    allAbilitiesArray: [],
    equippedWeapons: [],
    equippedWearables: [],
    equippedItems: [],
    holstersUsed: 0,
    holstersAvailable: 0,
    slotsUsed: 0,
    slotsAvailable: 0,
    wearableArmourBonus: 0,
    currentPopupForm: "",
    popupFormVisible: false,
    flashMessages: [],
  }

  // create a second context and dispatch -- this one for the character sheet itself
  const [charSheetState, charSheetDispatch] = useImmerReducer(charSheetReducer, initialState)

  // character sheet reducer for all character sheet related dispatches
  function charSheetReducer(draft, action) {
    switch (action.type) {
      case "setCharSheet":
        draft.charSheet = action.data
        break
      case "setRace":
        draft.theRace = action.data
        break
      case "setClass":
        draft.theClass = action.data
        break
      case "flashMessage":
        draft.flashMessages.push(action.value)
        break
      case "changePopupForm":
        draft.currentPopupForm = action.data
        break
      case "showPopupForm":
        draft.popupFormVisible = true
        document.body.style.overflow = "hidden"
        break
      case "hidePopupForm":
        draft.popupFormVisible = false
        document.body.style.overflow = "unset"
        break
      case "healHP":
        draft.charSheet.currentHP = draft.charSheet.currentHP + parseInt(action.value)
        break
      case "takeDamage":
        draft.charSheet.currentHP = draft.charSheet.currentHP - parseInt(action.value)
        break
      case "payMoney":
        draft.charSheet.gold = draft.charSheet.gold - parseInt(action.value)
        break
      case "recieveMoney":
        draft.charSheet.gold = draft.charSheet.gold + parseInt(action.value)
        break
      case "addNewWeapon":
        draft.charSheet.weapons.push(action.value)
        break
      case "addNewItem":
        draft.charSheet.items.push(action.value)
        break
      case "addNewWearable":
        draft.charSheet.wearables.push(action.value)
        break
      case "deleteWeapon":
        const weaponsindex = draft.charSheet.weapons.findIndex((weapon) => {
          return weapon.id === action.value
        })
        if (weaponsindex > -1) {
          draft.charSheet.weapons.splice(weaponsindex, 1)
        }
        break
      case "deleteItem":
        const itemsindex = draft.charSheet.items.findIndex((item) => {
          return item.id === action.value
        })
        if (itemsindex > -1) {
          draft.charSheet.items.splice(itemsindex, 1)
        }
        break
      case "deleteWearable":
        const wearablesindex = draft.charSheet.wearables.findIndex((wearable) => {
          return wearable.id === action.value
        })
        if (wearablesindex > -1) {
          draft.charSheet.wearables.splice(wearablesindex, 1)
        }
        break
      case "removeLevel":
        draft.charSheet.levelUps.pop()
        draft.charSheet.level = draft.charSheet.level - 1
        break
      case "levelUp":
        draft.charSheet.levelUps.push(action.value)
        draft.charSheet.level = draft.charSheet.level + 1
        break
      case "addEC":
        draft.charSheet.excellenceChips = draft.charSheet.excellenceChips + 1
        break
      case "useEC":
        draft.charSheet.excellenceChips = draft.charSheet.excellenceChips - 1
        break
      case "addNewAbility":
        draft.charSheet.customAbilities.push(action.value)
        break
      case "deleteAbility":
        const customabilitiesindex = draft.charSheet.customAbilities.findIndex((ability) => {
          return ability.id === action.value
        })
        if (customabilitiesindex > -1) {
          draft.charSheet.customAbilities.splice(customabilitiesindex, 1)
        }
        break
      case "addNewCharacterLog":
        draft.charSheet.characterLog.push(action.value)
        break
      case "deleteCharacterLog":
        const characterlogindex = draft.charSheet.characterLog.findIndex((log) => {
          return log.id === action.value
        })
        if (characterlogindex > -1) {
          draft.charSheet.characterLog.splice(characterlogindex, 1)
        }
        break
      case "addNewNote":
        draft.charSheet.notes.push(action.value)
        break
      case "deleteNote":
        draft.charSheet.notes.splice(action.value, 1)
        break
      case "equipWeapon":
        const weaponindex2 = draft.charSheet.weapons.findIndex((weapon) => {
          return weapon.id === action.value
        })
        if (weaponindex2 > -1) {
          draft.charSheet.weapons[weaponindex2].equipped = true
        }
        break
      case "unequipWeapon":
        const weaponindex3 = draft.charSheet.weapons.findIndex((weapon) => {
          return weapon.id === action.value
        })
        if (weaponindex3 > -1) {
          draft.charSheet.weapons[weaponindex3].equipped = false
        }
        break
      case "equipItem":
        const itemindex2 = draft.charSheet.items.findIndex((item) => {
          return item.id === action.value
        })
        if (itemindex2 > -1) {
          draft.charSheet.items[itemindex2].equipped = true
        }
        break
      case "unequipItem":
        const itemindex3 = draft.charSheet.items.findIndex((item) => {
          return item.id === action.value
        })
        if (itemindex3 > -1) {
          draft.charSheet.items[itemindex3].equipped = false
        }
        break
      case "equipWearable":
        const wearableindex2 = draft.charSheet.wearables.findIndex((wearable) => {
          return wearable.id === action.value
        })
        if (wearableindex2 > -1) {
          draft.charSheet.wearables[wearableindex2].equipped = true
        }
        break
      case "unequipWearable":
        const wearableindex3 = draft.charSheet.wearables.findIndex((wearable) => {
          return wearable.id === action.value
        })
        if (wearableindex3 > -1) {
          draft.charSheet.wearables[wearableindex3].equipped = false
        }
        break
      case "setEquippedWeapons":
        break
      default:
        break
    }
  }

  // ******************** BEGIN ALL USE EFFECT LOGIC ******************** //

  // pull in character sheet data by the character sheet id from app state
  useEffect(() => {
    Axios.get(`/character/${charid}`, {
      headers: {
        Authorization: "Bearer " + appState.user.token,
      },
    })
      .then(function (response) {
        console.log(response.data)
        charSheetDispatch({
          type: "setCharSheet",
          data: response.data,
        })
        setCharSheetFound(true)
        setCharSheetIsLoading(false)
      })
      .catch(function (e) {
        console.log(e)
      })
    console.log("USE EFFECT FOR FETCHING AND SETTING CHAR SHEET DATA JUST RAN")
  }, [charid, charSheetDispatch, appState.user.token])

  ///////////////////////////////////////////////////////////////////////// INVENTORY EQUIPMENT, HOLSTERS, SLOTS, AND ARMOUR
  // set the variables in state
  const [abilityArray, setAbilityArray] = useState([])

  // map through the ability tree and level settings to create an array of the current usable abilities
  useEffect(() => {
    if (!charSheetIsLoading && charSheetState.charSheet.levelUps) {
      // clear the ability array
      setAbilityArray([])
      // set at var to contain the most recent level up object, then map it
      let tree = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].abilityTree.columns
      tree.map((column, index) => {
        // LOGIC FOR DETERMINING USABLE ABILITIES //
        /* [TO DO] rewrite how this data is getting calculated */
        let corrColumn = `column${index + 1}`
        let ability1 = charSheetState.charSheet.abilityTree[corrColumn][column.one - 1]
        let ability2 = charSheetState.charSheet.abilityTree[corrColumn][column.two + (5 - 1)]
        let ability3 = charSheetState.charSheet.abilityTree[corrColumn][column.three + (10 - 1)]
        let ability4 = charSheetState.charSheet.abilityTree[corrColumn][column.four + (15 - 1)]
        // creating temp empty array to push abilities onto
        let arrToAppend = []
        if (ability1 !== undefined) {
          arrToAppend.push(ability1)
        }
        if (ability2.key === 2) {
          arrToAppend.push(ability2)
        }
        if (ability3.key === 3) {
          arrToAppend.push(ability3)
        }
        if (ability4.key === 4) {
          arrToAppend.push(ability4)
        }
        // END LOGIC FOR DETERMINING USABLE ABILITIES //
        // concat the three temp arrays together -- once for each time through the loop
        setAbilityArray((prevAbilityArray) => {
          return prevAbilityArray.concat(arrToAppend)
        })
        return ""
      })
    }
    console.log("useeffect for setting ability array just ran")
  }, [charSheetState.charSheet.levelUps, charSheetState.charSheet.abilityTree, charSheetIsLoading])

  ///////////////////////////////////////////////////////////////////////// INVENTORY EQUIPMENT, HOLSTERS, SLOTS, AND ARMOUR
  // set the variables in state
  const [equippedWeapons, setEquippedWeapons] = useState([])
  const [equippedItems, setEquippedItems] = useState([])
  const [equippedWearables, setEquippedWearables] = useState([])
  const [holstersUsed, setHolstersUsed] = useState()
  const [slotsUsed, setSlotsUsed] = useState()
  const [holstersAvailable, setHolstersAvailable] = useState()
  const [slotsAvailable, setSlotsAvailable] = useState()
  const [armourModifier, setArmourModifier] = useState()

  // filter through the inventory items to create equipped arrays
  useEffect(() => {
    if (charSheetState.charSheet.items && charSheetState.charSheet.weapons && charSheetState.charSheet.wearables) {
      setEquippedItems(
        charSheetState.charSheet.items.filter((item) => {
          return item.equipped
        })
      )
      setEquippedWeapons(
        charSheetState.charSheet.weapons.filter((weapon) => {
          return weapon.equipped
        })
      )
      setEquippedWearables(
        charSheetState.charSheet.wearables.filter((wearable) => {
          return wearable.equipped
        })
      )
    }
    console.log("useeffect for setting equipped inventory just ran")
  }, [charSheetState.charSheet, charSheetIsLoading])

  // reduce the equipped inventory arrays to determine holster and slot values
  useEffect(() => {
    // set holsters used
    let holstersU = equippedWeapons.reduce((total, num) => {
      return num.holstersReq + total
    }, 0)
    setHolstersUsed(holstersU)

    // set slots used
    let slotsU = equippedItems.reduce((total, num) => {
      return num.slotsReq + total
    }, 0)
    setSlotsUsed(slotsU)

    // set slots available
    let slotsA = equippedWearables.reduce((total, num) => {
      return num.slots + total
    }, 0)
    setSlotsAvailable(slotsA)

    // set holsters available
    let holstersA = equippedWearables.reduce((total, num) => {
      return num.holsters + total
    }, 0)
    setHolstersAvailable(holstersA)

    // set armour modifier value from wearables
    let armourMod = equippedWearables.reduce((total, num) => {
      return parseInt(num.modifiers.armour) + parseInt(total)
    }, 0)
    setArmourModifier(armourMod)
    console.log("useeffect for setting holster and slots just ran")
  }, [equippedItems, equippedWeapons, equippedWearables])

  ///////////////////////////////////////////////////////////////////////// BEGIN RENDERING THE PAGES
  if (appState.loggedIn) {
    if (!charSheetIsLoading) {
      if (charSheetState.charSheet.isOwner) {
        return (
          <StateContext.Provider value={charSheetState}>
            <DispatchContext.Provider value={charSheetDispatch}>
              <BrowserRouter>
                <CharacterSheetContainer charid={charid}>
                  <Switch>
                    <Route path="/character/:charid/about">
                      <About />
                    </Route>
                    <Route path="/character/:charid/gameplay" exact>
                      <Gameplay armourModifier={armourModifier} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} />
                    </Route>
                    <Route path="/character/:charid/inventory" exact>
                      <Inventory holstersUsed={holstersUsed} slotsUsed={slotsUsed} holstersAvailable={holstersAvailable} slotsAvailable={slotsAvailable} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} />
                    </Route>
                    <Route path="/character/:charid/stats" exact>
                      <Stats appState={appState} />
                    </Route>
                    <Route path="/character/:charid/abilities" exact>
                      <Abilities abilityArray={abilityArray} />
                    </Route>
                    <Route path="/character/:charid/info" exact>
                      <Info />
                    </Route>
                    <Route path="/character/:charid/messages" exact>
                      <Messages />
                    </Route>
                    <Route path="/character/:charid/notes" exact>
                      <Notes />
                    </Route>
                    <Redirect to={`/character/${charSheetState.charSheet._id}/gameplay`} />
                  </Switch>
                </CharacterSheetContainer>
                {charSheetState.popupFormVisible ? <PopupForm /> : ""}
              </BrowserRouter>
            </DispatchContext.Provider>
          </StateContext.Provider>
        )
      } else {
        // character sheet doesn't exist
        // or the user is not the owner
        // or the url does not point to anything
        return <Error />
      }
    } else {
      // character sheet is loading
      return <Loader />
    }
  } else {
    // user is not logged in
    history.push("/")
    window.location.reload()
    return ""
  }
}

export default CharacterSheet
