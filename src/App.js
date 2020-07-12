import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.scss"

import uniqid from "uniqid"

// COMPONENTS
import Home from "./components/Home"
import HomeGuest from "./components/HomeGuest"
import Profile from "./components/Profile"
import CharacterSheet from "./components/CharacterSheet"
import CampaignSheet from "./components/CampaignSheet"

Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"

function App() {
  const initialState = {}

  function ourReducer(draft, action) {
    switch (action.type) {
    }
  }

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
