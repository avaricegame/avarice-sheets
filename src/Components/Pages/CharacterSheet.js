import React, { useState, useEffect } from "react"
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

// PAGES
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../CharacterSheet/Notes"
import Messages from "../Messages"
import About from "../CharacterSheet/About"

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

  // ******************** OPENING INDIVIDUAL FORMS CALLBACK FUNCTIONS ******************** //
  // GAMEPLAY OPEN FORM CALLBACK FUNCTIONS
  const [heal, setHeal] = useState(false)
  const healHandler = (bool) => {
    setHeal(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [takeDamage, setTakeDamage] = useState(false)
  const takeDamageHandler = (bool) => {
    setTakeDamage(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // INVENTORY OPEN FORM CALLBACK FUNCTIONS
  const [payMoney, setPayMoney] = useState(false)
  const payMoneyHandler = (bool) => {
    setPayMoney(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [recieveMoney, setRecieveMoney] = useState(false)
  const recieveMoneyHandler = (bool) => {
    setRecieveMoney(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [newWeapon, setNewWeapon] = useState(false)
  const newWeaponHandler = (bool) => {
    setNewWeapon(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [newWearable, setNewWearable] = useState(false)
  const newWearableHandler = (bool) => {
    setNewWearable(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [newItem, setNewItem] = useState(false)
  const newItemHandler = (bool) => {
    setNewItem(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [editSuronis, setEditSuronis] = useState(false)
  const editSuronisHandler = (bool) => {
    setEditSuronis(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // STATS OPEN FORM CALLBACK FUNCTIONS
  // (dont need excellence chips or base stats function here)
  const [levelUp, setLevelUp] = useState(false)
  const levelUpHandler = (bool) => {
    setLevelUp(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // ABILITIES OPEN FORM CALLBACK FUNCTIONS
  const [newAbility, setNewAbility] = useState(false)
  const newAbilityHandler = (bool) => {
    setNewAbility(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [editAbility, setEditAbility] = useState(false)
  const editAbilityHandler = (bool) => {
    setEditAbility(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // INFO OPEN FORM CALLBACK FUNCTIONS
  const [newCharacterLog, setNewCharacterLog] = useState(false)
  const newCharacterLogHandler = (bool) => {
    setNewCharacterLog(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [editCharacterLog, setEditCharacterLog] = useState(false)
  const editCharacterLogHandler = (bool) => {
    setEditCharacterLog(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  // NOTES OPEN FORM CALLBACK FUNCTIONS
  const [newNote, setNewNote] = useState(false)
  const newNoteHandler = (bool) => {
    setNewNote(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
  }
  const [editNote, setEditNote] = useState(false)
  const editNoteHandler = (bool) => {
    setEditNote(bool)
    bool ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset")
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
                  <Route path="/character/about">
                    <CharacterSheetContainer charSheet={charSheet}>
                      <About />
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/gameplay" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Gameplay charSheet={charSheet} abilityArray={abilityArray} healHandler={healHandler} takeDamageHandler={takeDamageHandler} CSID={props.CSID} equipmentArmour={equipmentArmour} theRace={theRace} theClass={theClass} equippedWeapons={equippedWeapons} equippedItems={equippedItems} payMoneyHandler={payMoneyHandler} recieveMoneyHandler={recieveMoneyHandler} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {heal ? <HealHP healHandler={healHandler} CSID={props.CSID} /> : ""}
                      {takeDamage ? <TakeDamage takeDamageHandler={takeDamageHandler} CSID={props.CSID} /> : ""}
                      {payMoney ? <PayMoney CSID={props.CSID} payMoneyHandler={payMoneyHandler} /> : ""}
                      {recieveMoney ? <RecieveMoney CSID={props.CSID} recieveMoneyHandler={recieveMoneyHandler} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/inventory" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Inventory charSheet={charSheet} equippedItems={equippedItems} equippedWeapons={equippedWeapons} equippedWearables={equippedWearables} holstersUsed={holstersUsed} slotsUsed={slotsUsed} holstersAvailable={holstersAvailable} slotsAvailable={slotsAvailable} payMoneyHandler={payMoneyHandler} recieveMoneyHandler={recieveMoneyHandler} newWeaponHandler={newWeaponHandler} newWearableHandler={newWearableHandler} newItemHandler={newItemHandler} editSuronisHandler={editSuronisHandler} CSID={props.CSID} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {payMoney ? <PayMoney CSID={props.CSID} payMoneyHandler={payMoneyHandler} /> : ""}
                      {recieveMoney ? <RecieveMoney CSID={props.CSID} recieveMoneyHandler={recieveMoneyHandler} /> : ""}
                      {newWeapon ? <NewWeapon CSID={props.CSID} newWeaponHandler={newWeaponHandler} /> : ""}
                      {newWearable ? <NewWearable CSID={props.CSID} newWearableHandler={newWearableHandler} /> : ""}
                      {newItem ? <NewItem CSID={props.CSID} newItemHandler={newItemHandler} /> : ""}
                      {editSuronis ? <EditSuronis CSID={props.CSID} editSuronisHandler={editSuronisHandler} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/stats" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Stats charSheet={charSheet} theRace={theRace} theClass={theClass} abilityTree={abilityTree} levelUpHandler={levelUpHandler} CSID={props.CSID} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {levelUp ? <LevelUp CSID={props.CSID} levelUp={levelUp} abilityTree={abilityTree} levelUpHandler={levelUpHandler} charSheet={charSheet} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/abilities" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Abilities abilityTree={abilityTree} charSheet={charSheet} abilityArray={abilityArray} newAbilityHandler={newAbilityHandler} editAbilityHandler={editAbilityHandler} CSID={props.CSID} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {newAbility ? <NewAbility CSID={props.CSID} newAbilityHandler={newAbilityHandler} /> : ""}
                      {editAbility ? <EditAbility CSID={props.CSID} editAbilityHandler={editAbilityHandler} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/info" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Info charSheet={charSheet} theRace={theRace} theClass={theClass} CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} editCharacterLogHandler={editCharacterLogHandler} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {newCharacterLog ? <NewCharacterLog CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} /> : ""}
                      {editCharacterLog ? <EditCharacterLog CSID={props.CSID} editCharacterLogHandler={editCharacterLogHandler} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/messages" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Messages />
                    </CharacterSheetContainer>
                  </Route>
                  <Route path="/character/notes" exact>
                    <CharacterSheetContainer charSheet={charSheet}>
                      <Notes charSheet={charSheet} CSID={props.CSID} newNoteHandler={newNoteHandler} editNoteHandler={editNoteHandler} />
                      {/* LOADING IN THE POPUP FORMS BASED ON THE STATE */}
                      {newNote ? <NewNote CSID={props.CSID} newNoteHandler={newNoteHandler} /> : ""}
                      {editNote ? <EditNote CSID={props.CSID} editNoteHandler={editNoteHandler} /> : ""}
                      {/* END LOADING IN POPUP FORMS */}
                    </CharacterSheetContainer>
                  </Route>
                </Switch>
              </BrowserRouter>
            </DispatchContext.Provider>
          </StateContext.Provider>
        )
      } else {
        return <Error />
      }
    } else {
      if (props.CSID === undefined || props.CSID === null) {
        return <Error />
      }
      return <Loader />
    }
  } else {
    return <Error />
  }
}

export default CharacterSheet
