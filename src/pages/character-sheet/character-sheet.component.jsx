import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SheetsHeader from "../../components/header/sheets-header.component"
import CharacterSheetNavigation from "../../components/sheets-navigation/character-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CharacterGameplayPage from "./character-sheet-pages/character-gameplay.component"
import InventoryPage from "./character-sheet-pages/inventory.component"
import StatsPage from "./character-sheet-pages/stats.component"
import AbilitiesPage from "./character-sheet-pages/abilities.component"
import CharacterInfoPage from "./character-sheet-pages/character-info.component"

import SheetsPageNotFound from "../sheets-page-not-found/sheets-page-not-found.component"

class CharacterSheetPage extends React.Component {
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
          <Route exact path={`${match.path}/info`} component={CharacterInfoPage} />

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CharacterSheetPage
