import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// COMPONENTS
import Header from "../CampaignSheet/Header"
import Footer from "../Footer"
import Gameplay from "../CampaignSheet/Gameplay"
import Players from "../CampaignSheet/Players"
import Info from "../CampaignSheet/Info"
import Planning from "../CampaignSheet/Planning"
import Campaign from "../CampaignSheet/Campaign"
import Notes from "../CampaignSheet/Notes"
import Messages from "../Messages"
import Navigation from "../CampaignSheet/Navigation"
import Home from "../Pages/Home"
import About from "../CampaignSheet/About"
import CharacterSheet from "../Pages/CharacterSheet"
import Profile from "../Pages/Profile"

function CampaignSheet() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/gameplay">
          <CharacterSheet />
        </Route>
        <Route path="/profile/">
          <Profile />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/campaign/about">
          <Header />
          <Navigation />
          <About />
          <Footer />
        </Route>
        <Route path="/campaign/gameplay" exact>
          <Header />
          <Navigation />
          <Gameplay />
          <Footer />
        </Route>
        <Route path="/campaign/players" exact>
          <Header />
          <Navigation />
          <Players />
          <Footer />
        </Route>
        <Route path="/campaign/info" exact>
          <Header />
          <Navigation />
          <Info />
          <Footer />
        </Route>
        <Route path="/campaign/planning" exact>
          <Header />
          <Navigation />
          <Planning />
          <Footer />
        </Route>
        <Route path="/campaign/campaign" exact>
          <Header />
          <Navigation />
          <Campaign />
          <Footer />
        </Route>
        <Route path="/campaign/messages" exact>
          <Header />
          <Navigation />
          <Messages />
          <Footer />
        </Route>
        <Route path="/campaign/notes" exact>
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
