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
import Heal from "../CharacterSheet/Forms/Heal"
import TakeDamage from "../CharacterSheet/Forms/TakeDamage"
import Popup from "../Popup"
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

  const [equipmentMod, setEquipmentMod] = useState([7, 7, 7, 7]) // one of these for each skill, in the same order as the skills array in level ups
  const [baseEquipmentMod, setBaseEquipmentMod] = useState([3, 3, 3, 3]) // one of these for each base stat, in the order they are planned to be

  const [heal, setHeal] = useState(false)
  const healHandler = (bool) => {
    setHeal(bool)
  }
  const [takeDamage, setTakeDamage] = useState(false)
  const takeDamageHandler = (bool) => {
    setTakeDamage(bool)
  }

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
      let at = charSheet.levelUps[charSheet.levelUps.length - 1].abilityTree
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
        setAbilityArray((prevAbilityArray) => prevAbilityArray.concat(arrToAppend))
        return index // to stop the error
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

  // console.log("Race: ", theRace)
  // console.log("Class: ", theClass)
  // console.log("Ability Tree: ", abilityTree)
  // console.log("Character Sheet: ", charSheet)
  // console.log("Abilities:", abilityArray)
  // console.log(equippedItems)
  // console.log(equippedWeapons)

  // console.log(charSheet)
  // const testFunctionHandler = () => {
  //   //setCharSheet(charSheet.concat())
  //   setCharSheet((prevCharSheet) => {
  //     return prevCharSheet.concat()
  //   })
  // }
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
                <Home characterSheetArray={props.characterSheetArray} CSIDHandler={props.CSIDHandler} CSID={props.CSID} UID={props.UID} />
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
                <Gameplay charSheet={charSheet} healHandler={healHandler} takeDamageHandler={takeDamageHandler} />
                <Footer />
                {heal ? <Heal healHandler={healHandler} /> : ""}
                {takeDamage ? <TakeDamage takeDamageHandler={takeDamageHandler} /> : ""}
              </Route>
              <Route path="/character/inventory" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Inventory charSheet={charSheet} equippedItems={equippedItems} equippedWeapons={equippedWeapons} />
                <Footer />
              </Route>
              <Route path="/character/stats" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Stats charSheet={charSheet} theRace={theRace} theClass={theClass} abilityTree={abilityTree} equipmentMod={equipmentMod} baseEquipmentMod={baseEquipmentMod} />
                <Footer />
              </Route>
              <Route path="/character/abilities" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Abilities abilityTree={abilityTree} charSheet={charSheet} abilityArray={abilityArray} />
                <Footer />
              </Route>
              <Route path="/character/info" exact>
                <Header charSheet={charSheet} />
                <Navigation />
                <Info charSheet={charSheet} theRace={theRace} theClass={theClass} />
                <Footer />
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
                <Notes charSheet={charSheet} />
                <Footer />
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
