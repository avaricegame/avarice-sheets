import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./App.scss"

import ErrorBoundary from "./components/error-boundary/error-boundary.component"
import MainPageNotFound from "./pages/main-page-not-found/main-page-not-found.component"

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { default as HomePage } from "./pages/homepage/homepage.container"
import ProfilePage from "./pages/profile/profile.component"
import { default as CharacterSheetPage } from "./pages/character-sheet/character-sheet.container"
import { default as CampaignSheetPage } from "./pages/campaign-sheet/campaign-sheet.container"

// app components
import PopupForm from "./components/popup-form/popup-form.component"

import { fetchCurrentUserStart } from "./redux/user/user.actions"
import { selectCurrentUser, selectToken } from "./redux/user/user.selectors"
import { selectIsPopupFormVisible } from "./redux/app/app.selectors"

class App extends React.Component {
  componentDidMount() {
    const { fetchCurrentUserStart } = this.props
    const token = localStorage.getItem("token")
    if (token) {
      fetchCurrentUserStart({ token })
    }
  }

  componentDidUpdate() {
    const { isPopupFormVisible } = this.props

    if (isPopupFormVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  render() {
    const { currentUser, isPopupFormVisible } = this.props
    return (
      <>
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/character/:charid" component={CharacterSheetPage} />
            <Route path="/campaign/:campid" component={CampaignSheetPage} />
            <Route path="/not-found" component={MainPageNotFound} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
            />
          </ErrorBoundary>
        </Switch>
        {isPopupFormVisible ? <PopupForm /> : null}
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  currentUser: selectCurrentUser,
  isPopupFormVisible: selectIsPopupFormVisible,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUserStart: (token) => dispatch(fetchCurrentUserStart(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
