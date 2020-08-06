import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// COMPONENTS
import Home from "../Pages/Home"
import Header from "../CharacterSheet/Header"
import Footer from "../Footer"
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../Notes"
import Messages from "../Messages"
import Navigation from "../CharacterSheet/Navigation"
import About from "../CharacterSheet/About"
import CampaignSheet from "../Pages/CampaignSheet"
import Profile from "../Pages/Profile"
import Axios from "axios"

function CharacterSheet(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [charSheet, setCharSheet] = useState({})
  const [theClass, setTheClass] = useState({})
  const [theRace, setTheRace] = useState({})
  const [abilityTree, setAbilityTree] = useState({})

  useEffect(() => {
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
  }, [props.CSID])

  // console.log("Race: ", theRace)
  // console.log("Class: ", theClass)
  // console.log("Ability Tree: ", abilityTree)
  // console.log("Character Sheet: ", charSheet)

  // console.log(charSheet)
  // const testFunctionHandler = () => {
  //   //setCharSheet(charSheet.concat())
  //   setCharSheet((prevCharSheet) => {
  //     return prevCharSheet.concat()
  //   })
  // }

  if (!isLoading) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/campaign/:id/gameplay">
            <CampaignSheet />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/character/:id/about">
            <Header charSheet={charSheet} />
            <Navigation />
            <About />
            <Footer />
          </Route>
          <Route path="/character/:id/gameplay" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Gameplay charSheet={charSheet} />
            <Footer />
          </Route>
          <Route path="/character/:id/inventory" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Inventory charSheet={charSheet} />
            <Footer />
          </Route>
          <Route path="/character/:id/stats" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Stats charSheet={charSheet} theRace={theRace} theClass={theClass} abilityTree={abilityTree} />
            <Footer />
          </Route>
          <Route path="/character/:id/abilities" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Abilities abilityTree={abilityTree} charSheet={charSheet} />
            <Footer />
          </Route>
          <Route path="/character/:id/info" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Info charSheet={charSheet} theRace={theRace} theClass={theClass} />
            <Footer />
          </Route>
          <Route path="/character/:id/messages" exact>
            <Header charSheet={charSheet} />
            <Navigation />
            <Messages />
            <Footer />
          </Route>
          <Route path="/character/:id/notes" exact>
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <h1>Fetching Data...</h1>
      </div>
    )
  }
}

export default CharacterSheet
