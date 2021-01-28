import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SheetsHeader from "../../components/headers/sheets-header.component"
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

class CharacterSheetPage extends React.Component {
  componentDidMount() {
    console.log(this.props.match)
  }

  render() {
    const { match } = this.props
    return (
      <>
        <SheetsHeader character name="Character Name" />
        <CharacterSheetNavigation />
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={() => <Redirect to={`${match.path}/gameplay`} />}
          />
          <Route exact path={`${match.path}/gameplay`} component={CharacterGameplayPage} />
          <Route exact path={`${match.path}/inventory`} component={InventoryPage} />
          <Route exact path={`${match.path}/stats`} component={StatsPage} />
          <Route exact path={`${match.path}/abilities`} component={AbilitiesPage} />
          <Route exact path={`${match.path}/info`} component={InfoPage} />
          <Route exact path={`${match.path}/messages`} component={MessagesPage} />
          <Route exact path={`${match.path}/notes`} component={NotesPage} />

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CharacterSheetPage
