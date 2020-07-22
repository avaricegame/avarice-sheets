import React from "react"
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

function CharacterSheet() {
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
          <Header />
          <Navigation />
          <About />
          <Footer />
        </Route>
        <Route path="/character/:id/gameplay" exact>
          <Header />
          <Navigation />
          <Gameplay />
          <Footer />
        </Route>
        <Route path="/character/:id/inventory" exact>
          <Header />
          <Navigation />
          <Inventory />
          <Footer />
        </Route>
        <Route path="/character/:id/stats" exact>
          <Header />
          <Navigation />
          <Stats />
          <Footer />
        </Route>
        <Route path="/character/:id/abilities" exact>
          <Header />
          <Navigation />
          <Abilities />
          <Footer />
        </Route>
        <Route path="/character/:id/info" exact>
          <Header />
          <Navigation />
          <Info />
          <Footer />
        </Route>
        <Route path="/character/:id/messages" exact>
          <Header />
          <Navigation />
          <Messages />
          <Footer />
        </Route>
        <Route path="/character/:id/notes" exact>
          <Header />
          <Navigation />
          <Notes />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default CharacterSheet
