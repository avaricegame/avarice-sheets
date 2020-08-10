import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Axios from "axios"

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
import EditLevel from "../CharacterSheet/Forms/EditLevel"
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
  const [isLoading, setIsLoading] = useState(true)
  const [charSheet, setCharSheet] = useState(0)
  const [theClass, setTheClass] = useState({})
  const [theRace, setTheRace] = useState({})
  const [abilityTree, setAbilityTree] = useState({})
  const [abilityArray, setAbilityArray] = useState([])
  const [equippedWeapons, setEquippedWeapons] = useState([])
  const [equippedItems, setEquippedItems] = useState([])

  const [equipmentMod] = useState([7, 7, 7, 7]) // one of these for each skill, in the same order as the skills array in level ups
  const [baseEquipmentMod] = useState([3, 3, 3, 3]) // one of these for each base stat, in the order they are planned to be

  const updateCharSheet = (selector, value) => {
    // setCharSheet((prevCharSheet) => {
    //   let newcharSheet = Object.assign({}, prevCharSheet.charSheet)
    //   charSheet[selector] = value
    //   return { charSheet }
    // })
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
  const [editLevel, setEditLevel] = useState(false)
  const editLevelHandler = (bool) => {
    setEditLevel(bool)
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
      async function fetchCS() {
        // get the correct character sheet and set it as initial state
        const corrSheet = await Axios.get("/loadonecs", {
          params: {
            charID: props.CSID,
          },
        })
        setCharSheet(corrSheet.data[0])
        // use correct character sheet to pull the correct race information and save it
        const corrRace = await Axios.get("/loadrace", {
          params: {
            raceID: corrSheet.data[0].raceID,
          },
        })
        setTheRace(corrRace.data[0])
        // use correct character sheet to pull the correct class information and save it
        const corrClass = await Axios.get("/loadclass", {
          params: {
            classID: corrSheet.data[0].classID,
          },
        })
        setTheClass(corrClass.data[0])
        // use correct class to pull the correct ability tree information and save it
        const corrAbilityTree = await Axios.get("/loadabilitytree", {
          params: {
            abilityTreeID: corrClass.data[0].abilityTreeID,
          },
        })
        setAbilityTree(corrAbilityTree.data[0])
        setIsLoading(false)
      }
      fetchCS()
    }
  }, [props.CSID])

  useEffect(() => {
    if (!isLoading) {
      console.log(charSheet)
      let at = charSheet.levelUps[charSheet.levelUps.length - 1].abilityTree
      at.map((column, index) => {
        let corrColumn = `column${index + 1}`
        let ability1 = abilityTree[corrColumn][column.one]
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
        setAbilityArray((prevAbilityArray) => prevAbilityArray.concat(arrToAppend))
        return "" // to stop the error
      })
    }
  }, [charSheet, abilityTree, isLoading])

  useEffect(() => {
    if (!isLoading) {
      setEquippedItems(
        charSheet.items.filter((item) => {
          return item.equipped
        })
      )
      setEquippedWeapons(
        charSheet.weapons.filter((weapon) => {
          return weapon.equipped
        })
      )
    }
  }, [charSheet, isLoading])
  // ******************** BEGIN THE RENDERING ******************** //
  if (props.loggedIn) {
    if (!isLoading) {
      if (props.UID === charSheet.uid) {
        return (
          <BrowserRouter>
            <Switch>
              <Route path="/campaign/gameplay">
                <CampaignSheet />
              </Route>
              <Route path="/profile">
                <Profile loggedIn={props.loggedIn} loggedInHandler={props.loggedInHandler} CSIDHandler={props.CSIDHandler} UIDHandler={props.UIDHandler} />
              </Route>
              <Route path="/about">
                <HomeAbout />
              </Route>
              <Route path="/" exact>
                <Home characterSheetArray={props.characterSheetArray} CSIDHandler={props.CSIDHandler} CSID={props.CSID} UID={props.UID} newCharacterSheetHandler={props.newCharacterSheetHandler} />
                {props.newCharacterSheet ? <NewCharacterSheet CSID={props.CSID} newCharacterSheetHandler={props.newCharacterSheetHandler} /> : ""}
              </Route>
              <Route path="/character/about">
                <Header charSheet={charSheet} />
                <Navigation />
                <About />
                <Footer />
              </Route>
              <Route path="/character/gameplay" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Gameplay charSheet={charSheet} abilityArray={abilityArray} healHandler={healHandler} takeDamageHandler={takeDamageHandler} CSID={props.CSID} />
                <Footer />
                {heal ? <HealHP healHandler={healHandler} CSID={props.CSID} updateCharSheet={updateCharSheet} /> : ""}
                {takeDamage ? <TakeDamage takeDamageHandler={takeDamageHandler} CSID={props.CSID} updateCharSheet={updateCharSheet} /> : ""}
              </Route>
              <Route path="/character/inventory" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Inventory charSheet={charSheet} equippedItems={equippedItems} equippedWeapons={equippedWeapons} payMoneyHandler={payMoneyHandler} recieveMoneyHandler={recieveMoneyHandler} newWeaponHandler={newWeaponHandler} newWearableHandler={newWearableHandler} newItemHandler={newItemHandler} editSuronisHandler={editSuronisHandler} CSID={props.CSID} />
                <Footer />
                {payMoney ? <PayMoney CSID={props.CSID} payMoneyHandler={payMoneyHandler} /> : ""}
                {recieveMoney ? <RecieveMoney CSID={props.CSID} recieveMoneyHandler={recieveMoneyHandler} /> : ""}
                {newWeapon ? <NewWeapon CSID={props.CSID} newWeaponHandler={newWeaponHandler} /> : ""}
                {newWearable ? <NewWearable CSID={props.CSID} newWearableHandler={newWearableHandler} /> : ""}
                {newItem ? <NewItem CSID={props.CSID} newItemHandler={newItemHandler} /> : ""}
                {editSuronis ? <EditSuronis CSID={props.CSID} editSuronisHandler={editSuronisHandler} /> : ""}
              </Route>
              <Route path="/character/stats" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Stats charSheet={charSheet} theRace={theRace} theClass={theClass} abilityTree={abilityTree} equipmentMod={equipmentMod} baseEquipmentMod={baseEquipmentMod} levelUpHandler={levelUpHandler} editLevelHandler={editLevelHandler} CSID={props.CSID} />
                <Footer />
                {levelUp ? <LevelUp CSID={props.CSID} levelUp={levelUp} levelUpHandler={levelUpHandler} /> : ""}
                {editLevel ? <EditLevel CSID={props.CSID} editLevel={editLevel} editLevelHandler={editLevelHandler} /> : ""}
              </Route>
              <Route path="/character/abilities" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Abilities abilityTree={abilityTree} charSheet={charSheet} abilityArray={abilityArray} newAbilityHandler={newAbilityHandler} editAbilityHandler={editAbilityHandler} CSID={props.CSID} />
                <Footer />
                {newAbility ? <NewAbility CSID={props.CSID} newAbilityHandler={newAbilityHandler} /> : ""}
                {editAbility ? <EditAbility CSID={props.CSID} editAbilityHandler={editAbilityHandler} /> : ""}
              </Route>
              <Route path="/character/info" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Info charSheet={charSheet} theRace={theRace} theClass={theClass} CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} editCharacterLogHandler={editCharacterLogHandler} />
                <Footer />
                {newCharacterLog ? <NewCharacterLog CSID={props.CSID} newCharacterLogHandler={newCharacterLogHandler} /> : ""}
                {editCharacterLog ? <EditCharacterLog CSID={props.CSID} editCharacterLogHandler={editCharacterLogHandler} /> : ""}
              </Route>
              <Route path="/character/messages" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Messages />
                <Footer />
              </Route>
              <Route path="/character/notes" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Notes charSheet={charSheet} CSID={props.CSID} newNoteHandler={newNoteHandler} editNoteHandler={editNoteHandler} />
                <Footer />
                {newNote ? <NewNote CSID={props.CSID} newNoteHandler={newNoteHandler} /> : ""}
                {editNote ? <EditNote CSID={props.CSID} editNoteHandler={editNoteHandler} /> : ""}
              </Route>
            </Switch>
          </BrowserRouter>
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
