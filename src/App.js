// PACKAGES
import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import Axios from "axios"

// CSS
import "./App.scss"

// CONTEXT
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// pages
import Home from "./Components/Pages/Home"
import HomeGuest from "./Components/Pages/HomeGuest"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"
import Profile from "./Components/Pages/Profile"
import Error from "./Components/Error"
// info pages
import About from "./Components/Pages/Information/About"
import Terms from "./Components/Pages/Information/Terms"
import Privacy from "./Components/Pages/Information/Privacy"
// components
import PopupForm from "./Components/PopupForm"
import FlashMessage from "./Components/FlashMessage"

//Axios.defaults.baseURL = "http://localhost:2890"
Axios.defaults.baseURL = "https://backendforpaxgameplay.herokuapp.com"

function App() {
  // set inital state of entire app
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("avariceApiToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("avariceApiToken"),
      username: localStorage.getItem("avariceUsername"),
    },
    currentPopupForm: "",
    popupFormVisible: false,
    charSheetArray: [],
  }

  // reducer function for appwide state
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
      case "changePopupForm":
        draft.currentPopupForm = action.data
        break
      case "showPopupForm":
        draft.popupFormVisible = true
        document.body.style.overflow = "hidden"
        break
      case "hidePopupForm":
        draft.popupFormVisible = false
        document.body.style.overflow = "unset"
        break
      case "setCharSheetArray":
        draft.charSheetArray = action.data
        break
      default:
        break
    }
  }

  // set appwide state and dispatch
  const [state, dispatch] = useImmerReducer(appReducer, initialState)

  // set the token and username in local storage if logged in
  // otherwise, delete them and the current charSheetID
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("avariceApiToken", state.user.token)
      localStorage.setItem("avariceUsername", state.user.username)
    } else {
      localStorage.removeItem("avariceApiToken")
      localStorage.removeItem("avariceUsername")
    }
  }, [state.loggedIn, state.user.token, state.user.username])

  // make sure the app loads while pulling up the character sheet array
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (state.loggedIn) {
      // make the call to grab ALL the charsheets for the current user
      Axios.get(`/home`, {
        headers: {
          Authorization: "Bearer " + state.user.token,
        },
      })
        .then(function (response) {
          // dispatch to set the array of charsheetes
          dispatch({
            type: "setCharSheetArray",
            data: response.data,
          })
          setIsLoading(false)
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [state.loggedIn, dispatch, state.user.token, state.user.username])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home isLoading={isLoading} /> : <HomeGuest />}
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/character/:charid">
              <CharacterSheet />
            </Route>
            <Route path="/campaign">
              <CampaignSheet />
            </Route>
            <Route path="/">
              <Error />
            </Route>
          </Switch>
          {state.popupFormVisible ? <PopupForm /> : ""}
          <FlashMessage />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
