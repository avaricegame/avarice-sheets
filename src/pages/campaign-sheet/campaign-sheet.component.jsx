import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"
import CampaignGameplay from "./campaign-sheet-pages/campaign-gameplay.component"

import SheetsHeader from "../../components/header/sheets-header.component"
import CampaignSheetNavigation from "../../components/sheets-navigation/campaign-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

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

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CampaignSheetPage
