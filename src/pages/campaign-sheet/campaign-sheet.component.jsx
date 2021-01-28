import React from "react"
import { Switch, Route } from "react-router-dom"

import SheetsHeader from "../../components/headers/sheets-header.component"
import CampaignSheetNavigation from "../../components/sheets-navigation/campaign-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CampaignGameplay from "./campaign-sheet-pages/campaign-gameplay.component"
import CombatPage from "./campaign-sheet-pages/combat.component"
import PlayersPage from "./campaign-sheet-pages/players.component"
import CampaignPage from "./campaign-sheet-pages/campaign.component"
import PlanningPage from "./campaign-sheet-pages/planning.component"
import MessagesPage from "../sheets-pages/messages/messages.component"
import NotesPage from "../sheets-pages/notes/notes.components"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"

class CampaignSheetPage extends React.Component {
  render() {
    const { match } = this.props
    return (
      <>
        <SheetsHeader campaign name="Campaign Name" />
        <CampaignSheetNavigation />
        <Switch>
          <Route exact path={`${match.path}/:campid/gameplay`} component={CampaignGameplay} />
          <Route exact path={`${match.path}/:campid/combat`} component={CombatPage} />
          <Route exact path={`${match.path}/:campid/players`} component={PlayersPage} />
          <Route exact path={`${match.path}/:campid/campaign`} component={CampaignPage} />
          <Route exact path={`${match.path}/:campid/planning`} component={PlanningPage} />
          <Route exact path={`${match.path}/:campid/messages`} component={MessagesPage} />
          <Route exact path={`${match.path}/:campid/notes`} component={NotesPage} />

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CampaignSheetPage
