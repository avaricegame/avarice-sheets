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
import Home from "../Pages/Home"
import About from "../CampaignSheet/About"

function CampaignSheet() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/campaign/:id/about">
          <Header />
          <Navigation />
          <About />
          <Footer />
        </Route>
        <Route path="/campaign/:id/gameplay" exact>
          <Header />
          <Navigation />
          <Gameplay />
          <Footer />
        </Route>
        <Route path="/campaign/:id/players" exact>
          <Header />
          <Navigation />
          <Players />
          <Footer />
        </Route>
        <Route path="/campaign/:id/info" exact>
          <Header />
          <Navigation />
          <Info />
          <Footer />
        </Route>
        <Route path="/campaign/:id/planning" exact>
          <Header />
          <Navigation />
          <Planning />
          <Footer />
        </Route>
        <Route path="/campaign/:id/campaign" exact>
          <Header />
          <Navigation />
          <Campaign />
          <Footer />
        </Route>
        <Route path="/campaign/:id/messages" exact>
          <Header />
          <Navigation />
          <Messages />
          <Footer />
        </Route>
        <Route path="/campaign/:id/notes" exact>
          <Header />
          <Navigation />
          <Notes />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default CampaignSheet
