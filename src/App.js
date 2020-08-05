import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.scss"

//import uniqid from "uniqid"

// COMPONENTS
import Home from "./Components/Pages/Home"
//import HomeGuest from "./Components/Pages/HomeGuest"
import Profile from "./Components/Pages/Profile"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"

Axios.defaults.baseURL = "http://localhost:2890"
//process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"

function App() {
  let CSID = 146

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
          {/* <HomeGuest /> */}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/character/:id/">
          <CharacterSheet CSID={CSID} />
        </Route>
        <Route path="/campaign/:id/">
          <CampaignSheet />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
