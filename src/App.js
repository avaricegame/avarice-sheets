import React from "react"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { CSSTransition } from "react-transition-group"

import "./App.scss"

import ErrorBoundary from "./components/error-boundary/error-boundary.component"
import MainPageNotFound from "./pages/main-page-not-found/main-page-not-found.component"

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { default as HomePage } from "./pages/homepage/homepage.container"
import { default as ProfilePage } from "./pages/profile/profile.container"
import { default as CharacterSheetPage } from "./pages/character-sheet/character-sheet.component"
import { default as CampaignSheetPage } from "./pages/campaign-sheet/campaign-sheet.component"

// app components
import PopupForm, { PopupFormBackground } from "./components/popup-form/popup-form.component"
import FlashMessage from "./components/flash-message/flash-message.component"

// actions
import { fetchCurrentUserStart } from "./redux/user/user.actions"
import { togglePopupForm } from "./redux/app/app.actions"

// selectors
import { selectToken } from "./redux/user/user.selectors"
import { selectIsPopupFormVisible, selectFlashMessages } from "./redux/app/app.selectors"

class App extends React.Component {
  componentDidMount() {
    const { fetchCurrentUserStart, token } = this.props

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
    const { token, isPopupFormVisible, togglePopupForm, flashMessages } = this.props
    return (
      <>
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" render={() => (token ? <HomePage /> : <SignInAndSignUpPage />)} />
            <Route
              exact
              path="/profile"
              render={() => (token ? <ProfilePage /> : <SignInAndSignUpPage />)}
            />
            <Route
              path="/character/:charid"
              render={() => (token ? <CharacterSheetPage /> : <SignInAndSignUpPage />)}
            />
            <Route
              path="/campaign/:campid"
              render={() => (token ? <CampaignSheetPage /> : <SignInAndSignUpPage />)}
            />
            <Route
              path="/not-found"
              render={() => (token ? <MainPageNotFound /> : <SignInAndSignUpPage />)}
            />
          </ErrorBoundary>
        </Switch>

        {/* FLASH MESSAGES */}
        <FlashMessage messages={flashMessages} />

        {/* POPUP FORM AND BACKGROUND */}
        <CSSTransition
          timeout={500}
          in={isPopupFormVisible}
          classNames="popupform-background"
          unmountOnExit
        >
          <PopupFormBackground onClick={() => togglePopupForm(null)} />
        </CSSTransition>
        <CSSTransition timeout={500} in={isPopupFormVisible} classNames="popupform" unmountOnExit>
          <PopupForm />
        </CSSTransition>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  isPopupFormVisible: selectIsPopupFormVisible,
  flashMessages: selectFlashMessages,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUserStart: (token) => dispatch(fetchCurrentUserStart(token)),
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
