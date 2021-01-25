import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SheetsHeader from "../../components/header/sheets-header.component"
import CharacterSheetNavigation from "../../components/sheets-navigation/character-sheet-navigation.component"
import Footer from "../../components/footer/footer.component"

import CharacterGameplay from "./character-sheet-pages/character-gameplay.component"
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
          <Route exact path={`${match.path}/gameplay`} component={CharacterGameplay} />

          <Route path={`${match.path}`} component={SheetsPageNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default CharacterSheetPage
