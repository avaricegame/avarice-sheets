import React, { useEffect, useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import "./App.scss"

import ErrorBoundary from "./components/error-boundary/error-boundary.component"
import PageNotFound from "./pages/page-not-found/page-not-found.component"

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import HomePage from "./pages/homepage/homepage.component"
import ProfilePage from "./pages/profile/profile.component"
import CharacterSheetPage from "./pages/character-sheet/character-sheet.component"
import CampaignSheetPage from "./pages/campaign-sheet/campaign-sheet.component"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setCurrentUser({
      name: "Talon",
      email: "email@email.com",
    })
  }, [])

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
          <Route path="/character" component={CharacterSheetPage} />
          <Route path="/campaign" component={CampaignSheetPage} />
          <Route path="/" component={PageNotFound} />
        </ErrorBoundary>
      </Switch>
    </>
  )
}

export default App
