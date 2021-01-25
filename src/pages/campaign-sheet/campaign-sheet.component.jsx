import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SheetsHeader from "../../components/header/sheets-header.component"
import CampaignSheetNavigation from "../../components/sheets-navigation/campaign-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CampaignGameplay from "./campaign-sheet-pages/campaign-gameplay.component"
import PlayersPage from "./campaign-sheet-pages/players.component"
import InteractablesPage from "./campaign-sheet-pages/interactables.component"
import CampaignPage from "./campaign-sheet-pages/campaign.component"
import DatabasePage from "./campaign-sheet-pages/database.component"
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
          <Route
            exact
            path={`${match.path}`}
            render={() => <Redirect to={`${match.path}/gameplay`} />}
          />
          <Route exact path={`${match.path}/gameplay`} component={CampaignGameplay} />
          <Route exact path={`${match.path}/players`} component={PlayersPage} />
          <Route exact path={`${match.path}/interactables`} component={InteractablesPage} />
          <Route exact path={`${match.path}/campaign`} component={CampaignPage} />
          <Route exact path={`${match.path}/database`} component={DatabasePage} />
          <Route exact path={`${match.path}/messages`} component={MessagesPage} />
          <Route exact path={`${match.path}/notes`} component={NotesPage} />

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CampaignSheetPage
