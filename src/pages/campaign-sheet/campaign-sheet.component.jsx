import React from "react"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { default as CampaignSheetHeader } from "../../components/headers/campaign-sheet-header.container"
import CampaignSheetNavigation from "../../components/sheets-navigation/campaign-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import MessagesPage from "../sheets-pages/messages/messages.component"

import {
  CampaignGameplayPageContainer as CampaignGameplayPage,
  CombatPageContainer as CombatPage,
  PlayersPageContainer as PlayersPage,
  CampaignPageContainer as CampaignPage,
  PlanningPageContainer as PlanningPage,
  CampaignNotesPageContainer as CampaignNotesPage,
} from "../campaign-sheet-pages/containers/campaign-sheet-pages.container"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"

import { selectCurrentUser } from "../../redux/user/user.selectors"
import { fetchCurrentCampSheetByIDStartAsync } from "../../redux/campaign-sheet/campaign-sheet.actions"
import { fetchAdditionalResourcesStartAsync } from "../../redux/app/app.actions"

class CampaignSheetPage extends React.Component {
  componentDidMount() {
    const {
      fetchCurrentCampSheetByIDStartAsync,
      fetchAdditionalResourcesStartAsync,
      match,
      currentUser,
    } = this.props
    fetchCurrentCampSheetByIDStartAsync(match.params.campid, currentUser)
    fetchAdditionalResourcesStartAsync()
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
  fetchAdditionalResourcesStartAsync: () => dispatch(fetchAdditionalResourcesStartAsync()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignSheetPage))
