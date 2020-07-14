import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// COMPONENTS
import Header from "./Pages/Layout/Header"
import Footer from "./Pages/Layout/Footer"
import Gameplay from "./Pages/CharacterSheet/Gameplay/Gameplay"
import Inventory from "./Pages/CharacterSheet/Inventory/Inventory"
import Stats from "./Pages/CharacterSheet/Stats/Stats"
import Abilities from "./Pages/CharacterSheet/Abilities/Abilities"
import Info from "./Pages/CharacterSheet/Info/Info"
import Notes from "./Pages/Notes"
import Messages from "./Pages/Messages"
import CharacterSheetNavigation from "./Pages/Layout/CharacterSheetNavigation"

function CharacterSheet() {
  return (
    <BrowserRouter>
      <Header />
      <CharacterSheetNavigation />
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
