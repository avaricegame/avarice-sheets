import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// COMPONENTS
import Header from "../Header"
import Footer from "../Footer"
import Gameplay from "../CampaignSheet/Gameplay"
import Players from "../CampaignSheet/Players"
import Info from "../CampaignSheet/Info"
import Planning from "../CampaignSheet/Planning"
import Campaign from "../CampaignSheet/Campaign"
import Notes from "../Notes"
import Messages from "../Messages"
import Navigation from "../CampaignSheet/Navigation"

function CampaignSheet() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/character/:id/gameplay" exact>
          <Gameplay />
        </Route>
        <Route path="/character/:id/inventory" exact>
          <Players />
        </Route>
        <Route path="/character/:id/stats" exact>
          <Info />
        </Route>
        <Route path="/character/:id/abilities" exact>
          <Planning />
        </Route>
        <Route path="/character/:id/info" exact>
          <Campaign />
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

export default CampaignSheet
