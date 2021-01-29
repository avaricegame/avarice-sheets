import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { default as SheetsHeader } from "../../components/headers/sheets-header.container"
import CharacterSheetNavigation from "../../components/sheets-navigation/character-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CharacterGameplayPage from "./character-sheet-pages/character-gameplay.component"
import InventoryPage from "./character-sheet-pages/inventory.component"
import StatsPage from "./character-sheet-pages/stats.component"
import AbilitiesPage from "./character-sheet-pages/abilities.component"
import InfoPage from "./character-sheet-pages/info.component"
import MessagesPage from "../sheets-pages/messages/messages.component"
import NotesPage from "../sheets-pages/notes/notes.components"

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
        <SheetsHeader character />
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
          <Route exact path={`${match.url}/notes`} component={NotesPage} />

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
  fetchCurrentCharSheetByIDStartAsync: (currentCharSheetID, currentUser) =>
    dispatch(fetchCurrentCharSheetByIDStartAsync(currentCharSheetID, currentUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheetPage)
