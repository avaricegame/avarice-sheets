import React, { useState, useEffect } from "react"
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

// FUNCTIONAL COMPONENTS
//import Popup from "./Components/Popup"

Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"
// "http://localhost:2890"

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("loggedIn")))
  const [UID, setUID] = useState(localStorage.getItem("UID"))
  const [CSID, setCSID] = useState(localStorage.getItem("CSID"))

  const CSIDHandler = (id) => {
    localStorage.setItem("CSID", id)
    setCSID(id)
  }

  useEffect(() => {
    setLoggedIn(true)
    localStorage.setItem("loggedIn", true)
    setUID("1")
    localStorage.setItem("UID", "1")
  }, [])

  if (loggedIn && UID) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home UID={UID} loggedIn={loggedIn} CSIDHandler={CSIDHandler} />
            {/*<Popup />*/}
          </Route>
          <Route path="/profile">
            <Profile />
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
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeGuest UID={UID} loggedIn={loggedIn} CSIDHandler={CSIDHandler} />
            {/*<Popup />*/}
          </Route>
          <Route path="/profile">
            <Profile />
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
