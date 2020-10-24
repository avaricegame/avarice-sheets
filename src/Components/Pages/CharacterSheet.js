import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Axios from "axios"
import { useImmerReducer } from "use-immer"

// CONTEXT
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

// COMPONENTS
import Header from "../CharacterSheet/Header"
import Footer from "../Footer"
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../CharacterSheet/Notes"
import Messages from "../Messages"
import Navigation from "../CharacterSheet/Navigation"
import About from "../CharacterSheet/About"
import FlashMessage from "../FlashMessage"
// UTILITY
import Loader from "../Loader"
// FORMS
import HealHP from "../CharacterSheet/Forms/HealHP"
import TakeDamage from "../CharacterSheet/Forms/TakeDamage"
import PayMoney from "../CharacterSheet/Forms/PayMoney"
import RecieveMoney from "../CharacterSheet/Forms/RecieveMoney"
import NewWeapon from "../CharacterSheet/Forms/NewWeapon"
import NewWearable from "../CharacterSheet/Forms/NewWearable"
import NewItem from "../CharacterSheet/Forms/NewItem"
import EditSuronis from "../CharacterSheet/Forms/EditSuronis"
import LevelUp from "../CharacterSheet/Forms/LevelUp"
import NewAbility from "../CharacterSheet/Forms/NewAbility"
import EditAbility from "../CharacterSheet/Forms/EditAbility"
import NewCharacterLog from "../CharacterSheet/Forms/NewCharacterLog"
import EditCharacterLog from "../CharacterSheet/Forms/EditCharacterLog"
import NewNote from "../CharacterSheet/Forms/NewNote"
import EditNote from "../CharacterSheet/Forms/EditNote"
import NewCharacterSheet from "../CharacterSheet/Forms/NewCharacterSheet"
// PAGES
import Home from "../Pages/Home"
import CampaignSheet from "../Pages/CampaignSheet"
import Profile from "../Pages/Profile"
import HomeAbout from "../Pages/About"

function CharacterSheet(props) {
  // ******************** SET THE CHARACTER SHEET STATE ******************** //
  const initialState = {
    charSheet: 0,
  }
  const [state, dispatch] = useImmerReducer(charSheetReducer, initialState)
  // ******************** SET THE REGULAR STATES ******************** //
  const [isLoading, setIsLoading] = useState(true)
  const [charSheet, setCharSheet] = useState(0)
  const [theClass, setTheClass] = useState({})
  const [theRace, setTheRace] = useState({})
  const [abilityTree, setAbilityTree] = useState({})
  const [abilityArray, setAbilityArray] = useState([])
  const [equippedWeapons, setEquippedWeapons] = useState([])
  const [equippedItems, setEquippedItems] = useState([])
  const [equippedWearables, setEquippedWearables] = useState([])

  const [holstersUsed, setHolstersUsed] = useState()
  const [slotsUsed, setSlotsUsed] = useState()
  const [holstersAvailable, setHolstersAvailable] = useState()
  const [slotsAvailable, setSlotsAvailable] = useState()

  const [equipmentMod, setEquipmentMod] = useState([]) // one of these for each skill, in the same order as the skills array in level ups
  const [baseEquipmentMod, setBaseEquipmentMod] = useState([]) // one of these for each base stat, in the order they are planned to be
  const [equipmentArmour, setEquipmentArmour] = useState()

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
      case "updateBaseStatsTempMod":
        draft.charSheet.baseStatsTempMod = action.value
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
      default:
        break
    }
  }

  // ******************** OPENING FORMS CALLBACK FUNCTIONS ******************** //
  // GAMEPLAY OPEN FORM CALLBACK FUNCTIONS
  const [heal, setHeal] = useState(false)
  const healHandler = (bool) => {
    setHeal(bool)
  }
  const [takeDamage, setTakeDamage] = useState(false)
  const takeDamageHandler = (bool) => {
    setTakeDamage(bool)
  }
  // INVENTORY OPEN FORM CALLBACK FUNCTIONS
  const [payMoney, setPayMoney] = useState(false)
  const payMoneyHandler = (bool) => {
    setPayMoney(bool)
  }
  const [recieveMoney, setRecieveMoney] = useState(false)
  const recieveMoneyHandler = (bool) => {
    setRecieveMoney(bool)
  }
  const [newWeapon, setNewWeapon] = useState(false)
  const newWeaponHandler = (bool) => {
    setNewWeapon(bool)
  }
  const [newWearable, setNewWearable] = useState(false)
  const newWearableHandler = (bool) => {
    setNewWearable(bool)
  }
  const [newItem, setNewItem] = useState(false)
  const newItemHandler = (bool) => {
    setNewItem(bool)
  }
  const [editSuronis, setEditSuronis] = useState(false)
  const editSuronisHandler = (bool) => {
    setEditSuronis(bool)
  }
  // STATS OPEN FORM CALLBACK FUNCTIONS
  // (dont need excellence chips or base stats function here)
  const [levelUp, setLevelUp] = useState(false)
  const levelUpHandler = (bool) => {
    setLevelUp(bool)
  }
  // ABILITIES OPEN FORM CALLBACK FUNCTIONS
  const [newAbility, setNewAbility] = useState(false)
  const newAbilityHandler = (bool) => {
    setNewAbility(bool)
  }
  const [editAbility, setEditAbility] = useState(false)
  const editAbilityHandler = (bool) => {
    setEditAbility(bool)
  }
  // INFO OPEN FORM CALLBACK FUNCTIONS
  const [newCharacterLog, setNewCharacterLog] = useState(false)
  const newCharacterLogHandler = (bool) => {
    setNewCharacterLog(bool)
  }
  const [editCharacterLog, setEditCharacterLog] = useState(false)
  const editCharacterLogHandler = (bool) => {
    setEditCharacterLog(bool)
  }
  // NOTES OPEN FORM CALLBACK FUNCTIONS
  const [newNote, setNewNote] = useState(false)
  const newNoteHandler = (bool) => {
    setNewNote(bool)
  }
  const [editNote, setEditNote] = useState(false)
  const editNoteHandler = (bool) => {
    setEditNote(bool)
  }
  // ******************** BEGIN ALL USE EFFECT LOGIC ******************** //
  useEffect(() => {
    if (props.CSID === undefined || props.CSID === null) {
      console.log("Error loading character sheet resources.")
    } else {
      Axios.get("/loadonecs", {
        params: {
          charID: props.CSID,
        },
      }).then(function (response) {
        console.log(response)
        setCharSheet(response.data[0])
        dispatch({
          type: "setCharSheet",
          data: response.data[0],
        })
      })
    }
  }, [props.CSID, dispatch])
  useEffect(() => {
    if (charSheet !== 0) {
      Axios.get("/loadrace", {
        params: {
          raceID: charSheet.raceID,
        },
      }).then(function (response) {
        setTheRace(response.data[0])
        Axios.get("/loadclass", {
          params: {
            classID: charSheet.classID,
          },
        }).then(function (response) {
          setTheClass(response.data[0])
          Axios.get("/loadabilitytree", {
            params: {
              abilityTreeID: response.data[0].abilityTreeID,
            },
          }).then(function (response) {
            setAbilityTree(response.data[0])
            setIsLoading(false)
          })
        })
      })
    }
  }, [charSheet])
  useEffect(() => {
    if (!isLoading) {
      setAbilityArray([])
      let at = state.charSheet.levelUps[state.charSheet.levelUps.length - 1].abilityTree
      at.map((column, index) => {
        let corrColumn = `column${index + 1}`
        let ability1 = abilityTree[corrColumn][column.one - 1]
        let ability2 = abilityTree[corrColumn][column.two + (5 - 1)]
        let ability3 = abilityTree[corrColumn][column.three + (10 - 1)]
        let ability4 = abilityTree[corrColumn][column.four + (15 - 1)]
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
        setAbilityArray((prevAbilityArray) => {
          return prevAbilityArray.concat(arrToAppend)
        })
        return ""
      })
    }
  }, [state, abilityTree, isLoading])
  useEffect(() => {
    if (!isLoading) {
      setEquippedItems(
        state.charSheet.items.filter((item) => {
          return item.equipped
        })
      )
      setEquippedWeapons(
        state.charSheet.weapons.filter((weapon) => {
          return weapon.equipped
        })
      )
      setEquippedWearables(
        state.charSheet.wearables.filter((wearable) => {
          return wearable.equipped
        })
      )
    }
  }, [state, isLoading])
  useEffect(() => {
    let a = equippedWeapons.reduce((total, num) => {
      return num.holstersReq + total
    }, 0)
    setHolstersUsed(a)

    let b = equippedItems.reduce((total, num) => {
      return num.slotsReq + total
    }, 0)
    setSlotsUsed(b)

    let c = equippedWearables.reduce((total, num) => {
      return num.slots + total
    }, 0)
    setSlotsAvailable(c)
    let d = equippedWearables.reduce((total, num) => {
      return num.holsters + total
    }, 0)
    setHolstersAvailable(d)
    let phy = equippedWearables.reduce((total, num) => {
      return num.modifiers.PHY + total
    }, 0)
    let int = equippedWearables.reduce((total, num) => {
      return num.modifiers.INT + total
    }, 0)
    let ref = equippedWearables.reduce((total, num) => {
      return num.modifiers.REF + total
    }, 0)
    let cha = equippedWearables.reduce((total, num) => {
      return num.modifiers.CHA + total
    }, 0)
    setBaseEquipmentMod([phy, int, ref, cha])
    let skill1 = equippedWearables.reduce((total, num) => {
      return num.modifiers.skill1 + total
    }, 0)
    setEquipmentMod([skill1])
    let y = equippedWearables.reduce((total, num) => {
      return parseInt(num.modifiers.armour) + parseInt(total)
    }, 0)
    setEquipmentArmour(y)
  }, [equippedItems, equippedWeapons, equippedWearables])
  // ******************** BEGIN THE RENDERING ******************** //
  if (props.loggedIn) {
    if (!isLoading) {
      if (props.UID === charSheet.uid) {
        return (
          <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
              <BrowserRouter>
                <Switch>
                  <Route path="/campaign/gameplay">
                    <CampaignSheet />
                    <FlashMessage />
                  </Route>
                  <Route path="/profile">
                    <Profile loggedIn={props.loggedIn} loggedInHandler={props.loggedInHandler} CSIDHandler={props.CSIDHandler} UIDHandler={props.UIDHandler} />
                    <FlashMessage />
                  </Route>
                  <Route path="/about">
                    <HomeAbout />
                    <FlashMessage />
                  </Route>
                  <Route path="/" exact>
                    <Home characterSheetArray={props.characterSheetArray} CSIDHandler={props.CSIDHandler} CSID={props.CSID} UID={props.UID} newCharacterSheetHandler={props.newCharacterSheetHandler} characterSheetArrayHandler={props.characterSheetArrayHandler} />
                    {props.newCharacterSheet ? <NewCharacterSheet CSID={props.CSID} characterSheetArray={props.characterSheetArray} setCharacterSheetArrayHandler={props.setCharacterSheetArrayHandler} newCharacterSheetHandler={props.newCharacterSheetHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/about">
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <About />
                    <Footer />
                    <FlashMessage />
                  </Route>
                  <Route path="/character/gameplay" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Gameplay charSheet={charSheet} abilityArray={abilityArray} equipmentMod={equipmentMod} healHandler={healHandler} takeDamageHandler={takeDamageHandler} CSID={props.CSID} baseEquipmentMod={baseEquipmentMod} equipmentArmour={equipmentArmour} theRace={theRace} theClass={theClass} equippedWeapons={equippedWeapons} equippedItems={equippedItems} payMoneyHandler={payMoneyHandler} recieveMoneyHandler={recieveMoneyHandler} />
                    <Footer />
                    {heal ? <HealHP healHandler={healHandler} CSID={props.CSID} /> : ""}
                    {takeDamage ? <TakeDamage takeDamageHandler={takeDamageHandler} CSID={props.CSID} /> : ""}
                    {payMoney ? <PayMoney CSID={props.CSID} payMoneyHandler={payMoneyHandler} /> : ""}
                    {recieveMoney ? <RecieveMoney CSID={props.CSID} recieveMoneyHandler={recieveMoneyHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/inventory" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Inventory charSheet={charSheet} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} holstersUsed={holstersUsed} slotsUsed={slotsUsed} holstersAvailable={holstersAvailable} slotsAvailable={slotsAvailable} payMoneyHandler={payMoneyHandler} recieveMoneyHandler={recieveMoneyHandler} newWeaponHandler={newWeaponHandler} newWearableHandler={newWearableHandler} newItemHandler={newItemHandler} editSuronisHandler={editSuronisHandler} CSID={props.CSID} />
                    <Footer />
                    {payMoney ? <PayMoney CSID={props.CSID} payMoneyHandler={payMoneyHandler} /> : ""}
                    {recieveMoney ? <RecieveMoney CSID={props.CSID} recieveMoneyHandler={recieveMoneyHandler} /> : ""}
                    {newWeapon ? <NewWeapon CSID={props.CSID} newWeaponHandler={newWeaponHandler} /> : ""}
                    {newWearable ? <NewWearable CSID={props.CSID} newWearableHandler={newWearableHandler} /> : ""}
                    {newItem ? <NewItem CSID={props.CSID} newItemHandler={newItemHandler} /> : ""}
                    {editSuronis ? <EditSuronis CSID={props.CSID} editSuronisHandler={editSuronisHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/stats" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Stats charSheet={charSheet} theRace={theRace} theClass={theClass} abilityTree={abilityTree} equipmentMod={equipmentMod} baseEquipmentMod={baseEquipmentMod} levelUpHandler={levelUpHandler} CSID={props.CSID} />
                    <Footer />
                    {levelUp ? <LevelUp CSID={props.CSID} levelUp={levelUp} abilityTree={abilityTree} levelUpHandler={levelUpHandler} charSheet={charSheet} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/abilities" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Abilities abilityTree={abilityTree} charSheet={charSheet} abilityArray={abilityArray} newAbilityHandler={newAbilityHandler} editAbilityHandler={editAbilityHandler} CSID={props.CSID} />
                    <Footer />
                    {newAbility ? <NewAbility CSID={props.CSID} newAbilityHandler={newAbilityHandler} /> : ""}
                    {editAbility ? <EditAbility CSID={props.CSID} editAbilityHandler={editAbilityHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/info" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Info charSheet={charSheet} theRace={theRace} theClass={theClass} CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} editCharacterLogHandler={editCharacterLogHandler} />
                    <Footer />
                    {newCharacterLog ? <NewCharacterLog CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} /> : ""}
                    {editCharacterLog ? <EditCharacterLog CSID={props.CSID} editCharacterLogHandler={editCharacterLogHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                  <Route path="/character/messages" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Messages />
                    <Footer />
                    <FlashMessage />
                  </Route>
                  <Route path="/character/notes" exact>
                    <Header charSheet={charSheet} />
                    <Navigation />
                    <Notes charSheet={charSheet} CSID={props.CSID} newNoteHandler={newNoteHandler} editNoteHandler={editNoteHandler} />
                    <Footer />
                    {newNote ? <NewNote CSID={props.CSID} newNoteHandler={newNoteHandler} /> : ""}
                    {editNote ? <EditNote CSID={props.CSID} editNoteHandler={editNoteHandler} /> : ""}
                    <FlashMessage />
                  </Route>
                </Switch>
              </BrowserRouter>
            </DispatchContext.Provider>
          </StateContext.Provider>
        )
      } else {
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", padding: "6rem" }}>
            <h1>You have been logged out.</h1>
            <p>Please sign back in to view your character sheets.</p>
            <h1 style={{ marginTop: "6rem" }}>
              <Link to="/">Avarice Sheets</Link>
            </h1>
          </div>
        )
      }
    } else {
      if (props.CSID === undefined || props.CSID === null) {
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", padding: "6rem" }}>
            <h1>You are logged in, but have not chosen a character sheet to view.</h1>
            <p>Note to self: Perhaps when a user logs in, automatically set the character sheet id to match their last played character to prevent this error.</p>
            <p>(do this by having a property in the user object that is latestCSID and is set whenever they click on a character sheet on their homepage)</p>
            <h1 style={{ marginTop: "6rem" }}>
              <Link to="/">Avarice Sheets</Link>
            </h1>
          </div>
        )
      }
      return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", padding: "6rem" }}>
          <Loader />
        </div>
      )
    }
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", padding: "6rem" }}>
        <h1>You are not logged in.</h1>
        <h1 style={{ marginTop: "6rem" }}>
          <Link to="/">Avarice Sheets</Link>
        </h1>
      </div>
    )
  }
}

export default CharacterSheet
