import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// COMPONENTS
import Header from "../Header"
import Footer from "../Footer"
import Gameplay from "../CharacterSheet/Gameplay"
import Inventory from "../CharacterSheet/Inventory"
import Stats from "../CharacterSheet/Stats"
import Abilities from "../CharacterSheet/Abilities"
import Info from "../CharacterSheet/Info"
import Notes from "../Notes"
import Messages from "../Messages"
import Navigation from "../CharacterSheet/Navigation"

function CharacterSheet() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/character/:id/gameplay" exact>
          <Gameplay />
        </Route>
        <Route path="/character/:id/inventory" exact>
          <Inventory />
        </Route>
        <Route path="/character/:id/stats" exact>
          <Stats />
        </Route>
        <Route path="/character/:id/abilities" exact>
          <Abilities />
        </Route>
        <Route path="/character/:id/info" exact>
          <Info />
        </Route>
        <Route path="/character/:id/messages" exact>
          <Messages />
        </Route>
        <Route path="/character/:id/notes" exact>
          <Notes />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default CharacterSheet
