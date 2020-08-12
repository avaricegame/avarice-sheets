import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.scss"

//import uniqid from "uniqid"

// COMPONENTS
import Home from "./Components/Pages/Home"
import HomeGuest from "./Components/Pages/HomeGuest"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"
import Profile from "./Components/Pages/Profile"
import About from "./Components/Pages/About"

// FUNCTIONAL COMPONENTS
import NewCharacterSheet from "./Components/CharacterSheet/Forms/NewCharacterSheet"

//Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"
Axios.defaults.baseURL = "http://localhost:2890"

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("loggedIn")))
  const [UID, setUID] = useState(localStorage.getItem("UID"))
  const [CSID, setCSID] = useState(localStorage.getItem("CSID"))
  const [hasAccount, setHasAccount] = useState(Boolean(localStorage.getItem("hasAccount")))

  const [newCharacterSheet, setNewCharacterSheet] = useState(false)
  const newCharacterSheetHandler = (bool) => {
    setNewCharacterSheet(bool)
  }
  const [characterSheetArray, setCharacterSheetArray] = useState([])
  const characterSheetArrayHandler = (theArray) => {
    setCharacterSheetArray((prevCharacterSheetArray) => {
      return prevCharacterSheetArray.concat(theArray)
    })
  }
  const setCharacterSheetArrayHandler = (theArray) => {
    setCharacterSheetArray(theArray)
  }

  const UIDHandler = (id) => {
    localStorage.setItem("UID", id)
    setUID(id)
  }

  const CSIDHandler = (id) => {
    localStorage.setItem("CSID", id)
    setCSID(id)
  }

  const loggedInHandler = () => {
    if (!loggedIn) {
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("hasAccount", true)
      setLoggedIn(true)
      setHasAccount(true)
    } else {
      localStorage.removeItem("loggedIn")
      localStorage.removeItem("UID")
      //localStorage.removeItem("CSID")
    }
  }

  const accountHandler = () => {
    if (hasAccount) {
      setHasAccount(false)
    } else {
      setHasAccount(true)
    }
  }

  if (loggedIn && UID) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home UID={UID} loggedIn={loggedIn} CSIDHandler={CSIDHandler} newCharacterSheetHandler={newCharacterSheetHandler} characterSheetArray={characterSheetArray} setCharacterSheetArrayHandler={setCharacterSheetArrayHandler} />
            {newCharacterSheet ? <NewCharacterSheet CSID={CSID} newCharacterSheetHandler={newCharacterSheetHandler} UID={UID} characterSheetArray={characterSheetArray} characterSheetArrayHandler={characterSheetArrayHandler} /> : ""}
          </Route>
          <Route path="/profile">
            <Profile loggedIn={loggedIn} loggedInHandler={loggedInHandler} CSIDHandler={CSIDHandler} UIDHandler={UIDHandler} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/character">
            <CharacterSheet CSID={CSID} UID={UID} loggedIn={loggedIn} loggedInHandler={loggedInHandler} CSIDHandler={CSIDHandler} UIDHandler={UIDHandler} newCharacterSheetHandler={newCharacterSheetHandler} newCharacterSheet={newCharacterSheet} characterSheetArray={characterSheetArray} setCharacterSheetArrayHandler={setCharacterSheetArrayHandler} />
          </Route>
          <Route path="/campaign">
            <CampaignSheet />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeGuest UIDHandler={UIDHandler} loggedInHandler={loggedInHandler} CSIDHandler={CSIDHandler} hasAccount={hasAccount} accountHandler={accountHandler} />
            {/*<Popup />*/}
          </Route>
          <Route path="/profile">
            <Profile loggedIn={loggedIn} loggedInHandler={loggedInHandler} CSIDHandler={CSIDHandler} UIDHandler={UIDHandler} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/character/gameplay">
            <CharacterSheet CSID={CSID} UID={UID} loggedIn={loggedIn} CSIDHandler={CSIDHandler} />
          </Route>
          <Route path="/campaign/gameplay">
            <CampaignSheet />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
