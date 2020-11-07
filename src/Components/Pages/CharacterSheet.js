import React, { useState, useEffect, useContext } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
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
import FlashMessage from "../FlashMessage"

// PAGES
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../CharacterSheet/Notes"
import Messages from "../Messages"
import About from "../CharacterSheet/About"

function CharacterSheet(props) {
  // bring in my app-wide state and dispatch from App.js
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  // need to load in: character sheet, the appropriate race and class, and the appropriate ability tree
  // i dont want any use effects to run until the data is loaded
  const [charSheetIsLoading, setCharSheetIsLoading] = useState(true)
  const [raceIsLoading, setRaceIsLoading] = useState(true)
  const [classIsLoading, setClassIsLoading] = useState(true)
  const [abilityTreeIsLoading, setAbilityTreeIsLoading] = useState(true)

  // create object to set charSheet initial state
  /* [TO DO] look into setting up my state I am loading on this page and passing down as props in the charSheetState instead */
  const initialState = {
    charSheet: {},
    theClass: {},
    theRace: {},
    abilityTree: {},
    allAbilitiesArray: [],
    equippedWeapons: [],
    equippedWearables: [],
    equippedItems: [],
    holstersUsed: 0,
    holstersAvailable: 0,
    slotsUsed: 0,
    slotsAvailable: 0,
    wearableArmourBonus: 0,
  }

  // create a second context and dispatch -- this one for the character sheet itself
  const [charSheetState, charSheetDispatch] = useImmerReducer(charSheetReducer, initialState)

  // character sheet reducer for all character sheet related dispatches
  function charSheetReducer(draft, action) {
    switch (action.type) {
      case "setCharSheet":
        draft.charSheet = action.data
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

  const [theClass, setTheClass] = useState({})
  const [theRace, setTheRace] = useState({})
  const [abilityTree, setAbilityTree] = useState({})

  // pull in character sheet data by the character sheet id from app state
  useEffect(() => {
    if (appState.charSheetID === undefined || appState.charSheetID === null) {
      console.log("Error loading character sheet resources.")
    } else {
      Axios.post(`/character/one`, {
        token: appState.user.token,
        sheetid: appState.charSheetID,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "setCharSheet",
            data: response.data,
          })
          setCharSheetIsLoading(false)
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [appState.charSheetID, charSheetDispatch])

  // once character sheet data is loaded, pull in specific race and class data
  // useEffect(() => {
  //   if (!charSheetIsLoading) {
  //     Axios.get("/loadrace", {
  //       params: {
  //         raceID: charSheet.raceID,
  //       },
  //     }).then(function (response) {
  //       setTheRace(response.data[0])
  //       Axios.get("/loadclass", {
  //         params: {
  //           classID: charSheet.classID,
  //         },
  //       }).then(function (response) {
  //         setTheClass(response.data[0])
  //         Axios.get("/loadabilitytree", {
  //           params: {
  //             abilityTreeID: response.data[0].abilityTreeID,
  //           },
  //         }).then(function (response) {
  //           setAbilityTree(response.data[0])
  //           setIsLoading(false)
  //         })
  //       })
  //     })
  //   }
  // }, [charSheetState.charSheet, charSheetIsLoading])

  // once class (and race) data is loaded, pull in the ability tree information
  // useEffect(() => {
  //   if (!raceIsLoading && !classIsLoading) {
  //         Axios.get("/loadabilitytree", {
  //           params: {
  //             abilityTreeID: response.data[0].abilityTreeID,
  //           },
  //         }).then(function (response) {
  //           setAbilityTree(response.data[0])
  //           setIsLoading(false)
  //         })
  //       }
  // }, [charSheetState.abilityTree, raceIsLoading, classIsLoading])

  ///////////////////////////////////////////////////////////////////////// INVENTORY EQUIPMENT, HOLSTERS, SLOTS, AND ARMOUR
  // set the variables in state
  const [abilityArray, setAbilityArray] = useState([])

  // map through the ability tree and level settings to create an array of the current usable abilities
  // useEffect(() => {
  //   if (!charSheetIsLoading && !abilityTreeIsLoading) {
  //     // clear the ability array
  //     setAbilityArray([])
  //     // set at var to contain the most recent level up object, then map it
  //     let at = charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].abilityTree
  //     at.map((column, index) => {
  //       // LOGIC FOR DETERMINING USABLE ABILITIES //
  //       /* [TO DO] rewrite how this data is getting calculated */
  //       let corrColumn = `column${index + 1}`
  //       let ability1 = charSheetState.abilityTree[corrColumn][column.one - 1]
  //       let ability2 = charSheetState.abilityTree[corrColumn][column.two + (5 - 1)]
  //       let ability3 = charSheetState.abilityTree[corrColumn][column.three + (10 - 1)]
  //       let ability4 = charSheetState.abilityTree[corrColumn][column.four + (15 - 1)]
  //       // creating temp empty array to push abilities onto
  //       let arrToAppend = []
  //       if (ability1 !== undefined) {
  //         arrToAppend.push(ability1)
  //       }
  //       if (ability2.key === 2) {
  //         arrToAppend.push(ability2)
  //       }
  //       if (ability3.key === 3) {
  //         arrToAppend.push(ability3)
  //       }
  //       if (ability4.key === 4) {
  //         arrToAppend.push(ability4)
  //       }
  //       // END LOGIC FOR DETERMINING USABLE ABILITIES //
  //       // concat the three temp arrays together -- once for each time through the loop
  //       setAbilityArray((prevAbilityArray) => {
  //         return prevAbilityArray.concat(arrToAppend)
  //       })
  //       return ""
  //     })
  //   }
  // }, [charSheetState.charSheet, charSheetState.abilityTree, charSheetIsLoading, abilityTreeIsLoading])

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
    if (!charSheetIsLoading) {
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
    console.log(armourMod)
    setArmourModifier(armourMod)
  }, [equippedItems, equippedWeapons, equippedWearables])

  ///////////////////////////////////////////////////////////////////////// BEGIN RENDERING THE PAGES
  if (appState.loggedIn) {
    if (1) {
      return (
        <StateContext.Provider value={charSheetState}>
          <DispatchContext.Provider value={charSheetDispatch}>
            <BrowserRouter>
              <CharacterSheetContainer>
                <Switch>
                  <Route path="/character/about">
                    <About />
                  </Route>
                  <Route path="/character/gameplay" exact>
                    <Gameplay armourModifier={armourModifier} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} />
                  </Route>
                  <Route path="/character/inventory" exact>
                    <Inventory holstersUsed={holstersUsed} slotsUsed={slotsUsed} holstersAvailable={holstersAvailable} slotsAvailable={slotsAvailable} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} />
                  </Route>
                  <Route path="/character/stats" exact>
                    <Stats />
                  </Route>
                  <Route path="/character/abilities" exact>
                    <Abilities />
                  </Route>
                  <Route path="/character/info" exact>
                    <Info />
                  </Route>
                  <Route path="/character/messages" exact>
                    <Messages />
                  </Route>
                  <Route path="/character/notes" exact>
                    <Notes />
                  </Route>
                </Switch>
              </CharacterSheetContainer>
              {appState.popupFormVisible ? <PopupForm /> : ""}
              {appState.flashMessagesDisplayed ? <FlashMessage /> : ""}
            </BrowserRouter>
          </DispatchContext.Provider>
        </StateContext.Provider>
      )
    } else {
      return <Loader />
    }
  } else {
    return <Error />
  }
}

export default CharacterSheet
