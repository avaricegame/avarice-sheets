import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.scss"

//import uniqid from "uniqid"

// COMPONENTS
import Home from "./components/Pages/Home"
//import HomeGuest from "./components/Pages/HomeGuest"
import Profile from "./components/Pages/Profile"
import CharacterSheet from "./components/Pages/CharacterSheet"
import CampaignSheet from "./components/Pages/CampaignSheet"

Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"

function App() {
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
        <Route path="/character/:id/gameplay">
          <CharacterSheet />
        </Route>
        <Route path="/campaign/:id">
          <CampaignSheet />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
