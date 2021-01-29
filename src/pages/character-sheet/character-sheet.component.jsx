import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { default as CharacterSheetHeader } from "../../components/headers/character-sheet-header.container"
import CharacterSheetNavigation from "../../components/sheets-navigation/character-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import MessagesPage from "../sheets-pages/messages/messages.component"

import {
  CharacterGameplayPageContainer as CharacterGameplayPage,
  InventoryPageContainer as InventoryPage,
  StatsPageContainer as StatsPage,
  AbilitiesPageContainer as AbilitiesPage,
  InfoPageContainer as InfoPage,
  CharacterNotesPageContainer as CharacterNotesPage,
} from "../character-sheet-pages/containers/character-sheet-pages.container"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"

import { selectCurrentUser } from "../../redux/user/user.selectors"
import { fetchCurrentCharSheetByIDStartAsync } from "../../redux/character-sheet/character-sheet.actions"

class CharacterSheetPage extends React.Component {
  componentDidMount() {
    const { fetchCurrentCharSheetByIDStartAsync, match, currentUser } = this.props
    fetchCurrentCharSheetByIDStartAsync(match.params.charid, currentUser)
  }

  render() {
    const { match } = this.props
    return (
      <>
        <CharacterSheetHeader />
        <CharacterSheetNavigation />
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            render={() => <Redirect to={`${match.url}/gameplay`} />}
          />
          <Route exact path={`${match.url}/gameplay`} component={CharacterGameplayPage} />
          <Route exact path={`${match.url}/inventory`} component={InventoryPage} />
          <Route exact path={`${match.url}/stats`} component={StatsPage} />
          <Route exact path={`${match.url}/abilities`} component={AbilitiesPage} />
          <Route exact path={`${match.url}/info`} component={InfoPage} />
          <Route exact path={`${match.url}/messages`} component={MessagesPage} />
          <Route exact path={`${match.url}/notes`} component={CharacterNotesPage} />

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
  fetchCurrentCharSheetByIDStartAsync: (charSheetIDParam, currentUser) =>
    dispatch(fetchCurrentCharSheetByIDStartAsync(charSheetIDParam, currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheetPage)
