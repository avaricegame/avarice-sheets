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
//import MainPageNotFound from "../main-page-not-found/main-page-not-found.component"

// selectors
import { selectToken } from "../../redux/user/user.selectors"
import {
  selectDoesExist,
  selectHasPermission,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

// actions
import { fetchCurrentCampSheetStart } from "../../redux/campaign-sheet/campaign-sheet.actions"

class CampaignSheetPage extends React.Component {
  componentDidMount() {
    const { fetchCurrentCampSheetStart, match, token } = this.props

    if (token) {
      fetchCurrentCampSheetStart({ token, campid: match.params.campid })
    }
  }

  render() {
    const { match, doesExist, hasPermission } = this.props
    return doesExist && hasPermission ? (
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
    ) : doesExist && !hasPermission ? (
      "YOU DO NOT HAVE PERMISSION TO VIEW THIS CAMPAIGN SHEET"
    ) : (
      "THE CAMPAIGN SHEET YOU ARE LOOKING FOR DOES NOT EXIST"
    )
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  doesExist: selectDoesExist,
  hasPermission: selectHasPermission,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentCampSheetStart: (TokenAndID) => dispatch(fetchCurrentCampSheetStart(TokenAndID)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignSheetPage))
