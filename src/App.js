// PACKAGES
import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import Axios from "axios"

// CSS
import "./App.scss"

// CONTEXT
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// COMPONENTS
import Home from "./Components/Pages/Home"
import HomeGuest from "./Components/Pages/HomeGuest"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"
import Profile from "./Components/Pages/Profile"
import About from "./Components/Pages/About"
import PopupForm from "./Components/PopupForm"
import FlashMessage from "./Components/FlashMessage"

Axios.defaults.baseURL = "http://localhost:2890"
//Axios.defaults.baseURL = "https://backendforpaxgameplay.herokuapp.com"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("avariceApiToken")),
    flashMessages: [],
    flashMessagesDisplayed: false,
    user: {
      token: localStorage.getItem("avariceApiToken"),
      username: localStorage.getItem("avariceUsername"),
    },
    currentPopupForm: "",
    popupFormDisplayed: false,
  }

  function appReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        break
      case "logout":
        draft.loggedIn = false
        break
      case "register":
        draft.loggedIn = true
        draft.user = action.data
        break
      case "flashMessage":
        draft.flashMessages.push(action.value)
        break
      case "changeCurrentPopupForm":
        draft.currentPopupForm = action.data
        break
      case "displayPopupForm":
        draft.popupFormDisplayed = true
        break
      case "displayFlashMessage":
        draft.flashMessagesDisplayed = true
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("avariceApiToken", state.user.token)
      localStorage.setItem("avariceUsername", state.user.username)
    } else {
      localStorage.removeItem("avariceApiToken")
      localStorage.removeItem("avariceUsername")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home /> : <HomeGuest />}
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/character">
              <CharacterSheet />
            </Route>
            <Route path="/campaign">
              <CampaignSheet />
            </Route>
          </Switch>
          {state.popupFormDisplayed ? <PopupForm /> : ""}
          {state.flashMessagesDisplayed ? <FlashMessage /> : ""}
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
