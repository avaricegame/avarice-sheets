import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { default as CampaignSheetHeader } from "../../components/headers/campaign-sheet-header.container"
import CampaignSheetNavigation from "../../components/sheets-navigation/campaign-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CampaignGameplayPage from "../campaign-sheet-pages/campaign-gameplay.component"
import CombatPage from "../campaign-sheet-pages/combat.component"
import PlayersPage from "../campaign-sheet-pages/players.component"
import CampaignPage from "../campaign-sheet-pages/campaign.component"
import PlanningPage from "../campaign-sheet-pages/planning.component"
import MessagesPage from "../sheets-pages/messages/messages.component"
import CampaignNotesPage from "../campaign-sheet-pages/campaign-notes.component"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"

import { selectCurrentUser } from "../../redux/user/user.selectors"
import { fetchCurrentCampSheetByIDStartAsync } from "../../redux/campaign-sheet/campaign-sheet.actions"

class CampaignSheetPage extends React.Component {
  componentDidMount() {
    const { fetchCurrentCampSheetByIDStartAsync, match, currentUser } = this.props
    fetchCurrentCampSheetByIDStartAsync(match.params.campid, currentUser)
  }

  render() {
    const { match } = this.props
    return (
      <>
        <CampaignSheetHeader />
        <CampaignSheetNavigation />
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            render={() => <Redirect to={`${match.url}/gameplay`} />}
          />
          <Route exact path={`${match.url}/gameplay`} component={CampaignGameplayPage} />
          <Route exact path={`${match.url}/combat`} component={CombatPage} />
          <Route exact path={`${match.url}/players`} component={PlayersPage} />
          <Route exact path={`${match.url}/campaign`} component={CampaignPage} />
          <Route exact path={`${match.url}/planning`} component={PlanningPage} />
          <Route exact path={`${match.url}/messages`} component={MessagesPage} />
          <Route exact path={`${match.url}/notes`} component={CampaignNotesPage} />

          <Route path={`${match.url}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentCampSheetByIDStartAsync: (campSheetIDParam, currentUser) =>
    dispatch(fetchCurrentCampSheetByIDStartAsync(campSheetIDParam, currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignSheetPage)
