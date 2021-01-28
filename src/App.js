import React from "react"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./App.scss"

import ErrorBoundary from "./components/error-boundary/error-boundary.component"
import MainPageNotFound from "./pages/main-page-not-found/main-page-not-found.component"

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import HomePage from "./pages/homepage/homepage.component"
import ProfilePage from "./pages/profile/profile.component"
import CharacterSheetPage from "./pages/character-sheet/character-sheet.component"
import CampaignSheetPage from "./pages/campaign-sheet/campaign-sheet.component"

import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props
    const USERS = require("./redux/json/users.json")

    setCurrentUser({
      id: USERS[0]._id,
      ...USERS[0],
    })
  }

  render() {
    const { currentUser } = this.props
    return (
      <>
        <Switch>
          <ErrorBoundary>
            <Route
              exact
              path="/"
              render={() => (currentUser ? <HomePage /> : <SignInAndSignUpPage />)}
            />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/character/:charid" component={CharacterSheetPage} />
            <Route path="/campaign/:campid" component={CampaignSheetPage} />
            <Route path="/not-found" component={MainPageNotFound} />
          </ErrorBoundary>
        </Switch>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
